"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import styles from "./Navbar.module.scss";

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const links: NavLink[] = [
  { label: "Balie", href: "/balie" },
  { label: "Sauny", href: "/sauny" },
  {
    label: "Realizacje",
    href: "/realizacje",
    children: [
      { label: "Balie", href: "/realizacje/balie" },
      { label: "Sauny", href: "/realizacje/sauny" },
    ],
  },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar({
  topTheme = "dark",
}: {
  topTheme?: "dark" | "light";
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  // Na stronie głównej klik w logo przewija na górę zamiast przeładowywać
  const onLogoClick = (e: React.MouseEvent) => {
    close();
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${
        topTheme === "light" ? styles.onLight : ""
      }`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="RITUA — strona główna"
          onClick={onLogoClick}
        >
          RITUA
        </Link>

        <nav className={styles.links}>
          {links.map((l) =>
            l.children ? (
              <div key={l.href} className={styles.dropdown}>
                <button
                  type="button"
                  className={styles.dropToggle}
                  aria-haspopup="true"
                >
                  {l.label}
                  <ChevronDown size={15} strokeWidth={2.2} />
                </button>
                <div className={styles.submenu}>
                  {l.children.map((c) => (
                    <Link key={c.href} href={c.href}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            )
          )}
        </nav>

        <button
          type="button"
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.nav
          className={styles.mobile}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          {links.map((l) =>
            l.children ? (
              <div key={l.href} className={styles.mobileGroup}>
                <span className={styles.mobileLabel}>{l.label}</span>
                <div className={styles.mobileSub}>
                  {l.children.map((c) => (
                    <Link key={c.href} href={c.href} onClick={close}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href} onClick={close}>
                {l.label}
              </Link>
            )
          )}
        </motion.nav>
      )}
    </motion.header>
  );
}
