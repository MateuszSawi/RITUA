"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import styles from "./StatementBand.module.scss";

const CORNERS = [
  { c: "tl", t: "scale(-1, 1)" },
  { c: "tr", t: "scale(1, 1)" },
  { c: "bl", t: "scale(-1, -1)" },
  { c: "br", t: "scale(1, -1)" },
] as const;

type StatementBandProps = {
  image: StaticImageData;
  kicker: string;
  text: ReactNode;
  ornament: StaticImageData;
};

export default function StatementBand({
  image,
  kicker,
  text,
  ornament,
}: StatementBandProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-9%", "9%"]
  );

  return (
    <section ref={ref} className={styles.band}>
      <motion.div className={styles.bg} style={{ y }}>
        <Image src={image} alt="" fill sizes="100vw" placeholder="blur" />
      </motion.div>
      <div className={styles.overlay} aria-hidden />

      {CORNERS.map(({ c, t }) => (
        <span
          key={c}
          className={`${styles.orn} ${styles[c]}`}
          style={{ transform: t }}
          aria-hidden
        >
          <Image src={ornament} alt="" sizes="240px" />
        </span>
      ))}

      <motion.div
        className={styles.inner}
        initial={reduce ? false : { opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className={styles.kicker}>{kicker}</span>
        <p className={styles.text}>{text}</p>
        <span className={styles.line} aria-hidden />
      </motion.div>
    </section>
  );
}
