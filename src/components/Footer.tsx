import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.scss";

const nav = [
  { label: "Balie", href: "/balie" },
  { label: "Sauny", href: "/sauny" },
  { label: "Realizacje balii", href: "/realizacje/balie" },
  { label: "Realizacje saun", href: "/realizacje/sauny" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="kontakt">
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            RITUA
          </Link>
          <p>
            Balie i sauny klasy premium, projektowane na wymiar z najwyższą
            dokładnością. Rytuał dopracowany do milimetra.
          </p>
        </div>

        <nav className={styles.nav}>
          <h4>Nawigacja</h4>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contact}>
          <h4>Kontakt</h4>
          <a href="tel:+48000000000">
            <Phone size={17} strokeWidth={1.6} />
            +48 000 000 000
          </a>
          <a href="mailto:kontakt@ritua.pl">
            <Mail size={17} strokeWidth={1.6} />
            kontakt@ritua.pl
          </a>
          <span>
            <MapPin size={17} strokeWidth={1.6} />
            Polska · Słowacja
          </span>
        </div>

        <div className={styles.ctaCol}>
          <h4>Zamów rozmowę</h4>
          <p>Zaprojektujmy Twój rytuał na wymiar.</p>
          <a href="mailto:kontakt@ritua.pl" className={styles.cta}>
            Napisz do nas
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} RITUA. Wszelkie prawa zastrzeżone.</span>
        <div>
          <a href="#">Polityka prywatności</a>
          <a href="#">Regulamin</a>
        </div>
      </div>
    </footer>
  );
}
