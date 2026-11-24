/**
 * Aiora Media - Video Portfolio Content
 * 
 * Page Order:
 * 1. Home / Hero (Ref 1 theme + Ref 2 animation)
 * 2. High Quality
 * 3. Medium Quality
 * 4. Base Quality
 * 5. Categories (Perfume Videos, Product Videos, Service Videos, Food Videos)
 *    - With interactive tab filtering: clicking each category shows ONLY its videos!
 * 6. Contact & WhatsApp CTA
 */

export const QUALITY_TIERS = {
  high: {
    id: "high-quality",
    name: "High Quality"
  },
  medium: {
    id: "medium-quality",
    name: "Medium Quality"
  },
  base: {
    id: "base-quality",
    name: "Base Quality"
  }
};

export const PORTFOLIO_VIDEOS = [
  // =========================================================================
  // 1. HIGH QUALITY (FLAGSHIP STUDIO PRODUCTIONS - ALL CLIENT VIDEOS)
  // =========================================================================
  {
    id: "hq-9858",
    title: "Nesto Commercial (9858)",
    tier: "high",
    category: "nesto",
    videoSource: "/videos/IMG_9858.MOV",
    aspectRatio: "9:16",
    duration: "4K Master",
    tags: ["High Quality", "Nesto", "Commercial"],
    caption: "High-production commercial edit for Nesto Hypermarket showcasing deals, store atmosphere, and brand presence."
  },
  {
    id: "hq-9895",
    title: "Nesto Campaign (9895)",
    tier: "high",
    category: "nesto",
    videoSource: "/videos/IMG_9895.MOV",
    aspectRatio: "9:16",
    duration: "4K Master",
    tags: ["High Quality", "Nesto", "Festival Campaign"],
    caption: "Cinematic commercial campaign featuring vibrant visuals and studio audio mix."
  },
  {
    id: "hq-0372",
    title: "Nesto Showcase (0372)",
    tier: "high",
    category: "nesto",
    videoSource: "/videos/IMG_0372.MOV",
    aspectRatio: "9:16",
    duration: "4K Master",
    tags: ["High Quality", "Nesto", "Retail Showcase"],
    caption: "Dynamic retail walkthrough spotlighting departments, fresh goods, and customer shopping flow."
  },
  {
    id: "hq-9864",
    title: "Aiora Flagship Reel (9864)",
    tier: "high",
    category: "product",
    videoSource: "/videos/IMG_9864_h264.mp4",
    aspectRatio: "9:16",
    duration: "Cinema HD",
    tags: ["High Quality", "Cinematic Cut", "Brand Story"],
    caption: "Precision edited flagship video engineered for maximum visual impact and brand presence."
  },
  {
    id: "hq-9872",
    title: "Aiora Visual Production (9872)",
    tier: "high",
    category: "service",
    videoSource: "/videos/IMG_9872_h264.mp4",
    aspectRatio: "9:16",
    duration: "Cinema HD",
    tags: ["High Quality", "Color Grade", "Commercial"],
    caption: "Artful cinematic composition blending storytelling, rich tones, and smooth transitions."
  },
  {
    id: "hq-9980",
    title: "Aiora Brand Commercial (9980)",
    tier: "high",
    category: "product",
    videoSource: "/videos/IMG_9980_h264.mp4",
    aspectRatio: "9:16",
    duration: "Cinema HD",
    tags: ["High Quality", "Motion Design", "Studio Master"],
    caption: "High-energy commercial cut with synchronized rhythm, clean typography, and crisp output."
  },
  {
    id: "hq-0012",
    title: "Cinematic Showcase (0012)",
    tier: "high",
    category: "service",
    videoSource: "/videos/IMG_0012_h264.mp4",
    aspectRatio: "9:16",
    duration: "4K Cinema",
    tags: ["High Quality", "Visual Direction", "4K"],
    caption: "Refined cinematic production featuring natural lighting, detailed framing, and studio polish."
  },
  {
    id: "hq-0307",
    title: "Studio Production (0307)",
    tier: "high",
    category: "product",
    videoSource: "/videos/IMG_0307.MOV",
    aspectRatio: "9:16",
    duration: "4K Cinema",
    tags: ["High Quality", "Macro Frames", "Sound Design"],
    caption: "Detailed visual exploration focusing on textures, pacing, and immersive soundscapes."
  },
  {
    id: "hq-0368",
    title: "Aiora Motion Film (0368)",
    tier: "high",
    category: "service",
    videoSource: "/videos/IMG_0368.MOV",
    aspectRatio: "9:16",
    duration: "4K Cinema",
    tags: ["High Quality", "Camera Tracking", "Color Tone"],
    caption: "Dynamic camera movement and high-fidelity grading crafted for premier brand presentation."
  },
  {
    id: "hq-abba-orange",
    title: "Abba Orange Brand Film",
    tier: "high",
    category: "food",
    videoSource: "/videos/abba_orange.mov",
    aspectRatio: "16:9",
    duration: "4K Cinema",
    tags: ["High Quality", "Abba Orange", "Commercial Film"],
    caption: "Artistic commercial film capturing vibrant hues, crisp details, and sensory brand identity."
  },

  // =========================================================================
  // 2. MEDIUM QUALITY
  // =========================================================================
  {
    id: "medium-01",
    title: "Culinary Sensory Promo",
    tier: "medium",
    category: "food",
    poster: "",
    videoSource: "",
    aspectRatio: "16:9",
    duration: "0:50",
    tags: ["Hospitality", "Color Grade", "Macro Frames"],
    caption: "Rich sensory restaurant and culinary commercial with warm film tone grading and foley sound design."
  },
  {
    id: "medium-02",
    title: "Tech & Hardware Commercial",
    tier: "medium",
    category: "product",
    poster: "",
    videoSource: "",
    aspectRatio: "9:16",
    duration: "0:30",
    tags: ["Hardware", "Motion Graphics", "SFX Mix"],
    caption: "Sleek vertical commercial featuring 3D text tracking, fast-paced match cuts, and bass-heavy audio."
  },
  {
    id: "medium-03",
    title: "Brand Narrative & Founder Story",
    tier: "medium",
    category: "service",
    poster: "",
    videoSource: "",
    aspectRatio: "16:9",
    duration: "1:20",
    tags: ["Storytelling", "Interview", "Cinematic Cut"],
    caption: "Artful documentary-style commercial connecting brand ethos with audience emotion."
  },
  {
    id: "medium-04",
    title: "Urban Fashion & Apparel Reel",
    tier: "medium",
    category: "product",
    poster: "",
    videoSource: "",
    aspectRatio: "9:16",
    duration: "0:35",
    tags: ["Fashion", "Speed Ramp", "Stylized Tone"],
    caption: "Speed-ramped fashion editorial video with custom color palettes and urban aesthetic."
  },

  // =========================================================================
  // 3. BASE QUALITY
  // =========================================================================
  {
    id: "base-01",
    title: "Daily Social Pulse Reel",
    tier: "base",
    category: "product",
    poster: "",
    videoSource: "",
    aspectRatio: "9:16",
    duration: "0:25",
    tags: ["9:16 Reel", "Fast Edits", "Kinetic Captions"],
    caption: "High-energy social media reel with clean cuts and kinetic caption styling."
  },
  {
    id: "base-02",
    title: "Fast-Cut Brand Showcase",
    tier: "base",
    category: "service",
    poster: "",
    videoSource: "",
    aspectRatio: "16:9",
    duration: "0:45",
    tags: ["16:9 Promo", "Brand Cut", "Starter Pack"],
    caption: "Streamlined corporate and business promo reel with crisp audio and brand identity overlays."
  },
  {
    id: "base-03",
    title: "Product Feature Teaser",
    tier: "base",
    category: "product",
    poster: "",
    videoSource: "",
    aspectRatio: "9:16",
    duration: "0:15",
    tags: ["9:16 Story", "E-Commerce", "Clean Motion"],
    caption: "Punchy vertical teaser highlighting key product specs for Instagram & TikTok feeds."
  },
  {
    id: "base-04",
    title: "Event Recap & Highlight Reel",
    tier: "base",
    category: "service",
    poster: "",
    videoSource: "",
    aspectRatio: "16:9",
    duration: "1:00",
    tags: ["Event Edit", "Rhythm Sync", "1080p FHD"],
    caption: "Dynamic rhythm-synced event highlight capturing the energy and ambiance."
  }
];

// =============================================================================
// 4. CATEGORY-SPECIFIC SHOWCASE VIDEOS (Perfume, Product, Service, Food)
// =============================================================================
export const CATEGORY_VIDEOS = {
  perfume: [
    {
      id: "cat-perfume-01",
      title: "The Oud Essence — Luxury Fragrance Film",
      category: "perfume",
      categoryName: "Perfume Videos",
      aspectRatio: "16:9",
      duration: "1:15",
      tags: ["Haute Parfumerie", "Sculptural Bottle", "Light Refraction"],
      caption: "Cinematic commercial capturing dark amber tones, smoky oud clouds, and sculptural fragrance bottle reflections."
    },
    {
      id: "cat-perfume-02",
      title: "Noir Elegance — Vertical Editorial Reel",
      category: "perfume",
      categoryName: "Perfume Videos",
      aspectRatio: "9:16",
      duration: "0:30",
      tags: ["9:16 Cinema", "Slow Motion", "Editorial"],
      caption: "High-fashion vertical teaser focusing on glass texture, liquid droplets, and mist dispersal."
    },
    {
      id: "cat-perfume-03",
      title: "Amber & Bakhoor — Sensory Oriental Campaign",
      category: "perfume",
      categoryName: "Perfume Videos",
      aspectRatio: "16:9",
      duration: "0:55",
      tags: ["Bakhoor", "Smoke Dynamics", "Oriental Aura"],
      caption: "Rich cultural aesthetic celebrating traditional incense crafting and luxury fragrance notes."
    },
    {
      id: "cat-perfume-04",
      title: "Velvet Rose & Musk — Product Commercial",
      category: "perfume",
      categoryName: "Perfume Videos",
      aspectRatio: "9:16",
      duration: "0:25",
      tags: ["Floral Notes", "Speed Ramp", "Luxury Tone"],
      caption: "Vibrant and romantic color grade emphasizing petal physics and fragrance atomization."
    }
  ],

  product: [
    {
      id: "cat-product-01",
      title: "Sonic Pro — Studio Headphone Reveal",
      category: "product",
      categoryName: "Product Videos",
      aspectRatio: "16:9",
      duration: "1:05",
      tags: ["Hardware Tech", "3D Camera Flythrough", "SFX"],
      caption: "Sculptural metallic lighting and exploded component breakdown showcasing engineering fidelity."
    },
    {
      id: "cat-product-02",
      title: "Minimalist Chrono — Luxury Watch Reel",
      category: "product",
      categoryName: "Product Videos",
      aspectRatio: "9:16",
      duration: "0:30",
      tags: ["Macro Optics", "Dial Mechanics", "9:16 Reel"],
      caption: "Ultra-close macro lens work highlighting dial brushwork, sapphire glass glare, and mechanical escapement."
    },
    {
      id: "cat-product-03",
      title: "Apex Carbon — Performance Sneaker Ad",
      category: "product",
      categoryName: "Product Videos",
      aspectRatio: "16:9",
      duration: "0:45",
      tags: ["Athletic", "Dynamic Lighting", "Fabric Texture"],
      caption: "High-energy speed ramp cuts accentuating carbon fiber weave, sole ergonomics, and studio strobe lighting."
    },
    {
      id: "cat-product-04",
      title: "Luma Optics — Smart Eyewear Launch",
      category: "product",
      categoryName: "Product Videos",
      aspectRatio: "9:16",
      duration: "0:20",
      tags: ["Wearable", "Kinetic Subtitles", "E-Commerce"],
      caption: "Crisp commercial engineered for high-converting social commerce feeds and product unboxing reels."
    }
  ],

  service: [
    {
      id: "cat-service-01",
      title: "Apex Logistics — Global Fleet Story",
      category: "service",
      categoryName: "Service Videos",
      aspectRatio: "16:9",
      duration: "1:30",
      tags: ["Corporate Film", "Aerial Cinematography", "Trust"],
      caption: "Expansive documentary commercial spotlighting international cargo logistics, freight hubs, and team dedication."
    },
    {
      id: "cat-service-02",
      title: "Elevate Consulting — Client Impact Narrative",
      category: "service",
      categoryName: "Service Videos",
      aspectRatio: "16:9",
      duration: "1:15",
      tags: ["Executive", "B2B Brand", "Cinematic Interview"],
      caption: "Polished corporate film blending executive interviews with dynamic workplace B-roll and clear typography."
    },
    {
      id: "cat-service-03",
      title: "Fintech Cloud — App & Platform Explainer",
      category: "service",
      categoryName: "Service Videos",
      aspectRatio: "9:16",
      duration: "0:35",
      tags: ["Motion Design", "App Workflow", "Fintech"],
      caption: "Engaging vertical reel demonstrating frictionless digital payments and interface clarity for users."
    },
    {
      id: "cat-service-04",
      title: "Prime Architecture — Spatial Walkthrough",
      category: "service",
      categoryName: "Service Videos",
      aspectRatio: "16:9",
      duration: "1:10",
      tags: ["Architecture", "Gimbal Motion", "Natural Light"],
      caption: "Smooth gimbal-driven architectural tour capturing natural sunlight angles and interior craft."
    }
  ],

  food: [
    {
      id: "cat-food-01",
      title: "The Searing Ember — Artisanal Steakhouse",
      category: "food",
      categoryName: "Food Videos",
      aspectRatio: "16:9",
      duration: "0:50",
      tags: ["Culinary", "Fire & Sizzle", "Foley Audio"],
      caption: "Sensory macro frames of charcoal searing, herb butter melting, and artisanal meat resting."
    },
    {
      id: "cat-food-02",
      title: "Artisan Sourdough — Morning Bake Reel",
      category: "food",
      categoryName: "Food Videos",
      aspectRatio: "9:16",
      duration: "0:30",
      tags: ["Bakery", "Flour Dusting", "Golden Crust"],
      caption: "Tactile vertical video capturing flour dispersal, dough scoring, and the crunch of freshly baked bread."
    },
    {
      id: "cat-food-03",
      title: "Velvet Pour — Specialty Espresso & Latte Art",
      category: "food",
      categoryName: "Food Videos",
      aspectRatio: "9:16",
      duration: "0:25",
      tags: ["Coffee", "Slow Motion", "Café Culture"],
      caption: "Slow-motion espresso extraction, steamed milk texture, and intricate tulip latte art pouring."
    },
    {
      id: "cat-food-04",
      title: "Botanica Bistro — Seasonal Menu Showcase",
      category: "food",
      categoryName: "Food Videos",
      aspectRatio: "16:9",
      duration: "1:00",
      tags: ["Gourmet", "Farm-to-Table", "Color Science"],
      caption: "Fresh garden ingredients, vibrant plating aesthetics, and dynamic kitchen prep pacing."
    }
  ],

  nesto: [
    {
      id: "cat-nesto-9858",
      title: "Nesto Commercial (9858)",
      category: "nesto",
      categoryName: "Nesto",
      videoSource: "/videos/IMG_9858.MOV",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Nesto", "9858", "Commercial"],
      caption: "High-production commercial edit for Nesto Hypermarket showcasing deals, store atmosphere, and brand presence."
    },
    {
      id: "cat-nesto-9895",
      title: "Nesto Campaign (9895)",
      category: "nesto",
      categoryName: "Nesto",
      videoSource: "/videos/IMG_9895.MOV",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Nesto", "9895", "Festival Campaign"],
      caption: "Dynamic festival campaign video crafted for Nesto social media promotion and high customer engagement."
    },
    {
      id: "cat-nesto-0372",
      title: "Nesto Showcase (0372)",
      category: "nesto",
      categoryName: "Nesto",
      videoSource: "/videos/IMG_0372.MOV",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Nesto", "0372", "Store Showcase"],
      caption: "Vibrant retail walkthrough spotlighting departments, fresh goods, and customer shopping flow."
    }
  ]
};
