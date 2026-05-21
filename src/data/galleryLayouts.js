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
    slide("photo-1534528741775-53994a69daeb", "portrait"),
    slide("photo-1507003211169-0a1dd7228f2d", "banner"),
  ],
  /**
   * Scroll gallery — strict 2-size pattern (L=280×420, S=280×185)
   * Row rhythm: S L S L / L L L L / L S L S
   */
  scrollPattern: [
    { size: "S", src: "/potraits/DSC_78.jpg" },
    { size: "L", src: "/potraits/DSC_104.jpg" },
    { size: "S", src: "/potraits/DSC_108.jpg" },
    { size: "L", src: "/potraits/DSC06195 copy.jpg" },
    { size: "L", src: "/potraits/DSC09712.JPG" },
    { size: "L", src: "/potraits/DSC_2062.jpg" },
    { size: "L", src: "/potraits/DSC_2235.JPG" },
    { size: "L", src: "/potraits/DSC_2043.JPG" },
    { size: "L", src: "/potraits/DSC_2043 (1).jpg" },
    { size: "S", src: "/potraits/DSC_0335.JPG" },
    { size: "L", src: "/potraits/DSC06123 copy.jpg" },
    { size: "S", src: "/potraits/DSC06031 copy.jpg" },
  ],
};

export const galleryByCategory = {
  portraits: portraitGallery,
};
