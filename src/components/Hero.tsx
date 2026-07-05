"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Hero.module.scss";

type SlowConnection = {
  saveData?: boolean;
  effectiveType?: string;
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.45 } },
};

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);

  // Ładowanie wideo z opóźnieniem (po loaderze) + zabezpieczenie na wolne łącze
  useEffect(() => {
    const conn = (
      navigator as Navigator & { connection?: SlowConnection }
    ).connection;
    const slow =
      !!conn &&
      (conn.saveData === true ||
        conn.effectiveType === "2g" ||
        conn.effectiveType === "slow-2g");
    if (slow) return; // zostaw sam poster — nie pobieraj ciężkiego wideo
    const t = setTimeout(() => setLoadVideo(true), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (loadVideo) videoRef.current?.load();
  }, [loadVideo]);

  return (
    <section className={styles.hero} id="top">
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
      >
        {loadVideo && (
          <>
            <source src="/hero-loop.webm" type="video/webm" />
            <source src="/hero-loop.mp4" type="video/mp4" />
          </>
        )}
      </video>
      <div className={styles.overlay} aria-hidden />

      <div className={styles.inner}>
        <motion.div
          className={styles.copy}
          variants={container}
          initial={reduce ? undefined : "hidden"}
          animate="show"
        >
          <motion.span className={styles.kicker} variants={rise}>
            Balie &amp; Sauny na miarę Twoich standardów
          </motion.span>

          <motion.h1 className={styles.title} variants={rise}>
            <em>Rytuał</em> dopracowany do milimetra, projektowany na wymiar, z
            najwyższą dokładnością
          </motion.h1>
        </motion.div>
      </div>

      <motion.a
        href="#balie"
        className={styles.scroll}
        aria-label="Przewiń w dół"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.2 }}
      >
        <span className={styles.scrollLabel}>Przewiń</span>
        <span className={styles.track} aria-hidden>
          {!reduce && <span className={styles.spark} />}
        </span>
        <span className={styles.chevron} aria-hidden>
          <svg viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l11 11L23 1"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </motion.a>
    </section>
  );
}
