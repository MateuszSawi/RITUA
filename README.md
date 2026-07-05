# RITUA — balie i sauny klasy premium

Strona wizytówkowa marki RITUA (balie i sauny na wymiar), Polska i Słowacja.
Next.js 16 (App Router) · TypeScript · SCSS Modules · Framer Motion · lucide-react.

## Uruchomienie

```bash
npm install
npm run dev      # serwer deweloperski (http://localhost:3000)
npm run build    # produkcyjny build (wszystkie strony statyczne)
npm run start    # serwer produkcyjny po buildzie
npm run lint     # ESLint
```

## Strony

| Ścieżka | Opis |
|---|---|
| `/` | Strona główna — hero (wideo), balie, sauny, „O nas" |
| `/balie` | Podstrona produktowa balii (motyw navy) |
| `/sauny` | Podstrona produktowa saun (motyw stalowy `#2e3a4b`) |
| `/realizacje/balie` | Realizacje balii |
| `/realizacje/sauny` | Realizacje saun (motyw stalowy) |
| `/realizacje` | Przekierowanie → `/realizacje/balie` |
| `/kontakt` | Kontakt — zespół, dane, formularz |

## Wdrożenie (produkcja)

Projekt jest w 100% statyczny — nadaje się na Vercel, Netlify lub dowolny hosting statyczny.

- **Vercel:** podłącz repozytorium, framework wykryje się automatycznie (Next.js). Bez dodatkowej konfiguracji.
- Build: `npm run build`, output serwowany przez `npm run start` (lub statycznie).

### Wideo hero
- Serwowane, lekkie pliki pętli są w `public/`: `hero-loop.webm` (~0,65 MB), `hero-loop.mp4` (~2 MB, 20 s), `hero-poster.jpg`.
- Oryginał 4K (~156 MB) leży w `/assets/hero-source.mp4` i jest **wykluczony z repo** (`.gitignore`). Trzymaj jego kopię zapasową lokalnie.

## ⚠️ Do uzupełnienia przed startem (placeholdery)

1. **Dane kontaktowe** — telefon, e-mail, adres w `src/app/kontakt/page.tsx` oraz w stopce `src/components/Footer.tsx` (obecnie `+48 000 000 000`, `kontakt@ritua.pl`, „ul. Przykładowa 12").
2. **Formularz kontaktowy** — `src/components/ContactForm.tsx` pokazuje potwierdzenie, ale **nie wysyła e-maila**. Podłącz backend (np. Resend, Formspree lub API route) przed produkcją.
3. **Statystyki „O nas"** — liczby (15+ lat, 300+ realizacji…) w `src/components/AboutSection.tsx`.
4. **Dane techniczne / warianty / ceny** — realistyczne placeholdery w `src/app/balie/page.tsx` i `src/app/sauny/page.tsx`; zweryfikuj z rzeczywistymi wartościami.
5. **Opisy realizacji** — `src/data/realizations.ts`.
6. **Teksty balie/sauny na stronie głównej** — obecnie lorem ipsum w `src/app/page.tsx`.

## Struktura

- `src/app/` — trasy (App Router), favicon (`icon.png`)
- `src/components/` — komponenty (Navbar, Hero, ProductPage, RealizationsView, …)
- `src/styles/` — tokeny SCSS (`_variables.scss`), miksiny, style globalne
- `src/data/` — dane realizacji
- `public/` — grafiki, ornamenty, wideo pętli
