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
  /** Two hero frames before title (Esther: portrait_2, banner_6) */
  intro: [
    slide("photo-1534528741775-53994a69daeb", "portrait"),
    slide("photo-1507003211169-0a1dd7228f2d", "banner"),
  ],
  /**
   * Scroll gallery — strict 2-size pattern (L=280×420, S=280×185)
   * Row rhythm: S L S L / L L L L / L S L S
   */
  scrollPattern: [
    "S", "L", "S", "L",
    "L", "L", "L", "L",
    "L", "S", "L", "S",
  ],
};

export const galleryByCategory = {
  portraits: portraitGallery,
};
