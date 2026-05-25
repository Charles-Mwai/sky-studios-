// Esther /gallery-2/ image sequence & aspect presets
// https://esther-demo.mypixieset.com/gallery-2/

const unsplash = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?q=85&w=${w}&auto=format&fit=crop`;

const unsplashPlaceholder = (id) =>
  `https://images.unsplash.com/${id}?q=10&w=40&auto=format&fit=crop`;

/** @typedef {'portrait' | 'banner' | 'horizontal' | 'vertical'} GalleryAspect */

/** @param {string} id @param {GalleryAspect} aspect */
const slide = (id, aspect) => ({
  id,
  aspect,
  src: unsplash(id, aspect === "vertical" ? 1000 : aspect === "banner" ? 2000 : 1400),
  placeholderSrc: unsplashPlaceholder(id),
});

export const portraitGallery = {
  displayTitle: "Portrait Photography",
  scrollLabel: "Scroll for full Gallery",
  intro: [
    { src: "/optimised/DSC08096.webp" },
    { src: "/optimised/DSC06197 (1) (1).webp" },
  ],
  scrollPattern: [
    { size: "S", src: "/optimised/DSC_78.webp" },
    { size: "L", src: "/optimised/DSC_104.webp" },
    { size: "S", src: "/optimised/DSC_108.webp" },
    { size: "L", src: "/optimised/DSC06195 copy.webp" },
    { size: "L", src: "/optimised/DSC09712.webp" },
    { size: "L", src: "/optimised/DSC_2062.webp" },
    { size: "L", src: "/optimised/DSC_2235.webp" },
    { size: "L", src: "/optimised/DSC_2043.webp" },
    { size: "L", src: "/optimised/DSC_2043 (1).webp" },
    { size: "S", src: "/optimised/DSC_0335.webp" },
    { size: "L", src: "/optimised/DSC06123 copy.webp" },
    { size: "S", src: "/optimised/DSC06031 copy.webp" },
  ],
};

export const weddingsGallery = {
  displayTitle: "Wedding Photography",
  scrollLabel: "Scroll for full Gallery",
  intro: [
    { src: "/optimised/weddings/DSC05807.webp" },
    { src: "/optimised/weddings/DSC05596.webp" },
  ],
  scrollPattern: [
    { size: "S", src: "/optimised/weddings/DSC05585 (1).webp" },
    { size: "L", src: "/optimised/weddings/DSC01204.webp" },
    { size: "S", src: "/optimised/weddings/DSC_2011 (1).webp" },
    { size: "L", src: "/optimised/weddings/DSC05368.webp" },
    { size: "L", src: "/optimised/weddings/DSC05784.webp" },
    { size: "L", src: "/optimised/weddings/DSC00788.webp" },
    { size: "L", src: "/optimised/weddings/DSC00822.webp" },
    { size: "L", src: "/optimised/weddings/DSC_2342.webp" },
    { size: "L", src: "/optimised/weddings/DSC_2495.webp" },
    { size: "S", src: "/optimised/weddings/DSC_2544.webp" },
    { size: "L", src: "/optimised/weddings/DSC05896.webp" },
    { size: "S", src: "/optimised/weddings/DSC00778.webp" },
  ],
};

export const productGallery = {
  displayTitle: "Product Photography",
  scrollLabel: "Scroll for full Gallery",
  intro: [
    { src: "/optimised/product/DSC-41.webp" },
    { src: "/optimised/product/DSC_9634.webp" },
  ],
  scrollPattern: [
    { size: "S", src: "/optimised/product/DSC02303.webp" },
    { size: "L", src: "/optimised/product/DSC09134.webp" },
    { size: "S", src: "/optimised/product/DSC06219.webp" },
    { size: "L", src: "/optimised/product/_909252.webp" },
    { size: "L", src: "/optimised/product/DSC_1121 (2).webp" },
    { size: "L", src: "/optimised/product/DSC_9546.webp" },
    { size: "L", src: "/optimised/product/DSC02073.webp" },
    { size: "L", src: "/optimised/product/DSC04956.webp" },
    { size: "L", src: "/optimised/product/DSC06191.webp" },
    { size: "S", src: "/optimised/product/DSC-20.webp" },
    { size: "L", src: "/optimised/product/DSC09091.webp" },
    { size: "S", src: "/optimised/product/WhatsApp Image 2026-05-25 at 22.31.34.webp" },
  ],
};

export const realEstateGallery = {
  displayTitle: "Real Estate Photography",
  scrollLabel: "Scroll for full Gallery",
  intro: [
    { src: "/optimised/real-estate/DSC06467.webp" },
    { src: "/optimised/real-estate/DSC06374.webp" },
  ],
  scrollPattern: [
    { size: "S", src: "/optimised/real-estate/DSC_1032.webp" },
    { size: "L", src: "/optimised/real-estate/DSC06364.webp" },
    { size: "S", src: "/optimised/real-estate/DSC06578.webp" },
    { size: "L", src: "/optimised/real-estate/DSC06575.webp" },
    { size: "L", src: "/optimised/real-estate/DSC-25.webp" },
    { size: "L", src: "/optimised/real-estate/DSC_0936.webp" },
    { size: "L", src: "/optimised/real-estate/DSC06342.webp" },
    { size: "L", src: "/optimised/real-estate/DSC06408.webp" },
    { size: "L", src: "/optimised/real-estate/DSC06427.webp" },
    { size: "S", src: "/optimised/real-estate/DSC-33.webp" },
    { size: "L", src: "/optimised/real-estate/DSC_1066.webp" },
    { size: "S", src: "/optimised/real-estate/DSC06329.webp" },
  ],
};

export const fashionGallery = {
  displayTitle: "Fashion Photography",
  scrollLabel: "Scroll for full Gallery",
  intro: [
    { src: "/optimised/fashion/DSC_3077.webp" },
    { src: "/optimised/fashion/DSC08022.webp" },
  ],
  scrollPattern: [
    { size: "S", src: "/optimised/fashion/DSC02622.webp" },
    { size: "L", src: "/optimised/fashion/DSC_7198.webp" },
    { size: "S", src: "/optimised/fashion/DSC0809544.webp" },
    { size: "L", src: "/optimised/fashion/DSC_7211.webp" },
    { size: "L", src: "/optimised/fashion/DSC_7322.webp" },
    { size: "L", src: "/optimised/fashion/DSC_7407.webp" },
    { size: "L", src: "/optimised/fashion/DSC01223.webp" },
    { size: "L", src: "/optimised/fashion/DSC02728.webp" },
    { size: "L", src: "/optimised/fashion/DSC_2240.webp" },
    { size: "S", src: "/optimised/fashion/DSC_7400.webp" },
    { size: "L", src: "/optimised/fashion/DSC_3533 (2).webp" },
    { size: "S", src: "/optimised/fashion/DSC_7344.webp" },
  ],
};

export const corporateGallery = {
  displayTitle: "Corporate Events Photography",
  scrollLabel: "Scroll for full Gallery",
  intro: [
    { src: "/optimised/corporate/IMGL1517.webp" },
    { src: "/optimised/corporate/DSC08890.webp" },
  ],
  scrollPattern: [
    { size: "S", src: "/optimised/corporate/DSC04604.webp" },
    { size: "L", src: "/optimised/corporate/IMGL1400.webp" },
    { size: "S", src: "/optimised/corporate/DSC08894.webp" },
    { size: "L", src: "/optimised/corporate/JWN-8826.webp" },
    { size: "L", src: "/optimised/corporate/JWN-8891.webp" },
    { size: "L", src: "/optimised/corporate/DSC04532.webp" },
    { size: "L", src: "/optimised/corporate/DSC04625.webp" },
    { size: "L", src: "/optimised/corporate/IMGL1336.webp" },
    { size: "L", src: "/optimised/corporate/IMGL1364.webp" },
    { size: "S", src: "/optimised/corporate/DSC09078.webp" },
    { size: "L", src: "/optimised/corporate/IMGL1382.webp" },
    { size: "S", src: "/optimised/corporate/WhatsApp Image 2026-05-25 at 23.01.29.webp" },
  ],
};

export const droneGallery = {
  displayTitle: "Drone Photography",
  scrollLabel: "Scroll for full Gallery",
  intro: [
    { src: null },
    { src: null },
  ],
  scrollPattern: [
    { size: "S", src: null },
    { size: "L", src: null },
    { size: "S", src: null },
    { size: "L", src: null },
    { size: "L", src: null },
    { size: "L", src: null },
    { size: "L", src: null },
    { size: "L", src: null },
    { size: "L", src: null },
    { size: "S", src: null },
    { size: "L", src: null },
    { size: "S", src: null },
  ],
};

export const galleryByCategory = {
  portraits: portraitGallery,
  weddings: weddingsGallery,
  product: productGallery,
  "real-estate": realEstateGallery,
  fashion: fashionGallery,
  corporate: corporateGallery,
  drone: droneGallery,
};
