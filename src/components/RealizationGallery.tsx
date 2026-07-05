"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./RealizationGallery.module.scss";

type RealizationGalleryProps = {
  images: StaticImageData[];
  alt: string;
  interval?: number;
};

export default function RealizationGallery({
  images,
  alt,
  interval = 4600,
}: RealizationGalleryProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  // Auto-zmiana (jak na stronie głównej); resetuje się po ręcznym wyborze
  useEffect(() => {
    if (reduce || images.length < 2) return;
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % images.length),
      interval
    );
    return () => clearTimeout(id);
  }, [index, reduce, images.length, interval]);

  const zoomDur = interval / 1000 + 1.6;

  return (
    <div className={styles.gallery}>
      <div className={styles.stage}>
        <AnimatePresence>
          <motion.div
            key={index}
            className={styles.slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className={styles.zoom}
              initial={reduce ? { scale: 1 } : { scale: 1.03 }}
              animate={reduce ? { scale: 1 } : { scale: 1.15 }}
              transition={{ duration: zoomDur, ease: "linear" }}
            >
              <Image
                src={images[index]}
                alt={alt}
                fill
                sizes="(max-width: 860px) 100vw, 60vw"
                placeholder="blur"
                priority={index === 0}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <span className={styles.border} aria-hidden />
      </div>

      {images.length > 1 && (
        <div className={styles.thumbs}>
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.thumb} ${i === index ? styles.active : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Zdjęcie ${i + 1}`}
              aria-current={i === index}
            >
              <Image src={img} alt="" fill sizes="120px" placeholder="blur" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
