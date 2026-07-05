"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MediaCarousel from "./MediaCarousel";
import styles from "./ProductSection.module.scss";

type Corner = "tl" | "tr" | "bl" | "br";

const CORNERS: Corner[] = ["tl", "tr", "bl", "br"];

// Odbicie lustrzane wzoru narożnika względem jego bazowej orientacji,
// aby ta sama grafika pasowała do każdego z czterech rogów.
function cornerTransform(base: Corner, target: Corner) {
  const sx = base[1] !== target[1] ? -1 : 1; // l/r
  const sy = base[0] !== target[0] ? -1 : 1; // t/b
  return `scale(${sx}, ${sy})`;
}

type ProductSectionProps = {
  id: string;
  variant: "dark" | "light";
  reversed?: boolean;
  eyebrow: string;
  headline: React.ReactNode;
  body: string[];
  price: string;
  href: string;
  images: StaticImageData[];
  imageAlt: string;
  ornament: StaticImageData;
  ornamentBase: Corner;
};

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function ProductSection({
  id,
  variant,
  reversed = false,
  eyebrow,
  headline,
  body,
  price,
  href,
  images,
  imageAlt,
  ornament,
  ornamentBase,
}: ProductSectionProps) {
  const reduce = useReducedMotion();

  return (
    <section
      id={id}
      className={`${styles.section} ${styles[variant]} ${
        reversed ? styles.reversed : ""
      }`}
    >
      {CORNERS.map((corner) => (
        <span
          key={corner}
          className={`${styles.orn} ${styles[corner]}`}
          style={{ transform: cornerTransform(ornamentBase, corner) }}
          aria-hidden
        >
          <Image src={ornament} alt="" sizes="240px" />
        </span>
      ))}

      <div className={styles.inner}>
        <motion.div
          className={styles.media}
          initial={reduce ? undefined : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <MediaCarousel images={images} alt={imageAlt} />
        </motion.div>

        <div className={styles.content}>
          <motion.span
            className={styles.eyebrow}
            variants={fade}
            custom={0}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className={styles.rule} aria-hidden />
            {eyebrow}
          </motion.span>

          <motion.h2
            className={styles.headline}
            variants={fade}
            custom={1}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {headline}
          </motion.h2>

          {body.map((p, i) => (
            <motion.p
              key={i}
              className={styles.body}
              variants={fade}
              custom={2 + i}
              initial={reduce ? undefined : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            className={styles.footer}
            variants={fade}
            custom={2 + body.length}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <Link href={href} className={styles.btn}>
              Dowiedz się więcej
              <ArrowRight size={17} strokeWidth={1.8} />
            </Link>
            <span className={styles.price}>{price}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
