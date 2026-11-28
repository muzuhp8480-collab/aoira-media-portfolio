/**
 * Aiora Media - Video Portfolio Content
 * 
 * Page Order:
 * 1. Home / Hero (Ref 1 theme + Ref 2 animation)
 * 2. High Quality (All 21 client & flagship productions with exact given names)
 * 3. Medium Quality
 * 4. Base Quality
 * 5. Categories (Perfume, Product, Service, Food, Nesto)
 * 6. Contact & WhatsApp CTA (+91 9747368480)
 */

export const QUALITY_TIERS = {
  high: {
    id: "high-quality",
    name: "High Quality"
  },
  medium: {
    id: "medium-quality",
    name: "Medium Quality"
  }
};

export const PORTFOLIO_VIDEOS = [
  // =========================================================================
  // 1. HIGH QUALITY (ALL 21 HIGH PRODUCTION VIDEOS WITH EXACT NAMES)
  // =========================================================================
  {
    id: "hq-nesto-1",
    title: "Nesto 1",
    tier: "high",
    category: "nesto",
    poster: "/posters/IMG_0372.jpg",
    videoSource: "/videos/IMG_0372.MOV",
    aspectRatio: "9:16",
    duration: "4K Master",
    tags: ["High Quality", "Nesto", "Retail Showcase"],
    caption: "High-production retail showcase highlighting store atmosphere, fresh goods, and customer shopping flow."
  },
  {
    id: "hq-nesto-2",
    title: "Nesto 2",
    tier: "high",
    category: "nesto",
    poster: "/posters/IMG_9895.jpg",
    videoSource: "/videos/IMG_9895.MOV",
    aspectRatio: "9:16",
    duration: "4K Master",
    tags: ["High Quality", "Nesto", "Festival Campaign"],
    caption: "Cinematic commercial campaign featuring vibrant visuals, festive spirit, and studio audio mix."
  },
  {
    id: "hq-nesto-3",
    title: "Nesto 3",
    tier: "high",
    category: "nesto",
    poster: "/posters/IMG_9858.jpg",
    videoSource: "/videos/IMG_9858.MOV",
    aspectRatio: "9:16",
    duration: "4K Master",
    tags: ["High Quality", "Nesto", "Brand Commercial"],
    caption: "High-production commercial edit for Nesto Hypermarket showcasing deals, store atmosphere, and brand presence."
  },
  {
    id: "hq-perfume",
    title: "Perfume",
    tier: "high",
    category: "perfume",
    poster: "/posters/IMG_9872_h264.jpg",
    videoSource: "/videos/IMG_9872_h264.mp4",
    aspectRatio: "9:16",
    duration: "Cinema HD",
    tags: ["High Quality", "Perfume", "Visual Direction"],
    caption: "Artful cinematic composition blending luxury fragrance storytelling, rich tones, and smooth transitions."
  },
  {
    id: "hq-perfume-2",
    title: "Perfume 2",
    tier: "high",
    category: "perfume",
    poster: "/posters/IMG_9864_h264.jpg",
    videoSource: "/videos/IMG_9864_h264.mp4",
    aspectRatio: "9:16",
    duration: "Cinema HD",
    tags: ["High Quality", "Perfume", "Brand Story"],
    caption: "Precision edited flagship reel engineered for maximum visual impact, liquid motion, and brand presence."
  },
  {
    id: "hq-abba-orange",
    title: "Abba Orange",
    tier: "high",
    category: "perfume",
    poster: "/posters/abba_orange.jpg",
    videoSource: "/videos/abba_orange.mov",
    aspectRatio: "9:16",
    duration: "4K Cinema",
    tags: ["High Quality", "Abba Orange", "Commercial Film"],
    caption: "Artistic commercial film capturing vibrant hues, crisp citrus details, and sensory brand identity."
  },
  {
    id: "hq-cafe",
    title: "Cafe",
    tier: "high",
    category: "food",
    poster: "/posters/IMG_0307.jpg",
    videoSource: "/videos/IMG_0307.MOV",
    aspectRatio: "9:16",
    duration: "4K Cinema",
    tags: ["High Quality", "Food & Beverage", "Café Culture"],
    caption: "Detailed visual exploration focusing on textures, café ambiance, and immersive soundscapes."
  },
  {
    id: "hq-cafe-2",
    title: "Cafe 2",
    tier: "high",
    category: "food",
    poster: "/posters/IMG_0012_h264.jpg",
    videoSource: "/videos/IMG_0012_h264.mp4",
    aspectRatio: "9:16",
    duration: "4K Cinema",
    tags: ["High Quality", "Culinary", "Warm Tones"],
    caption: "Refined cinematic production featuring natural lighting, detailed framing, and warm coffeehouse aesthetics."
  },
  {
    id: "hq-dates",
    title: "Dates",
    tier: "high",
    category: "food",
    poster: "/posters/Dates.jpg",
    videoSource: "/videos/Dates.MOV",
    aspectRatio: "9:16",
    duration: "4K Master",
    tags: ["High Quality", "Food", "Premium Packaging"],
    caption: "Sensory commercial highlighting gourmet dates packaging, organic freshness, and rich amber tones."
  },
  {
    id: "hq-honey-mix",
    title: "Honey Mix",
    tier: "high",
    category: "food",
    poster: "/posters/Honey_Mix.jpg",
    videoSource: "/videos/Honey_Mix.MOV",
    aspectRatio: "9:16",
    duration: "4K Master",
    tags: ["High Quality", "Pure Honey", "Macro Visuals"],
    caption: "Rich slow-motion macro visuals capturing golden honey viscosity, natural purity, and wholesome blends."
  },
  {
    id: "hq-jabal-drink",
    title: "Jabal Drink",
    tier: "high",
    category: "food",
    poster: "/posters/Jabal_Drink.jpg",
    videoSource: "/videos/Jabal_Drink.MOV",
    aspectRatio: "9:16",
    duration: "4K Master",
    tags: ["High Quality", "Beverage", "Refreshing Pour"],
    caption: "Energetic beverage commercial with crisp water droplets, dynamic splash, and revitalizing visual rhythm."
  },
  {
    id: "hq-agasthya-choornam",
    title: "Agasthya Choornam",
    tier: "high",
    category: "product",
    poster: "/posters/Agasthya_Choornam.jpg",
    videoSource: "/videos/Agasthya_Choornam.MOV",
    aspectRatio: "9:16",
    duration: "4K Master",
    tags: ["High Quality", "Ayurvedic Product", "Wellness"],
    caption: "Traditional wellness commercial highlighting Ayurvedic purity, herbal heritage, and clean modern pack presentation."
  },
  {
    id: "hq-tissue",
    title: "Tissue",
    tier: "high",
    category: "product",
    poster: "/posters/Tissue.jpg",
    videoSource: "/videos/Tissue.MOV",
    aspectRatio: "9:16",
    duration: "4K Master",
    tags: ["High Quality", "Consumer Product", "Soft Textures"],
    caption: "Clean product showcase highlighting gentle fibers, hygienic quality, and eye-catching packaging design."
  },
  {
    id: "hq-car-spare-parts",
    title: "Car Spare Parts",
    tier: "high",
    category: "product",
    poster: "/posters/IMG_0368.jpg",
    videoSource: "/videos/IMG_0368.MOV",
    aspectRatio: "9:16",
    duration: "4K Cinema",
    tags: ["High Quality", "Automotive Parts", "Precision Metal"],
    caption: "Dynamic camera movement and high-fidelity metallic lighting crafted for precision automobile parts presentation."
  },
  {
    id: "hq-trueshine-event",
    title: "Trueshine Event",
    tier: "high",
    category: "service",
    poster: "/posters/Trueshine_Event.jpg",
    videoSource: "/videos/Trueshine_Event.MOV",
    aspectRatio: "9:16",
    duration: "4K Master",
    tags: ["High Quality", "Event Production", "Brand Experience"],
    caption: "High-energy rhythm-synced event commercial capturing crowd celebration, stage lighting, and grand atmosphere."
  },
  {
    id: "hq-trimax-crane",
    title: "Trimax Crane",
    tier: "high",
    category: "service",
    poster: "/posters/Trimax_Crane.jpg",
    videoSource: "/videos/Trimax_Crane.MOV",
    aspectRatio: "9:16",
    duration: "4K Master",
    tags: ["High Quality", "Industrial Service", "Heavy Machinery"],
    caption: "Commanding industrial showcase highlighting heavy equipment operations, structural power, and reliable service solutions."
  },
  {
    id: "hq-school-video",
    title: "School Video",
    tier: "high",
    category: "service",
    poster: "/posters/IMG_9980_h264.jpg",
    videoSource: "/videos/IMG_9980_h264.mp4",
    aspectRatio: "9:16",
    duration: "Cinema HD",
    tags: ["High Quality", "Education", "Campus Life"],
    caption: "Inspiring institutional commercial featuring campus activities, collaborative learning spaces, and student milestones."
  },
  {
    id: "hq-honda",
    title: "Honda",
    tier: "high",
    category: "service",
    poster: "/posters/Honda.jpg",
    videoSource: "/videos/Honda.MOV",
    aspectRatio: "16:9",
    duration: "Cinema Widescreen",
    tags: ["High Quality", "Automotive", "Performance Drive"],
    caption: "Cinematic widescreen automotive film capturing sleek body curves, road performance, and dynamic driving presence."
  },
  {
    id: "hq-honda-2",
    title: "Honda 2",
    tier: "high",
    category: "service",
    poster: "/posters/Honda_2_h264.jpg",
    videoSource: "/videos/Honda_2_h264.mp4",
    aspectRatio: "16:9",
    duration: "Cinema Widescreen",
    tags: ["High Quality", "Automotive", "Power & Luxury"],
    caption: "High-octane widescreen commercial highlighting automotive craft, interior ergonomics, and precision engineering."
  },
  {
    id: "hq-evostyle-fashion",
    title: "Evostyle Fashion",
    tier: "high",
    category: "service",
    poster: "/posters/Evostyle_Fashion.jpg",
    videoSource: "/videos/Evostyle_Fashion.MOV",
    aspectRatio: "9:16",
    duration: "4K Master",
    tags: ["High Quality", "Fashion Commercial", "Urban Elegance"],
    caption: "Chic fashion commercial featuring modern apparel silhouettes, fast cuts, and contemporary runway aesthetic."
  },
  {
    id: "hq-evostyle-fashion-2",
    title: "Evostyle Fashion 2",
    tier: "high",
    category: "service",
    poster: "/posters/Evostyle_Fashion_2.jpg",
    videoSource: "/videos/Evostyle_Fashion_2.MOV",
    aspectRatio: "9:16",
    duration: "4K Master",
    tags: ["High Quality", "Fashion Lookbook", "Studio Style"],
    caption: "Trendsetting fashion visual production with dramatic studio lighting, fluid fabric movements, and bold creative styling."
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
  }
];

// =============================================================================
// 3. CATEGORY-SPECIFIC SHOWCASE VIDEOS (Perfume, Product, Service, Food, Nesto)
// All using actual high quality productions with exact titles
// =============================================================================
export const CATEGORY_VIDEOS = {
  perfume: [
    {
      id: "cat-perfume-01",
      title: "abba 1",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/abba%201.jpg",
      videoSource: "/videos/abba%201.mov",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "abba 1", "Commercial Film"],
      caption: "Sensory fragrance commercial for abba 1 highlighting bottle aesthetics, liquid motion, and luxury notes."
    },
    {
      id: "cat-perfume-02",
      title: "abba bourbon 1",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/abba%20bourbon%201.jpg",
      videoSource: "/videos/abba%20bourbon%201.mov",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "abba bourbon 1", "Commercial Film"],
      caption: "Sensory fragrance commercial for abba bourbon 1 highlighting bottle aesthetics, liquid motion, and luxury notes."
    },
    {
      id: "cat-perfume-03",
      title: "abba eclat 4",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/abba%20eclat%204.jpg",
      videoSource: "/videos/abba%20eclat%204.mov",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "abba eclat 4", "Commercial Film"],
      caption: "Sensory fragrance commercial for abba eclat 4 highlighting bottle aesthetics, liquid motion, and luxury notes."
    },
    {
      id: "cat-perfume-04",
      title: "abba eclat 6",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/abba%20eclat%206.jpg",
      videoSource: "/videos/abba%20eclat%206.mov",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "abba eclat 6", "Commercial Film"],
      caption: "Sensory fragrance commercial for abba eclat 6 highlighting bottle aesthetics, liquid motion, and luxury notes."
    },
    {
      id: "cat-perfume-05",
      title: "abba energy",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/abba%20energy.jpg",
      videoSource: "/videos/abba%20energy%20.mov",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "abba energy", "Commercial Film"],
      caption: "Sensory fragrance commercial for abba energy highlighting bottle aesthetics, liquid motion, and luxury notes."
    },
    {
      id: "cat-perfume-06",
      title: "abba fuego 5",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/abba%20fuego%205.jpg",
      videoSource: "/videos/abba%20fuego%205.mov",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "abba fuego 5", "Commercial Film"],
      caption: "Sensory fragrance commercial for abba fuego 5 highlighting bottle aesthetics, liquid motion, and luxury notes."
    },
    {
      id: "cat-perfume-07",
      title: "abba haze oud final",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/abba%20haze%20oud%20final.jpg",
      videoSource: "/videos/abba%20haze%20oud%20final.mov",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "abba haze oud final", "Commercial Film"],
      caption: "Sensory fragrance commercial for abba haze oud final highlighting bottle aesthetics, liquid motion, and luxury notes."
    },
    {
      id: "cat-perfume-08",
      title: "abba leather 3",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/abba%20leather%203.jpg",
      videoSource: "/videos/abba%20leather%203.mov",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "abba leather 3", "Commercial Film"],
      caption: "Sensory fragrance commercial for abba leather 3 highlighting bottle aesthetics, liquid motion, and luxury notes."
    },
    {
      id: "cat-perfume-09",
      title: "abba maraccuja 4",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/abba%20maraccuja%204.jpg",
      videoSource: "/videos/abba%20maraccuja%204.mov",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "abba maraccuja 4", "Commercial Film"],
      caption: "Sensory fragrance commercial for abba maraccuja 4 highlighting bottle aesthetics, liquid motion, and luxury notes."
    },
    {
      id: "cat-perfume-10",
      title: "abba nectare 2",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/abba%20nectare%202.jpg",
      videoSource: "/videos/abba%20nectare%202.mov",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "abba nectare 2", "Commercial Film"],
      caption: "Sensory fragrance commercial for abba nectare 2 highlighting bottle aesthetics, liquid motion, and luxury notes."
    },
    {
      id: "cat-perfume-11",
      title: "abba orange",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/abba%20orange.jpg",
      videoSource: "/videos/abba%20orange%20.mov",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "abba orange", "Commercial Film"],
      caption: "Sensory fragrance commercial for abba orange highlighting bottle aesthetics, liquid motion, and luxury notes."
    },
    {
      id: "cat-perfume-12",
      title: "abba oriole 6",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/abba%20oriole%206.jpg",
      videoSource: "/videos/abba%20oriole%206.mov",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "abba oriole 6", "Commercial Film"],
      caption: "Sensory fragrance commercial for abba oriole 6 highlighting bottle aesthetics, liquid motion, and luxury notes."
    },
    {
      id: "cat-perfume-13",
      title: "abba oud terra bgm",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/abba%20oud%20terra%20bgm.jpg",
      videoSource: "/videos/abba%20oud%20terra%20bgm.mov",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "abba oud terra bgm", "Commercial Film"],
      caption: "Sensory fragrance commercial for abba oud terra bgm highlighting bottle aesthetics, liquid motion, and luxury notes."
    },
    {
      id: "cat-perfume-14",
      title: "abba zanotic new 1",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/abba%20zanotic%20new%201.jpg",
      videoSource: "/videos/abba%20zanotic%20new%201.mov",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "abba zanotic new 1", "Commercial Film"],
      caption: "Sensory fragrance commercial for abba zanotic new 1 highlighting bottle aesthetics, liquid motion, and luxury notes."
    },
    {
      id: "cat-perfume-15",
      title: "Perfume (2)",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/Perfume%20(2).jpg",
      videoSource: "/videos/Perfume%20(2).MP4",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "Perfume (2)", "Commercial Film"],
      caption: "Sensory fragrance commercial for Perfume (2) highlighting bottle aesthetics, liquid motion, and luxury notes."
    },
    {
      id: "cat-perfume-16",
      title: "Perfume",
      category: "perfume",
      categoryName: "Perfume Videos",
      poster: "/posters/Perfume.jpg",
      videoSource: "/videos/Perfume.MP4",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["Perfume", "Perfume", "Commercial Film"],
      caption: "Sensory fragrance commercial for Perfume highlighting bottle aesthetics, liquid motion, and luxury notes."
    }
  ],

  product: [
    {
      id: "cat-product-01",
      title: "Agasthya Choornam",
      category: "product",
      categoryName: "Product Videos",
      videoSource: "/videos/Agasthya_Choornam.MOV",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["High Quality", "Ayurvedic Product", "Wellness"],
      caption: "Traditional wellness commercial highlighting Ayurvedic purity, botanical ingredients, and herbal heritage."
    },
    {
      id: "cat-product-02",
      title: "Tissue",
      category: "product",
      categoryName: "Product Videos",
      videoSource: "/videos/Tissue.MOV",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["High Quality", "Product", "Soft Textures"],
      caption: "Clean commercial highlighting product softness, hygiene standards, and modern pack design."
    },
    {
      id: "cat-product-03",
      title: "Car Spare Parts",
      category: "product",
      categoryName: "Product Videos",
      videoSource: "/videos/IMG_0368.MOV",
      aspectRatio: "9:16",
      duration: "4K Cinema",
      tags: ["High Quality", "Automotive Parts", "Precision Metal"],
      caption: "Dynamic camera movement and metallic lighting crafted for precision automobile spare parts presentation."
    }
  ],

  service: [
    {
      id: "cat-service-01",
      title: "Trueshine Event",
      category: "service",
      categoryName: "Service Videos",
      videoSource: "/videos/Trueshine_Event.MOV",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["High Quality", "Event Commercial", "Brand Experience"],
      caption: "High-energy rhythm-synced event showcase capturing crowd celebration, stage lights, and grand atmosphere."
    },
    {
      id: "cat-service-02",
      title: "Trimax Crane",
      category: "service",
      categoryName: "Service Videos",
      videoSource: "/videos/Trimax_Crane.MOV",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["High Quality", "Industrial Service", "Heavy Machinery"],
      caption: "Powerful industrial showcase of heavy crane operations, engineering strength, and reliable service solutions."
    },
    {
      id: "cat-service-03",
      title: "School Video",
      category: "service",
      categoryName: "Service Videos",
      videoSource: "/videos/IMG_9980_h264.mp4",
      aspectRatio: "9:16",
      duration: "Cinema HD",
      tags: ["High Quality", "Education", "Campus Life"],
      caption: "Inspiring institutional commercial featuring campus activities, learning spaces, and student milestones."
    },
    {
      id: "cat-service-04",
      title: "Honda",
      category: "service",
      categoryName: "Service Videos",
      videoSource: "/videos/Honda.MOV",
      aspectRatio: "16:9",
      duration: "Cinema Widescreen",
      tags: ["High Quality", "Automotive", "Performance Drive"],
      caption: "Cinematic widescreen automotive film capturing sleek body curves, performance, and road presence."
    },
    {
      id: "cat-service-05",
      title: "Honda 2",
      category: "service",
      categoryName: "Service Videos",
      videoSource: "/videos/Honda_2_h264.mp4",
      aspectRatio: "16:9",
      duration: "Cinema Widescreen",
      tags: ["High Quality", "Automotive", "Power & Precision"],
      caption: "High-octane widescreen commercial highlighting automotive craft, interior luxury, and precision handling."
    },
    {
      id: "cat-service-06",
      title: "Evostyle Fashion",
      category: "service",
      categoryName: "Service Videos",
      videoSource: "/videos/Evostyle_Fashion.MOV",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["High Quality", "Fashion Commercial", "Urban Elegance"],
      caption: "Chic fashion editorial showcase featuring stylish apparel silhouettes, fast cuts, and contemporary runway aesthetic."
    },
    {
      id: "cat-service-07",
      title: "Evostyle Fashion 2",
      category: "service",
      categoryName: "Service Videos",
      videoSource: "/videos/Evostyle_Fashion_2.MOV",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["High Quality", "Fashion Lookbook", "Studio Style"],
      caption: "Trendsetting fashion commercial with artistic lighting, fluid fabric movements, and bold creative styling."
    }
  ],

  food: [
    {
      id: "cat-food-01",
      title: "Cafe",
      category: "food",
      categoryName: "Food Videos",
      videoSource: "/videos/IMG_0307.MOV",
      aspectRatio: "9:16",
      duration: "4K Cinema",
      tags: ["High Quality", "Food & Beverage", "Café Culture"],
      caption: "Detailed culinary exploration focusing on café ambiance, brewing textures, and rich tones."
    },
    {
      id: "cat-food-02",
      title: "Cafe 2",
      category: "food",
      categoryName: "Food Videos",
      videoSource: "/videos/IMG_0012_h264.mp4",
      aspectRatio: "9:16",
      duration: "4K Cinema",
      tags: ["High Quality", "Culinary", "Warm Tones"],
      caption: "Refined cinematic production featuring natural lighting, detailed framing, and warm coffeehouse aesthetics."
    },
    {
      id: "cat-food-03",
      title: "Dates",
      category: "food",
      categoryName: "Food Videos",
      videoSource: "/videos/Dates.MOV",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["High Quality", "Food", "Premium Packaging"],
      caption: "Sensory commercial highlighting gourmet dates packaging, organic freshness, and rich amber tones."
    },
    {
      id: "cat-food-04",
      title: "Honey Mix",
      category: "food",
      categoryName: "Food Videos",
      videoSource: "/videos/Honey_Mix.MOV",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["High Quality", "Pure Honey", "Slow Motion Drip"],
      caption: "Rich slow-motion macro visuals capturing golden honey viscosity, natural purity, and wholesome blends."
    },
    {
      id: "cat-food-05",
      title: "Jabal Drink",
      category: "food",
      categoryName: "Food Videos",
      videoSource: "/videos/Jabal_Drink.MOV",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["High Quality", "Beverage", "Refreshing Pour"],
      caption: "Energetic beverage commercial with crisp water droplets, dynamic splash, and revitalizing visual rhythm."
    }
  ],

  nesto: [
    {
      id: "cat-nesto-01",
      title: "Nesto 1",
      category: "nesto",
      categoryName: "Nesto",
      videoSource: "/videos/IMG_0372.MOV",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["High Quality", "Nesto 1", "Retail Showcase"],
      caption: "High-production retail showcase highlighting store atmosphere, fresh goods, and customer shopping flow."
    },
    {
      id: "cat-nesto-02",
      title: "Nesto 2",
      category: "nesto",
      categoryName: "Nesto",
      videoSource: "/videos/IMG_9895.MOV",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["High Quality", "Nesto 2", "Festival Campaign"],
      caption: "Cinematic commercial campaign featuring vibrant visuals, festive spirit, and studio audio mix."
    },
    {
      id: "cat-nesto-03",
      title: "Nesto 3",
      category: "nesto",
      categoryName: "Nesto",
      videoSource: "/videos/IMG_9858.MOV",
      aspectRatio: "9:16",
      duration: "4K Master",
      tags: ["High Quality", "Nesto 3", "Brand Commercial"],
      caption: "High-production commercial edit for Nesto Hypermarket showcasing deals, store atmosphere, and brand presence."
    }
  ]
};
