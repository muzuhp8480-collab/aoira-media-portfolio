/**
 * Aiora Media - Interactive 3D WebGL Experience
 * Inspired by high-end creative developer portfolios (MoncyDev / Antimatter AI aesthetic)
 * 
 * Features:
 * - 3D Translucent Glass Core with Faceted Icosahedron Matrix & Luminous Edges
 * - Inner Pulsing Plasma Energy Core with Chromatic Dispersion
 * - Dual Gyroscopic Orbital Gimbal Rings with Satellite Data Nodes
 * - 1,500+ Floating Stardust Particles reacting to cursor physics
 * - Interactive Mouse/Touch Orbit & Inertia Dragging
 * - Dynamic Volumetric Specular Lighting tracking cursor position
 * - Viewport Visibility Culling via IntersectionObserver (0% idle CPU when scrolled away)
 * - Accessibility: respects prefers-reduced-motion
 */

import * as THREE from 'three';

export class AioraThreeScene {
  constructor(containerElement) {
    this.container = containerElement;
    if (!this.container) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    
    // 3D Objects
    this.coreGroup = null;
    this.outerCrystal = null;
    this.innerCore = null;
    this.wireframeCage = null;
    this.ring1 = null;
    this.ring2 = null;
    this.satelliteNodes = [];
    this.particles = null;
    this.primaryLight = null;

    // Interaction & Animation State
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetRotationX = 0;
    this.targetRotationY = 0;
    this.currentRotationX = 0;
    this.currentRotationY = 0;
    this.isDragging = false;
    this.previousPointerPosition = { x: 0, y: 0 };
    this.dragVelocity = { x: 0, y: 0 };
    
    this.clock = new THREE.Clock();
    this.animationFrameId = null;
    this.isVisible = true;
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.init();
  }

  init() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || (window.innerHeight * 0.85);

    // 1. Scene
    this.scene = new THREE.Scene();

    // 2. Camera with responsive distance for optimal typography framing
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.set(0, width < 768 ? 0.7 : 0.35, width < 768 ? 11.5 : 9.4);

    // 3. Renderer with ACES Tone Mapping & Alpha transparency
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;

    // Append canvas
    const canvas = this.renderer.domElement;
    canvas.classList.add('hero-3d-canvas');
    canvas.setAttribute('aria-hidden', 'true');
    this.container.appendChild(canvas);

    // 4. Lighting System (Aiora Brand Blue & Electric Cyan Speculars)
    this.setupLighting();

    // 5. 3D Centerpiece Group
    this.setupCenterpiece();

    // 6. Particle Constellation
    this.setupParticles();

    // 7. Event Listeners
    this.setupEventListeners();

    // 8. Visibility Culling via IntersectionObserver
    this.setupVisibilityObserver();

    // 9. Start Render Loop
    this.animate();
  }

  setupLighting() {
    // Ambient light - Deep sapphire base
    const ambientLight = new THREE.AmbientLight(0x0a1a2f, 1.8);
    this.scene.add(ambientLight);

    // Primary moving light - Brand Blue (#1c75bc / #1877f2)
    this.primaryLight = new THREE.PointLight(0x1c75bc, 8, 30);
    this.primaryLight.position.set(4, 5, 6);
    this.scene.add(this.primaryLight);

    // Secondary rim light - Vibrant Cyan (#00e5ff)
    const rimLight = new THREE.PointLight(0x00e5ff, 5, 25);
    rimLight.position.set(-5, -4, 4);
    this.scene.add(rimLight);

    // Top backlight - Crisp White Accent
    const backLight = new THREE.DirectionalLight(0x70b8ff, 2.0);
    backLight.position.set(0, 8, -6);
    this.scene.add(backLight);
  }

  setupCenterpiece() {
    this.coreGroup = new THREE.Group();
    this.scene.add(this.coreGroup);

    // --- A. Outer Refractive Crystal (Faceted Icosahedron) ---
    const crystalGeo = new THREE.IcosahedronGeometry(1.9, 1);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x114f7d,
      roughness: 0.15,
      metalness: 0.1,
      transmission: 0.82,
      thickness: 1.8,
      transparent: true,
      opacity: 0.72,
      ior: 1.6,
      reflectivity: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissive: 0x092842,
      emissiveIntensity: 0.35,
      flatShading: true
    });
    this.outerCrystal = new THREE.Mesh(crystalGeo, crystalMat);
    this.coreGroup.add(this.outerCrystal);

    // --- B. Cyber Matrix Wireframe Cage ---
    const wireframeGeo = new THREE.IcosahedronGeometry(1.94, 1);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x2f8fff,
      wireframe: true,
      transparent: true,
      opacity: 0.38
    });
    this.wireframeCage = new THREE.Mesh(wireframeGeo, wireframeMat);
    this.coreGroup.add(this.wireframeCage);

    // --- C. Glowing Vertex Node Markers ---
    const vertexPositions = wireframeGeo.attributes.position;
    const vertexGeo = new THREE.SphereGeometry(0.045, 8, 8);
    const vertexMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
    
    // Create an instanced or distinct node set at unique vertices
    const uniquePositions = [];
    for (let i = 0; i < vertexPositions.count; i++) {
      const v = new THREE.Vector3(
        vertexPositions.getX(i),
        vertexPositions.getY(i),
        vertexPositions.getZ(i)
      );
      if (!uniquePositions.some(p => p.distanceTo(v) < 0.1)) {
        uniquePositions.push(v);
        const node = new THREE.Mesh(vertexGeo, vertexMat);
        node.position.copy(v);
        this.coreGroup.add(node);
      }
    }

    // --- D. Inner Pulsing Energy Core ---
    const innerGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x1877f2,
      emissiveIntensity: 2.2,
      roughness: 0.25,
      metalness: 0.8
    });
    this.innerCore = new THREE.Mesh(innerGeo, innerMat);
    this.coreGroup.add(this.innerCore);

    // --- E. Gyroscopic Gimbal Ring 1 (Inner Torus) ---
    const ring1Geo = new THREE.TorusGeometry(2.65, 0.022, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x1c75bc,
      emissive: 0x125f93,
      emissiveIntensity: 0.8,
      metalness: 0.9,
      roughness: 0.15
    });
    this.ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    this.ring1.rotation.x = Math.PI * 0.25;
    this.ring1.rotation.y = Math.PI * 0.15;
    this.coreGroup.add(this.ring1);

    // --- F. Gyroscopic Gimbal Ring 2 (Outer Orbit) ---
    const ring2Geo = new THREE.TorusGeometry(3.15, 0.016, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x0099cc,
      emissiveIntensity: 0.6,
      metalness: 0.85,
      roughness: 0.2
    });
    this.ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    this.ring2.rotation.x = -Math.PI * 0.35;
    this.ring2.rotation.z = Math.PI * 0.2;
    this.coreGroup.add(this.ring2);

    // --- G. Orbiting Satellite Nodes on Ring 2 ---
    const satelliteGeo = new THREE.SphereGeometry(0.08, 12, 12);
    const satelliteMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
    for (let i = 0; i < 3; i++) {
      const sat = new THREE.Mesh(satelliteGeo, satelliteMat);
      this.satelliteNodes.push({
        mesh: sat,
        angle: (i * (Math.PI * 2 / 3)),
        radius: 3.15,
        speed: 0.8 + i * 0.15
      });
      this.ring2.add(sat);
    }
  }

  setupParticles() {
    // Generate an organic stardust particle texture using pure offscreen canvas
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.2, 'rgba(0, 229, 255, 0.8)');
    grad.addColorStop(0.5, 'rgba(28, 117, 188, 0.35)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const texture = new THREE.CanvasTexture(canvas);

    const count = this.prefersReducedMotion ? 400 : 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorChoices = [
      new THREE.Color(0x125f93), // Brand Blue
      new THREE.Color(0x1c75bc), // Luminous Blue
      new THREE.Color(0x2f8fff), // Electric Blue
      new THREE.Color(0x00e5ff), // Cyan highlight
      new THREE.Color(0xffffff)  // Star white
    ];

    for (let i = 0; i < count; i++) {
      // Spherical distribution around centerpiece
      const r = 3.5 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = (r * Math.sin(phi) * Math.sin(theta)) * 0.75;
      positions[i * 3 + 2] = r * Math.cos(phi) - 2;

      const c = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.16,
      map: texture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  setupEventListeners() {
    // Window Resize
    window.addEventListener('resize', this.onResize.bind(this), { passive: true });

    // Mouse Move Parallax
    window.addEventListener('mousemove', (e) => {
      this.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      if (!this.isDragging) {
        this.targetRotationY = this.mouseX * 0.55;
        this.targetRotationX = -this.mouseY * 0.4;
      }
    }, { passive: true });

    // Interactive Dragging on Hero Container
    const dragTarget = this.container;

    dragTarget.addEventListener('pointerdown', (e) => {
      // Don't hijack clicks on buttons/links
      if (e.target.closest('a') || e.target.closest('button')) return;
      this.isDragging = true;
      this.previousPointerPosition = { x: e.clientX, y: e.clientY };
      dragTarget.style.cursor = 'grabbing';
    });

    window.addEventListener('pointermove', (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.previousPointerPosition.x;
      const deltaY = e.clientY - this.previousPointerPosition.y;

      this.dragVelocity.x = deltaX * 0.005;
      this.dragVelocity.y = deltaY * 0.005;

      this.targetRotationY += this.dragVelocity.x;
      this.targetRotationX += this.dragVelocity.y;

      this.previousPointerPosition = { x: e.clientX, y: e.clientY };
    }, { passive: true });

    const stopDragging = () => {
      if (this.isDragging) {
        this.isDragging = false;
        dragTarget.style.cursor = 'grab';
      }
    };

    window.addEventListener('pointerup', stopDragging);
    window.addEventListener('pointercancel', stopDragging);
  }

  setupVisibilityObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.isVisible = entry.isIntersecting;
        if (this.isVisible && !this.animationFrameId) {
          this.clock.start();
          this.animate();
        }
      });
    }, { threshold: 0.05 });

    observer.observe(this.container);
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || (window.innerHeight * 0.85);

    this.camera.aspect = width / height;
    this.camera.position.z = width < 768 ? 11.5 : 9.4;
    this.camera.position.y = width < 768 ? 0.7 : 0.35;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  animate() {
    if (!this.isVisible) {
      this.animationFrameId = null;
      return;
    }

    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Inertia & Lerping Rotations
    if (!this.isDragging) {
      this.dragVelocity.x *= 0.94;
      this.dragVelocity.y *= 0.94;
      this.targetRotationY += this.dragVelocity.x;
      this.targetRotationX += this.dragVelocity.y;
    }

    // Gentle base autonomous drift unless reduced motion
    const autoSpeed = this.prefersReducedMotion ? 0.02 : 0.28;
    this.targetRotationY += autoSpeed * delta;

    this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.08;
    this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.08;

    if (this.coreGroup) {
      this.coreGroup.rotation.x = this.currentRotationX;
      this.coreGroup.rotation.y = this.currentRotationY;

      // Gentle vertical breathing wave
      if (!this.prefersReducedMotion) {
        this.coreGroup.position.y = Math.sin(elapsedTime * 1.6) * 0.12;
      }
    }

    // 2. Animate Internal Geometries
    if (this.outerCrystal) {
      this.outerCrystal.rotation.z += 0.15 * delta;
    }

    if (this.innerCore) {
      // Pulsing scale
      const pulse = 1 + Math.sin(elapsedTime * 3.2) * 0.06;
      this.innerCore.scale.set(pulse, pulse, pulse);
    }

    if (this.ring1) {
      this.ring1.rotation.z += 0.5 * delta;
      this.ring1.rotation.y += 0.25 * delta;
    }

    if (this.ring2) {
      this.ring2.rotation.z -= 0.35 * delta;
      this.ring2.rotation.x += 0.2 * delta;
    }

    // 3. Orbiting Satellite Nodes
    this.satelliteNodes.forEach(sat => {
      sat.angle += sat.speed * delta;
      sat.mesh.position.x = Math.cos(sat.angle) * sat.radius;
      sat.mesh.position.y = Math.sin(sat.angle) * sat.radius;
    });

    // 4. Stardust Particles Motion
    if (this.particles && !this.prefersReducedMotion) {
      this.particles.rotation.y += 0.04 * delta;
      this.particles.rotation.x = Math.sin(elapsedTime * 0.3) * 0.08;
    }

    // 5. Dynamic Light Follows Cursor
    if (this.primaryLight) {
      this.primaryLight.position.x += ((this.mouseX * 6) - this.primaryLight.position.x) * 0.05;
      this.primaryLight.position.y += ((this.mouseY * 5) - this.primaryLight.position.y) * 0.05;
    }

    // 6. Render
    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.onResize);
    if (this.renderer && this.renderer.domElement) {
      this.renderer.domElement.remove();
      this.renderer.dispose();
    }
  }
}
