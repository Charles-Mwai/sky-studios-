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
  /**
   * Scroll gallery — strict 2-size pattern (L=280×420, S=280×185)
   * Row rhythm: S L S L / L L L L / L S L S
   */
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
    { size: "L", src: "/optimised/weddings/DSC00819.webp" },
    { size: "L", src: "/optimised/weddings/DSC00822.webp" },
    { size: "L", src: "/optimised/weddings/DSC_2342.webp" },
    { size: "L", src: "/optimised/weddings/DSC_2495.webp" },
    { size: "S", src: "/optimised/weddings/DSC_2544.webp" },
    { size: "L", src: "/optimised/weddings/DSC05896.webp" },
    { size: "S", src: "/optimised/weddings/DSC_2392.webp" },
  ],
};

export const galleryByCategory = {
  portraits: portraitGallery,
  weddings: weddingsGallery,
};
