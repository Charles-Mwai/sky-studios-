// Premium photography portfolio data for skystudios.
// Contains 8 categories, 5 projects per category, and 15 curated images per project.

const categoryImagesPool = {
  portraits: [
    "photo-1534528741775-53994a69daeb", // Woman warm sun
    "photo-1507003211169-0a1dd7228f2d", // Man portrait
    "photo-1544005313-94ddf0286df2", // Woman classic
    "photo-1506794778202-cad84cf45f1d", // Man studio B&W
    "photo-1494790108377-be9c29b29330", // Woman smile
    "photo-1531746020798-e6953c6e8e04", // Woman close-up
    "photo-1522075469751-3a6694fb2f61", // Man smile studio
    "photo-1580489944761-15a19d654956", // Woman smiling hair
    "photo-1500648767791-00dcc994a43e", // Man headshot B&W
    "photo-1548142813-c348350df52b", // Woman moody glow
    "photo-1508214751196-bcfd4ca60f91", // Woman laughing
    "photo-1517841905240-472988babdf9", // Woman studio editorial
    "photo-1504257400765-1a1149452374", // Man glasses
    "photo-1554151228-14d9def656e4", // Woman close up eye
    "photo-1552374196-1ab2a1c593e8"  // Man editorial portrait
  ],
  fashion: [
    "photo-1490481651871-ab68de25d43d", // Editorial red dress
    "photo-1492562080023-ab3db95bfbce", // Glasses model beach
    "photo-1469334031218-e382a71b716b", // Street style editorial
    "photo-1485462537746-965f33f7f6a7", // Red coat model
    "photo-1509631179647-0177331693ae", // Runway look
    "photo-1539109136881-3be0616acf4b", // Cozy sweater fashion
    "photo-1515886657613-9f3515b0c78f", // Bright yellow suit
    "photo-1529139574466-a303027c1d8b", // Models in street setting
    "photo-1496345875659-11f7dd282d1d", // Male fashion suit
    "photo-1507679799987-c73779587ccf", // Corporate style suit
    "photo-1488161628813-04466f872be2", // Casual models
    "photo-1503342217505-b0a15ec3261c", // Vintage style shirt
    "photo-1524504388940-b1c1722653e1", // Woman sun hat
    "photo-1512436991641-6745cdb1723f", // Modern apparel boutique
    "photo-1501196354995-cbb51c65aaea"  // Editorial group
  ],
  weddings: [
    "photo-1511285560929-80b456fea0bc", // Couple forest walk
    "photo-1519741497674-611481863552", // Outdoor venue settings
    "photo-1465495976277-4387d4b0b4c6", // Romantic forehead kiss
    "photo-1532712938310-34cb3982ef74", // Bride walking corridor
    "photo-1519225495810-7512c696af05", // Sparkler send off
    "photo-1606800052052-a08af7148866", // Toasting glasses
    "photo-1523438885200-e635ba2c371e", // Ceremony altar view
    "photo-1481653191744-b7fc0798177f", // Bride wedding dress detail
    "photo-1494707924440-29368c76caef", // Couple silhouette sunset
    "photo-1507504038482-76210f5ecdd6", // Reception table setting
    "photo-1515934751635-c81c6bc9a2d8", // Wedding rings
    "photo-1549417229-aa67d3263c09", // Bridal bouquet
    "photo-1583939003579-730e3918a45a", // First dance
    "photo-1510076894075-e8ff11409951", // Groom adjustment
    "photo-1522673607200-164d1b6ce486"  // Bridesmaids laugh
  ],
  corporate: [
    "photo-1540575467063-178a50c2df87", // Conference hall screen
    "photo-1515187029135-18ee286d815b", // CEO speaking panel
    "photo-1522202176988-66273c2fd55f", // Collaborative meeting
    "photo-1475721027785-f74eccf877e2", // Speaker gesture podium
    "photo-1505373877841-8d25f7d46678", // Large theater audience
    "photo-1556761175-b413da4baf72", // Modern design studio
    "photo-1517048676732-d65bc937f952", // Workshop post-its
    "photo-1531538606174-0f90ff5dce83", // Networking event laughter
    "photo-1517245386807-bb43f82c33c4", // Hackathon presentation
    "photo-1529070538774-1843cb3265df", // Listening to presentation
    "photo-1504384308090-c894fdcc538d", // IT command center
    "photo-1552664730-d307ca884978", // Team huddle whiteboard
    "photo-1434030216411-0b793f4b4173", // Corporate writing notepad
    "photo-1573164713988-8665fc963095", // Conference interview
    "photo-1582213782179-e0d53f98f2ca"  // Handshake close up
  ],
  product: [
    "photo-1523275335684-37898b6baf30", // Watch on minimalist stand
    "photo-1505740420928-5e560c06d30e", // Headphones yellow bg
    "photo-1542291026-7eec264c27ff", // Red running shoe
    "photo-1560343090-f0409e92791a", // Designer tan shoes
    "photo-1526170375885-4d8ecf77b99f", // Retro camera
    "photo-1572635196237-14b3f281503f", // Luxury sunglasses
    "photo-1503602642458-232111445657", // Designer wood stool
    "photo-1586495777744-4413f21062fa", // Beauty skin bottle
    "photo-1608231387042-66d1773070a5", // White sports sneaker
    "photo-1543510473-ac2c35329a28", // Cosmetic luxury brush
    "photo-1527689368864-3a821dbccc34", // Tech laptop mouse desk
    "photo-1564466809058-bf4114d55352", // Perfume glass spray
    "photo-1546868871-7041f2a55e12", // Smart watch screen
    "photo-1524678606370-a47ad25cb82a", // Earbuds case close up
    "photo-1585386959984-a4155224a1ad"  // Modern chair object
  ],
  landscape: [
    "photo-1501785888041-af3ef285b470", // Lake Bled boat
    "photo-1472214222541-d510753a4907", // Tuscany rolling hills
    "photo-1470071459604-3b5ec3a7fe05", // Misty forest pine trees
    "photo-1447752875215-b2761acb3c5d", // Japanese forest bridge
    "photo-1500485035595-cbe6f645feb1", // Mountain range reflection
    "photo-1475924156734-496f6cac6ec1", // Ocean waves dramatic sunset
    "photo-1433832597046-4f10e10ac764", // Desert sand ripples
    "photo-1464822759023-fed622ff2c3b", // Snowy mountain peaks
    "photo-1426604966848-d7adac402bff", // Yosemite waterfall
    "photo-1507525428034-b723cf961d3e", // Tropical beach palms
    "photo-1470246973918-29a93221c455", // Forest autumn path
    "photo-1418065460487-3e41a6c84dc5", // Redwood forest light rays
    "photo-1454496522488-7a8e488e8606", // Snow mountain climbers
    "photo-1502082553048-f009c37129b9", // Giant green tree canopy
    "photo-1470240731273-7821a6eeb6bd"  // Meadow spring flowers
  ],
  "real-estate": [
    "photo-1600585154340-be6161a56a0c", // Luxury house pool
    "photo-1600607687939-ce8a6c25118c", // Kitchen marble island
    "photo-1600210492486-724fe5c67fb0", // Living room fire hearth
    "photo-1600566753190-17f0baa2a6c3", // Luxury bathroom tub
    "photo-1600585154526-990dced4db0d", // Cozy minimalist bedroom
    "photo-1600607687920-4e2a09cf159d", // Dining area table setup
    "photo-1600566752355-35792bedcfea", // Modern staircase
    "photo-1600573472591-ee6b68d14c68", // Backyard patio deck
    "photo-1512917774080-9991f1c4c750", // Penthouse skyline view
    "photo-1513694203232-719a280e022f", // Cozy library reading nook
    "photo-1540518614846-7eded433c457", // Hotel bedroom luxury
    "photo-1582268611958-ebfd161ef9cf", // Outdoor modern patio pool
    "photo-1613490493576-7fde63acd811", // Modern architecture mansion
    "photo-1613977257363-707ba9348227", // Open plan kitchen living
    "photo-1512915922686-57c11dde9b6b"  // White minimal house exterior
  ],
  drone: [
    "photo-1508873696983-2df519f0397e", // Forest road curve
    "photo-1473442240418-452f03b7ae40", // Aerial tropical islands
    "photo-1504609773096-104ff2c73ba4", // Shoreline ocean waves
    "photo-1469854523086-cc02fe5d8800", // Grand Canyon river bend
    "photo-1501854140801-50d01698950b", // Green fields patterns
    "photo-1518005020951-eccb494ad742", // Aerial lighthouse cliff
    "photo-1505118380757-91f5f5632de0", // Ocean coral reef
    "photo-1470770841072-f978cf4d019e", // Coastline coastal highway
    "photo-1486873248873-f1e9550e652a", // Desert highway straight
    "photo-1502082553048-f009c37129b9", // Forest grid top down
    "photo-1527853787696-f7be74f2e39a", // Snowy highway pine trees
    "photo-1447752875215-b2761acb3c5d", // Bridge winding river
    "photo-1503756234508-e32369269deb", // Sea waves crashing pier
    "photo-1516026672322-bc52d61a5537", // African savannah elephants
    "photo-1509062522246-3755977927d7"  // Waterfall plunge pool top
  ]
};

// Aspect ratios pool to create authentic Pinterest-like masonry grids
const aspectRatios = ["portrait", "landscape", "square", "tall", "landscape-wide"];

// A list of editorial descriptions and titles for projects across categories
const projectDetails = {
  portraits: [
    { title: "Shedding Light", client: "Vogue India", location: "Mumbai", desc: "An intimate study of morning shadow play across human geometry, captured in natural window light." },
    { title: "Quiet Room", client: "Editorial Solo", location: "London, UK", desc: "A series exploring melancholy and solitude in domestic spaces using low-key studio lighting." },
    { title: "The Modern Face", client: "Dazed Magazine", location: "New York, NY", desc: "Expressive close-ups focusing on clean details, freckles, and intense eye-contact storytelling." },
    { title: "Reflection of Self", client: "Marie Claire", location: "Paris, France", desc: "Double exposure and mirror reflections highlighting the split-identity experience in contemporary society." },
    { title: "Aged Grace", client: "Independent Exhibition", location: "Kyoto, Japan", desc: "Portraits of elders, cataloging wrinkles, gray hairs, and the silent narratives of lived experiences." }
  ],
  fashion: [
    { title: "Neon Noir", client: "Gucci", location: "Tokyo, Japan", desc: "High-fashion neon-soaked night editorial blending techwear with classic tailoring in Shibuya's alleyways." },
    { title: "Sands of Time", client: "Harper's Bazaar", location: "Dubai Desert", desc: "Ethereal flowing silk gowns contrasting against the harsh, geometric wind patterns of desert dunes." },
    { title: "Monochrome Grid", client: "Prada", location: "Milan, Italy", desc: "Symmetrical compositions showcasing retro black-and-white apparel in brutalist concrete environments." },
    { title: "Suburban Rebel", client: "Diesel", location: "Los Angeles, CA", desc: "90s grunge revival styling in run-down motels and skateparks, shot on vintage film setups." },
    { title: "Ethereal Linen", client: "Jacquemus", location: "Provence, France", desc: "Soft linen collections in rolling lavender fields, focusing on movement, light breeze, and pastel tones." }
  ],
  weddings: [
    { title: "Forest Promise", client: "Evelyn & Thomas", location: "Portland, OR", desc: "A quiet, private forest clearing ceremony surrounded by mossy giant redwoods and soft golden sunbeams." },
    { title: "Lake Como Romance", client: "Sophia & Matteo", location: "Lake Como, Italy", desc: "Luxurious classic wedding in a historic villa overlooking the water, focusing on candid emotional peaks." },
    { title: "City Hall Intimacy", client: "Clara & David", location: "San Francisco, CA", desc: "Modern micro-wedding documenting retro suits, champagne steps, and architecture-framed embraces." },
    { title: "Seaside Vows", client: "Maya & Julian", location: "Santorini, Greece", desc: "Cliffside sunset wedding showcasing white-walled contrasts, blue domes, and intense Mediterranean light." },
    { title: "Castle Ballad", client: "Helena & Richard", location: "Scottish Highlands", desc: "Atmospheric, misty rain-soaked wedding inside a 14th-century stone castle, rich in dark warmth." }
  ],
  corporate: [
    { title: "The Future of Tech", client: "Google Cloud", location: "San Jose, CA", desc: "Documentary photography of a keynote arena, focused on blue laser hues, presenter expressions, and audience focus." },
    { title: "Collaborative Mind", client: "Stripe HQ", location: "San Francisco, CA", desc: "Editorial office lifestyle imagery showing developer huddles, whiteboard brainstorming, and glass-walled reflections." },
    { title: "Green Energy Forum", client: "Vestas Wind", location: "Copenhagen, Denmark", desc: "Dynamic panel discussions, global leader interactions, and networking peaks captured candidly." },
    { title: "Pioneers Gala", client: "MIT Technology Review", location: "Boston, MA", desc: "Low-light atmospheric dinner, awards presentations, and high-contrast evening networking event portraits." },
    { title: "Crafting Spaces", client: "Gensler Architects", location: "Chicago, IL", desc: "Architectural designers in their studios, focusing on scale models, tracing papers, and sunlight." }
  ],
  product: [
    { title: "Hourglass", client: "Nomos Glashütte", location: "Berlin, Germany", desc: "Commercial watch imagery focusing on polished steel reflections, sapphire crystal refraction, and sand backgrounds." },
    { title: "Pure Sound", client: "Sennheiser", location: "Studio Session", desc: "High-contrast commercial lighting highlighting the tactile leather and matte textures of audio equipment." },
    { title: "Crimson Speed", client: "Nike Running", location: "Studio Session", desc: "Dynamic splash, dust, and suspension shots showing athletic shoes frozen mid-action in vibrant red hues." },
    { title: "Botanical Skin", client: "Aesop", location: "Melbourne, Australia", desc: "Minimalist amber bottles framed by wet eucalyptus leaves, raw granite, and soft organic morning light." },
    { title: "Brutalist Seating", client: "Herman Miller", location: "Studio Session", desc: "Catalog shoot of iconic office chairs, focusing on curved geometries, shadow projections, and mesh textures." }
  ],
  landscape: [
    { title: "Bled Stillness", client: "National Geographic", location: "Slovenia", desc: "Dawn photography of the famous island church on Lake Bled, shrouded in low mountain fog." },
    { title: "Tuscan Light", client: "Condé Nast Traveler", location: "Val d'Orcia, Italy", desc: "Sunset painting the rolling hills of Tuscany in vibrant golds and ochres, flanked by cypress lanes." },
    { title: "Misty Valleys", client: "Patagonia Editorial", location: "Oregon Coast", desc: "Towering pine forests kissing the Pacific fog, highlighting deep greens, dark soil, and moody atmospheres." },
    { title: "Reflected Peaks", client: "Arc'teryx", location: "Banff, Canada", desc: "Crisp mirror reflections of glacier-fed lakes, exploring cold turquoise hues and snow-capped peaks." },
    { title: "Sands of Sahara", client: "Discovery Channel", location: "Morocco", desc: "Abstract compositions focusing on sand dune ridges, deep shadow contrasts, and wind patterns." }
  ],
  "real-estate": [
    { title: "Brutalist Glass Villa", client: "AD Digest", location: "Geneva, Switzerland", desc: "A luxury concrete-and-glass home cantilevered over a lake, featuring reflections and sharp angles." },
    { title: "Mid-Century Hearth", client: "Dwell Magazine", location: "Palm Springs, CA", desc: "Indoor-outdoor living space showcasing open brick fireplaces, wood ceilings, and sunburst shadows." },
    { title: "Marble Haven", client: "Elle Decor", location: "Manhattan, NY", desc: "Penthouse kitchen detailing white Calacatta marble counters, brushed gold hardware, and skyline views." },
    { title: "The Sanctuary Tub", client: "Aman Resorts", location: "Bali, Indonesia", desc: "A stone soaking tub open to a tropical garden, focusing on water ripples, wood shutters, and leaf light." },
    { title: "Nordic Minimal Loft", client: "Kinfolk", location: "Oslo, Norway", desc: "High ceilings, raw linen bedding, white oak floors, and deep winter light filtering through tall windows." }
  ],
  drone: [
    { title: "Bending Tarmac", client: "Audi Magazine", location: "Stelvio Pass, Italy", desc: "Top-down view of winding alpine roads weaving through autumn forests like a dark ribbon." },
    { title: "Coral Rings", client: "Ocean Conservancy", location: "Maldives", desc: "Aerial abstract of a coral atoll, displaying turquoise lagoons fading into deep navy blue depths." },
    { title: "Coastal Fracture", client: "Volvo Ocean Race", location: "Iceland Shores", desc: "White surf breaking violently against black basalt volcanic sands, framed from a high perspective." },
    { title: "Golden Grids", client: "Wired", location: "Kansas Plains", desc: "Abstract crop circle irrigation lines and farm borders creating a giant checkerboard in evening light." },
    { title: "The Edge of Land", client: "BBC Earth", location: "Cliffs of Moher", desc: "Vertical cliff walls plunging straight into boiling foam, demonstrating scale and power." }
  ]
};

// Helper function to build 15 images dynamically for a project using its category pool
function generateProjectImages(categoryId, projectIndex, projectTitle) {
  const pool = categoryImagesPool[categoryId] || categoryImagesPool["portraits"];
  const images = [];

  // Generate 15 images
  for (let i = 0; i < 15; i++) {
    // Select image ID from pool sequentially/wrapped
    const poolIndex = (projectIndex * 3 + i) % pool.length;
    const baseId = pool[poolIndex];
    
    // Choose aspect ratio sequentially for organic distribution
    const ratioIndex = (projectIndex + i) % aspectRatios.length;
    const ratio = aspectRatios[ratioIndex];
    
    // Set custom captions based on image index
    let caption = `${projectTitle} — Study No. ${i + 1}`;
    if (i === 0) caption = `${projectTitle} — Signature View`;
    else if (i === 7) caption = `${projectTitle} — Detail Close-Up`;
    else if (i === 14) caption = `${projectTitle} — Final Composition`;

    // Construct high-quality Unsplash URLs
    // Base width is 1200px for desktop gallery, and w=20px for tiny placeholder (lazy loading blur)
    const baseWidth = 1400;
    const url = `https://images.unsplash.com/${baseId}?q=85&w=${baseWidth}&auto=format&fit=crop`;
    const placeholderUrl = `https://images.unsplash.com/${baseId}?q=10&w=30&auto=format&fit=crop`;

    images.push({
      id: `${categoryId}-p${projectIndex}-img${i}`,
      url,
      placeholderUrl,
      aspectRatio: ratio,
      caption,
      width: ratio === "portrait" || ratio === "tall" ? 900 : 1400,
      height: ratio === "portrait" ? 1200 : ratio === "tall" ? 1600 : ratio === "square" ? 1400 : 900
    });
  }
  
  return images;
}

// Compile the final category data structure
export const portfolioCategories = [
  {
    id: "portraits",
    title: "Portraits",
    subtitle: "Humanity captured in raw, cinematic stillness",
    description: "An editorial collection of human stories, focusing on lighting contrast, micro-expression, and the quiet spaces between spoken words. Shot on location and in-studio.",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=85&w=1800&auto=format&fit=crop",
    projects: []
  },
  {
    id: "fashion",
    title: "Fashion",
    subtitle: "High-end editorial apparel storytelling",
    description: "Avant-garde styling, structural movements, and textile details shot across brutalist architectures, shifting deserts, and neon metropolitan streets.",
    heroImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=85&w=1800&auto=format&fit=crop",
    projects: []
  },
  {
    id: "weddings",
    title: "Weddings",
    subtitle: "Luxurious documentary love stories",
    description: "Candid emotional storytelling documenting micro-weddings, classic villa elopements, and high-society receptions from the Pacific Northwest to the shores of Lake Como.",
    heroImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=85&w=1800&auto=format&fit=crop",
    projects: []
  },
  {
    id: "corporate",
    title: "Corporate Events",
    subtitle: "Dynamic brand gatherings and team narratives",
    description: "High-contrast documentary event photography and designer team lifestyle catalogs, highlighting corporate innovation, architectural spaces, and professional connections.",
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=85&w=1800&auto=format&fit=crop",
    projects: []
  },
  {
    id: "product",
    title: "Product",
    subtitle: "Minimalist commercial object design",
    description: "Advertising portfolios capturing physical watches, tech gear, leather goods, and premium cosmetics with precise lighting controls, shadow framing, and clean backdrops.",
    heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=85&w=1800&auto=format&fit=crop",
    projects: []
  },
  {
    id: "landscape",
    title: "Wildlife & Landscape",
    subtitle: "Epic natural scales and silent wilderness",
    description: "Fine-art landscape photography capturing misty redwood forests, mountain reflections in glacial waters, and patterns of the world's most remote environments.",
    heroImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=85&w=1800&auto=format&fit=crop",
    projects: []
  },
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Luxury architectures and interior design",
    description: "Luminous, atmospheric interior design portfolios cataloging high-end brutalist concrete villas, mid-century modern homes, and premium resort suites.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1800&auto=format&fit=crop",
    projects: []
  },
  {
    id: "drone",
    title: "Drone Photography",
    subtitle: "Abstract top-down aerial dimensions",
    description: "Winding coastal highways, breaking oceanic surf, agricultural geometries, and savannah scale, captured from elevated perspective grids.",
    heroImage: "https://images.unsplash.com/photo-1508873696983-2df519f0397e?q=85&w=1800&auto=format&fit=crop",
    projects: []
  }
];

// Populate projects for each category
portfolioCategories.forEach(cat => {
  const details = projectDetails[cat.id] || [];
  
  details.forEach((proj, idx) => {
    const projId = `${cat.id}-project-${idx + 1}`;
    
    // Choose cover image from pool
    const coverId = categoryImagesPool[cat.id][idx % categoryImagesPool[cat.id].length];
    const coverImage = `https://images.unsplash.com/${coverId}?q=85&w=1200&auto=format&fit=crop`;
    
    cat.projects.push({
      id: projId,
      categoryId: cat.id,
      categoryTitle: cat.title,
      title: proj.title,
      client: proj.client,
      location: proj.location,
      date: proj.date,
      description: proj.desc,
      coverImage,
      images: generateProjectImages(cat.id, idx, proj.title)
    });
  });
});

// Flat array of all projects for simple global lookup
export const allProjects = portfolioCategories.reduce((acc, cat) => {
  return [...acc, ...cat.projects];
}, []);

// Featured projects for home page (one project from each category, e.g., the first project)
export const featuredProjects = portfolioCategories.map(cat => cat.projects[0]).filter(Boolean);
