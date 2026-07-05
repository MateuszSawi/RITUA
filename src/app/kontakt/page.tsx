import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import styles from "./kontakt.module.scss";

import team from "../../../public/kontakt/1.jpg";
import ornLight from "../../../public/balie/Ciemnozielone Nowoczesne Logo – moda/2.png";

export const metadata: Metadata = {
  title: "Kontakt — RITUA | Balie i sauny klasy premium",
  description:
    "Skontaktuj się z RITUA — porozmawiajmy o Twoich baliach i saunach na wymiar. Telefon, e-mail, adres. Obsługujemy Polskę i Słowację.",
};

const CORNERS = [
  { c: "tl", t: "scale(-1, 1)" },
  { c: "tr", t: "scale(1, 1)" },
  { c: "bl", t: "scale(-1, -1)" },
  { c: "br", t: "scale(1, -1)" },
] as const;

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        {/* NAGŁÓWEK */}
        <header className={styles.header}>
          {CORNERS.map(({ c, t }) => (
            <span
              key={c}
              className={`${styles.headOrn} ${styles[c]}`}
              style={{ transform: t }}
              aria-hidden
            >
              <Image src={ornLight} alt="" sizes="200px" />
            </span>
          ))}
          <div className={styles.headInner}>
            <span className={styles.eyebrow}>Kontakt</span>
            <h1 className={styles.title}>Porozmawiajmy o Twoim rytuale</h1>
            <p className={styles.intro}>
              Każdy projekt zaczynamy od rozmowy. Opowiedz nam o swojej
              przestrzeni i oczekiwaniach — zaprojektujemy balię lub saunę
              dopasowaną co do milimetra.
            </p>
          </div>
        </header>

        {/* ZESPÓŁ */}
        <section className={styles.team}>
          <figure className={styles.teamFrame}>
            <Image src={team} alt="Zespół RITUA" sizes="100vw" priority placeholder="blur" />
            <span className={styles.teamBorder} aria-hidden />
          </figure>
          <p className={styles.caption}>Zespół RITUA</p>
        </section>

        {/* DANE + FORMULARZ */}
        <section className={styles.contact}>
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2 className={styles.blockHead}>Dane kontaktowe</h2>

              <div className={styles.infoList}>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>
                    <Phone size={20} strokeWidth={1.6} />
                  </span>
                  <div className={styles.infoText}>
                    <span>Telefon</span>
                    <a href="tel:+48000000000">+48 000 000 000</a>
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>
                    <Mail size={20} strokeWidth={1.6} />
                  </span>
                  <div className={styles.infoText}>
                    <span>E-mail</span>
                    <a href="mailto:kontakt@ritua.pl">kontakt@ritua.pl</a>
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>
                    <Clock size={20} strokeWidth={1.6} />
                  </span>
                  <div className={styles.infoText}>
                    <span>Godziny pracy</span>
                    <p>Pon–Pt&nbsp;·&nbsp;9:00–17:00</p>
                  </div>
                </div>
              </div>

              <div className={styles.divider} />

              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>
                  <MapPin size={20} strokeWidth={1.6} />
                </span>
                <div className={styles.infoText}>
                  <span>Adres</span>
                  <p>
                    RITUA Sp. z o.o.
                    <br />
                    ul. Przykładowa 12
                    <br />
                    00-000 Warszawa, Polska
                  </p>
                </div>
              </div>

              <p className={styles.note}>
                Realizujemy projekty na terenie Polski i Słowacji.
              </p>
            </div>

            <div className={styles.formCol}>
              <h2 className={styles.blockHead}>Napisz do nas</h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
