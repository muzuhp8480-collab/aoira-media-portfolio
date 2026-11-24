const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

async function findChrome() {
  const possiblePaths = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  ];
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error('No Chrome/Edge browser found.');
}

async function verify() {
  const executablePath = await findChrome();
  console.log('Using browser executable:', executablePath);

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    pipe: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-gpu'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });

  // 1. Verify Section Order
  const sectionIds = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('main > section')).map(s => s.id);
  });
  console.log('Detected section order in <main>:', sectionIds);

  const expectedOrder = [
    'home',
    'about',
    'high-quality-videos',
    'medium-quality-videos',
    'service-videos',
    'food-videos',
    'product-videos',
    'perfume-videos',
    'contact'
  ];

  const orderMatches = JSON.stringify(sectionIds) === JSON.stringify(expectedOrder);
  console.log('Section order match expected:', orderMatches ? '✅ PASS' : '❌ FAIL');

  // 2. Verify Desktop Dropdown Links
  const dropdownLinks = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.dropdown-menu a')).map(a => ({
      text: a.textContent.trim(),
      href: a.getAttribute('href')
    }));
  });
  console.log('Dropdown menu items:', dropdownLinks);
  const hasMediumInNav = dropdownLinks.some(l => l.text.toLowerCase().includes('medium') && l.href === '#medium-quality-videos');
  console.log('Medium Quality in desktop nav:', hasMediumInNav ? '✅ PASS' : '❌ FAIL');

  // 3. Verify Phone Number Privacy (Must NOT be present in body text)
  const bodyText = await page.evaluate(() => document.body.innerText);
  const showsPhoneNumber = bodyText.includes('9747368480');
  console.log('Does page body text display 9747368480? (Expected: false):', showsPhoneNumber ? '❌ LEAKED' : '✅ CLEAN (Hidden from text)');

  // 4. Verify WhatsApp URL Generation
  // Intercept window.open
  await page.evaluate(() => {
    window.__openedUrls = [];
    window.open = (url) => { window.__openedUrls.push(url); return null; };
  });

  // Test Direct Chat button
  await page.click('#btn-direct-chat');
  const directUrl = await page.evaluate(() => window.__openedUrls.pop());
  console.log('Direct Chat URL opened:', directUrl);
  const directPass = directUrl === 'https://wa.me/919747368480';
  console.log('Direct Chat WhatsApp destination correct:', directPass ? '✅ PASS' : '❌ FAIL');

  // Test Form Enquiry button
  await page.type('#contact-name', 'Mohammed');
  await page.type('#contact-phone', '9876543210');
  await page.click('#btn-submit-enquiry');
  const enquiryUrl = await page.evaluate(() => window.__openedUrls.pop());
  console.log('Enquiry WhatsApp URL opened:', enquiryUrl);
  const expectedMsgPart = '919747368480';
  const enquiryPass = enquiryUrl && enquiryUrl.includes(expectedMsgPart) && enquiryUrl.includes('Mohammed') && enquiryUrl.includes('9876543210') && enquiryUrl.includes(encodeURIComponent('I want AI video.'));
  console.log('Enquiry WhatsApp destination and payload correct:', enquiryPass ? '✅ PASS' : '❌ FAIL');

  // 5. Verify 3D Canvas
  const hasCanvas = await page.evaluate(() => {
    const canvas = document.querySelector('#hero-3d-container canvas');
    return canvas && canvas.clientWidth > 0 && canvas.clientHeight > 0;
  });
  console.log('Hero 3D WebGL Canvas active:', hasCanvas ? '✅ PASS' : '❌ FAIL');

  // 6. Verify Cloned Hero Architecture & Chrome Title
  const hasChromeTitle = await page.evaluate(() => {
    const title = document.querySelector('.hero-title-chrome');
    return title && title.textContent.trim() === 'PORTFOLIO';
  });
  console.log('Monumental Chrome Title PORTFOLIO present:', hasChromeTitle ? '✅ PASS' : '❌ FAIL');

  const hasDualRow = await page.evaluate(() => {
    const dualRow = document.querySelector('.hero-dual-row');
    const roleAnchor = document.querySelector('.hero-corner-role');
    const ctaAnchor = document.querySelector('.hero-corner-cta');
    return Boolean(dualRow && roleAnchor && ctaAnchor);
  });
  console.log('Dual Corner Anchor Row (Capabilities & CTA) present:', hasDualRow ? '✅ PASS' : '❌ FAIL');

  const hasReplayBtn = await page.evaluate(() => {
    return Boolean(document.querySelector('#btn-replay-intro'));
  });
  console.log('Replay Intro button present in 3D HUD chip:', hasReplayBtn ? '✅ PASS' : '❌ FAIL');

  // Take screenshot of Cloned Hero section
  const heroSection = await page.$('#home');
  if (heroSection) {
    const screenshotDir = path.resolve(__dirname, '..', 'public', 'assets');
    const heroScreenshotPath = path.resolve(screenshotDir, 'cloned-hero-verified.png');
    await heroSection.screenshot({ path: heroScreenshotPath });
    console.log('Saved screenshot of Cloned Hero section to:', heroScreenshotPath);
  }

  // Take screenshot of Medium Quality section
  const mediumSection = await page.$('#medium-quality-videos');
  if (mediumSection) {
    const screenshotDir = path.resolve(__dirname, '..', 'public', 'assets');
    const screenshotPath = path.resolve(screenshotDir, 'medium-quality-verified.png');
    await mediumSection.screenshot({ path: screenshotPath });
    console.log('Saved screenshot of Medium Quality section to:', screenshotPath);
  }

  await browser.close();

  if (orderMatches && hasMediumInNav && !showsPhoneNumber && directPass && enquiryPass && hasCanvas && hasChromeTitle && hasDualRow && hasReplayBtn) {
    console.log('\n🎉 ALL VERIFICATION CHECKS PASSED PERFECTLY!');
  } else {
    console.error('\n⚠️ SOME CHECKS FAILED. Please review above.');
    process.exit(1);
  }
}

verify().catch(err => {
  console.error('Verification error:', err);
  process.exit(1);
});
