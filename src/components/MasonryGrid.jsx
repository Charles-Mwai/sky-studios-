import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ViewfinderContainer from "./ViewfinderContainer";

export const MasonryGrid = ({ images, onImageClick }) => {
  const [columnCount, setColumnCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setColumnCount(2); // Mobile: 2 columns
      } else if (width < 1024) {
        setColumnCount(3); // Tablet: 3 columns
      } else if (width < 1536) {
        setColumnCount(4); // Desktop: 4 columns
      } else {
        setColumnCount(5); // Wide Desktop: 5 columns
      }
    };

    handleResize(); // Initialize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split images array into columnCount arrays
  const columns = Array.from({ length: columnCount }, () => []);
  images.forEach((image, index) => {
    columns[index % columnCount].push(image);
  });

  return (
    <div className="flex w-full gap-2 sm:gap-4 md:gap-6 px-2 sm:px-4 md:px-8 max-w-8xl mx-auto">
      {columns.map((columnImages, colIdx) => (
        <div key={colIdx} className="flex flex-col gap-2 sm:gap-4 md:gap-6 flex-1">
          {columnImages.map((image, idx) => {
            // Map aspect ratios
            const ratioClass = image.aspectRatio === "portrait"
              ? "aspect-[3/4]"
              : image.aspectRatio === "tall"
              ? "aspect-[9/16]"
              : image.aspectRatio === "square"
              ? "aspect-square"
              : image.aspectRatio === "landscape-wide"
              ? "aspect-[16/9]"
              : "aspect-[3/2]";

            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative cursor-pointer"
              >
                <ViewfinderContainer
                  aspectRatio={ratioClass}
                  label={`SKY // ${image.caption.substring(0, 24)}`}
                  technicalInfo={`EXP.0${idx + 1} // F/2.8`}
                  onClick={() => onImageClick(image)}
                  imageSrc={image.url || image.src}
                />
              </motion.div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
