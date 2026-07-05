import { Fragment } from "react";
import Image, { type StaticImageData } from "next/image";
import { MapPin } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RealizationGallery from "./RealizationGallery";
import type { Realization } from "@/data/realizations";
import styles from "./RealizationsView.module.scss";

import ornLight from "../../public/balie/Ciemnozielone Nowoczesne Logo – moda/2.png";
import divider from "../../public/divider.png";

type Corner = "tl" | "tr" | "bl" | "br";
const CORNERS: Corner[] = ["tl", "tr", "bl", "br"];
function cornerTransform(base: Corner, target: Corner) {
  const sx = base[1] !== target[1] ? -1 : 1;
  const sy = base[0] !== target[0] ? -1 : 1;
  return `scale(${sx}, ${sy})`;
}

type RealizationsViewProps = {
  eyebrow: string;
  title: string;
  intro: string;
  realizations: Realization[];
  variant?: "dark" | "light";
  headerImage: StaticImageData;
};

export default function RealizationsView({
  eyebrow,
  title,
  intro,
  realizations,
  variant = "dark",
  headerImage,
}: RealizationsViewProps) {
  const orn = ornLight;
  const ornBase: Corner = "tr";

  return (
    <>
      <Navbar />
      <main className={`${styles.page} ${styles[variant]}`}>
        <header className={styles.header}>
          <div className={styles.headerBg} aria-hidden>
            <Image src={headerImage} alt="" fill sizes="100vw" placeholder="blur" priority />
          </div>
          <div className={styles.headerOverlay} aria-hidden />
          {CORNERS.map((corner) => (
            <span
              key={corner}
              className={`${styles.orn} ${styles[corner]}`}
              style={{ transform: cornerTransform(ornBase, corner) }}
              aria-hidden
            >
              <Image src={orn} alt="" sizes="220px" />
            </span>
          ))}

          <div className={styles.headInner}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h1 className={styles.headTitle}>{title}</h1>
            <p className={styles.headText}>{intro}</p>
          </div>
        </header>

        {realizations.map((r, i) => (
          <Fragment key={i}>
            {i > 0 && (
              <div className={styles.divider} aria-hidden>
                <Image src={divider} alt="" sizes="440px" />
              </div>
            )}
            <section className={styles.item} id={`realizacja-${i + 1}`}>
              <div
                className={`${styles.itemInner} ${
                  i % 2 === 1 ? styles.reversed : ""
                }`}
              >
                <div className={styles.galleryCol}>
                  <RealizationGallery images={r.images} alt={r.title} />
                </div>

                <div className={styles.textCol}>
                  <span className={styles.cat}>
                    <span className={styles.rule} aria-hidden />
                    {r.category}
                  </span>
                  <h2 className={styles.title}>{r.title}</h2>
                  <span className={styles.loc}>
                    <MapPin size={17} strokeWidth={1.7} />
                    {r.location}
                  </span>
                  <p className={styles.desc}>{r.description}</p>
                </div>
              </div>
            </section>
          </Fragment>
        ))}
      </main>
      <Footer />
    </>
  );
}
