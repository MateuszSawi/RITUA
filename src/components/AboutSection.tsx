"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./AboutSection.module.scss";

import bg from "../../public/realizacje/balie/3.jpg";

const stats = [
  { value: "15+", label: "lat doświadczenia" },
  { value: "300+", label: "zrealizowanych projektów" },
  { value: "2", label: "kraje — Polska i Słowacja" },
  { value: "100%", label: "realizacji pod klucz" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-8%", "8%"]
  );

  return (
    <section ref={ref} className={styles.about} id="o-nas">
      <motion.div className={styles.bg} style={{ y }}>
        <Image src={bg} alt="" fill sizes="100vw" placeholder="blur" />
      </motion.div>
      <div className={styles.overlay} aria-hidden />

      <div className={styles.inner}>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.eyebrow}>O nas</span>
          <h2 className={styles.heading}>
            Rzemiosło ciepła
            <br />
            od ponad dekady
          </h2>
          <p className={styles.text}>
            RITUA to marka tworzona przez ludzi, dla których ciepło jest sztuką.
            Od lat projektujemy i budujemy balie oraz sauny klasy premium,
            łącząc tradycyjne rzemiosło z inżynieryjną precyzją. Każda realizacja
            powstaje na wymiar — od pierwszego szkicu po ostatni detal.
          </p>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.22 }}
        >
          <span className={styles.actionsLabel}>Zobacz nasze realizacje</span>
          <div className={styles.actionsRow}>
            <Link href="/realizacje/balie" className={styles.ghost}>
              Balie
              <ArrowRight size={16} strokeWidth={1.8} />
            </Link>
            <Link href="/realizacje/sauny" className={styles.ghost}>
              Sauny
              <ArrowRight size={16} strokeWidth={1.8} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
