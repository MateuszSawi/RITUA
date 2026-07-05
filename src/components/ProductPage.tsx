import type { ReactNode } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Ruler, Users, Gauge } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RealizationGallery from "./RealizationGallery";
import StatementBand from "./StatementBand";
import Reveal from "./Reveal";
import styles from "./ProductPage.module.scss";

import ornLight from "../../public/balie/Ciemnozielone Nowoczesne Logo – moda/2.png";

type Corner = "tl" | "tr" | "bl" | "br";
const CORNERS: Corner[] = ["tl", "tr", "bl", "br"];
function cornerTransform(base: Corner, target: Corner) {
  const sx = base[1] !== target[1] ? -1 : 1;
  const sy = base[0] !== target[0] ? -1 : 1;
  return `scale(${sx}, ${sy})`;
}

export type ProductPageData = {
  variant: "dark" | "light";
  eyebrow: string;
  title: ReactNode;
  lead: string;
  headerImage: StaticImageData;
  heroImages: StaticImageData[];
  intro: { heading: ReactNode; paragraphs: string[] };
  features: { icon: LucideIcon; title: string; text: string }[];
  specs: { label: string; value: string }[];
  materials: { title: string; text: string }[];
  models: { name: string; dims: string; capacity: string; note: string }[];
  process: { title: string; text: string }[];
  galleryImages: StaticImageData[];
  statement: { kicker: string; text: ReactNode; image: StaticImageData };
  cta: { heading: ReactNode; text: string };
};

export default function ProductPage({ data }: { data: ProductPageData }) {
  const v = data.variant;
  // oba motywy (navy balie / stalowy sauny) są ciemne → jasne ornamenty
  const orn = ornLight;
  const ornBase: Corner = "tr";
  const realizHref = v === "dark" ? "/realizacje/balie" : "/realizacje/sauny";

  return (
    <>
      <Navbar />
      <main className={`${styles.page} ${styles[v]}`}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden>
            <Image
              src={data.headerImage}
              alt=""
              fill
              sizes="100vw"
              placeholder="blur"
              priority
            />
          </div>
          <div className={styles.heroOverlay} aria-hidden />
          {CORNERS.map((corner) => (
            <span
              key={corner}
              className={`${styles.heroOrn} ${styles[corner]}`}
              style={{ transform: cornerTransform(ornBase, corner) }}
              aria-hidden
            >
              <Image src={orn} alt="" sizes="220px" />
            </span>
          ))}
          <div className={styles.container}>
            <Reveal className={styles.heroHead}>
              <span className={styles.eyebrow}>
                <span className={styles.rule} aria-hidden />
                {data.eyebrow}
              </span>
              <h1 className={styles.h1}>{data.title}</h1>
              <p className={styles.lead}>{data.lead}</p>
            </Reveal>
            <Reveal delay={0.1} className={styles.heroMedia}>
              <RealizationGallery images={data.heroImages} alt={data.eyebrow} />
            </Reveal>
          </div>
        </section>

        {/* PROCES */}
        <section className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <Reveal className={styles.sectionHead}>
              <span className={styles.kicker}>Realizacja krok po kroku</span>
              <h2 className={styles.h2}>Od pomysłu po pierwszą kąpiel</h2>
            </Reveal>
            <div className={styles.processGrid}>
              {data.process.map((p, i) => (
                <Reveal key={i} delay={i * 0.06} className={styles.step}>
                  <span className={styles.stepNo}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WYPOSAŻENIE */}
        <section className={styles.section}>
          <div className={styles.container}>
            <Reveal className={styles.sectionHead}>
              <span className={styles.kicker}>Wyposażenie w standardzie</span>
              <h2 className={styles.h2}>Wszystko, czego potrzebuje rytuał</h2>
            </Reveal>
            <div className={styles.featureGrid}>
              {data.features.map((f, i) => (
                <Reveal key={i} delay={(i % 3) * 0.08} className={styles.feature}>
                  <span className={styles.featureIcon}>
                    <f.icon size={24} strokeWidth={1.5} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PAS Z CYTATEM (tło + roślinna ramka) */}
        <StatementBand
          image={data.statement.image}
          kicker={data.statement.kicker}
          text={data.statement.text}
          ornament={ornLight}
        />

        {/* DANE TECHNICZNE */}
        <section className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <Reveal className={styles.sectionHead}>
              <span className={styles.kicker}>Dane techniczne</span>
              <h2 className={styles.h2}>Specyfikacja</h2>
            </Reveal>
            <Reveal delay={0.06}>
              <dl className={styles.specGrid}>
                {data.specs.map((s, i) => (
                  <div key={i} className={styles.specRow}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* MATERIAŁY */}
        <section className={styles.section}>
          <div className={styles.container}>
            <Reveal className={styles.sectionHead}>
              <span className={styles.kicker}>Materiały</span>
              <h2 className={styles.h2}>Tylko sprawdzone surowce</h2>
            </Reveal>
            <div className={styles.matGrid}>
              {data.materials.map((m, i) => (
                <Reveal key={i} delay={(i % 4) * 0.07} className={styles.matCard}>
                  <span className={styles.matIndex}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className={`${styles.section} ${styles.alt}`}>
          <div className={`${styles.container} ${styles.intro}`}>
            <Reveal className={styles.introHead}>
              <h2 className={styles.h2}>{data.intro.heading}</h2>
            </Reveal>
            <Reveal delay={0.08} className={styles.introBody}>
              {data.intro.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
          </div>
        </section>

        {/* WARIANTY I WYMIARY */}
        <section className={styles.section}>
          <div className={styles.container}>
            <Reveal className={styles.sectionHead}>
              <span className={styles.kicker}>Warianty i wymiary</span>
              <h2 className={styles.h2}>Rozmiar dobrany do przestrzeni</h2>
            </Reveal>
            <div className={styles.modelGrid}>
              {data.models.map((m, i) => (
                <Reveal key={i} delay={(i % 4) * 0.07} className={styles.modelCard}>
                  <h3>{m.name}</h3>
                  <ul>
                    <li>
                      <Ruler size={16} strokeWidth={1.6} />
                      {m.dims}
                    </li>
                    <li>
                      <Users size={16} strokeWidth={1.6} />
                      {m.capacity}
                    </li>
                    <li>
                      <Gauge size={16} strokeWidth={1.6} />
                      {m.note}
                    </li>
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <Reveal className={styles.sectionHead}>
              <span className={styles.kicker}>Galeria</span>
              <h2 className={styles.h2}>Wybrane realizacje</h2>
            </Reveal>
            <Reveal delay={0.06} className={styles.galleryWrap}>
              <RealizationGallery
                images={data.galleryImages}
                alt={`Realizacje — ${data.eyebrow}`}
              />
            </Reveal>
            <Reveal delay={0.1} className={styles.galleryLink}>
              <Link href={realizHref} className={styles.textLink}>
                Zobacz wszystkie realizacje
                <ArrowRight size={17} strokeWidth={1.8} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <Reveal className={styles.ctaCard}>
              <h2 className={styles.h2}>{data.cta.heading}</h2>
              <p>{data.cta.text}</p>
              <Link href="/kontakt" className={styles.ctaBtn}>
                Zamów wycenę
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
