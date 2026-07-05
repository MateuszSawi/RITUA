"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./MediaCarousel.module.scss";

type MediaCarouselProps = {
  images: StaticImageData[];
  alt: string;
  interval?: number;
};

export default function MediaCarousel({
  images,
  alt,
  interval = 5200,
}: MediaCarouselProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || images.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval
    );
    return () => clearInterval(id);
  }, [reduce, images.length, interval]);

  const zoomDur = interval / 1000 + 1.6;

  return (
    <div className={styles.frame}>
      <AnimatePresence>
        <motion.div
          key={index}
          className={styles.slide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className={styles.zoom}
            initial={reduce ? { scale: 1 } : { scale: 1.02 }}
            animate={reduce ? { scale: 1 } : { scale: 1.16 }}
            transition={{ duration: zoomDur, ease: "linear" }}
          >
            <Image
              src={images[index]}
              alt={alt}
              fill
              sizes="(max-width: 860px) 100vw, 48vw"
              placeholder="blur"
              priority={index === 0}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <span className={styles.border} aria-hidden />

      {images.length > 1 && (
        <div className={styles.dots} aria-hidden>
          {images.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === index ? styles.active : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
