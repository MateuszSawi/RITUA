"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./Loader.module.scss";

const LETTERS = ["R", "I", "T", "U", "A"];

const FRAME = [
  { cls: "fTop", initial: { scaleX: 0 }, delay: 0.15 },
  { cls: "fRight", initial: { scaleY: 0 }, delay: 0.32 },
  { cls: "fBottom", initial: { scaleX: 0 }, delay: 0.49 },
  { cls: "fLeft", initial: { scaleY: 0 }, delay: 0.66 },
] as const;

const wordVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.14 } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Loader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const duration = reduce ? 800 : 1450;
    const t = setTimeout(() => setShow(false), duration);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {show && (
        <motion.div
          className={styles.loader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {FRAME.map((f) => (
            <motion.span
              key={f.cls}
              className={styles[f.cls]}
              aria-hidden
              initial={reduce ? false : f.initial}
              animate={{ scaleX: 1, scaleY: 1 }}
              transition={{
                duration: 0.55,
                delay: reduce ? 0 : f.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}

          <motion.div
            className={styles.word}
            variants={wordVariants}
            initial={reduce ? undefined : "hidden"}
            animate="show"
          >
            {LETTERS.map((l, i) => (
              <motion.span
                key={i}
                className={styles.letter}
                variants={letterVariants}
              >
                {l}
              </motion.span>
            ))}
          </motion.div>

          <motion.span
            className={styles.line}
            aria-hidden
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            className={styles.slogan}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Balie i sauny na miarę Twoich standardów
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
