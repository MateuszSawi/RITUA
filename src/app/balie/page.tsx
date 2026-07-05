import type { Metadata } from "next";
import {
  Flame,
  Droplets,
  Waves,
  Sparkles,
  SlidersHorizontal,
  ShieldCheck,
} from "lucide-react";
import ProductPage, { type ProductPageData } from "@/components/ProductPage";

import b1 from "../../../public/realizacje/balie/1.jpg";
import b2 from "../../../public/realizacje/balie/2.jpg";
import b3 from "../../../public/realizacje/balie/3.jpg";
import b4 from "../../../public/realizacje/balie/4.jpg";
import b5 from "../../../public/realizacje/balie/5.jpg";

export const metadata: Metadata = {
  title: "Balie ogrodowe na wymiar — RITUA | Klasa premium",
  description:
    "Balie ogrodowe projektowane i budowane na wymiar. Drewno termiczne, piec ze stali nierdzewnej, hydromasaż i sterowanie z aplikacji. Dane techniczne, wymiary i warianty.",
};

const data: ProductPageData = {
  variant: "dark",
  eyebrow: "Balie",
  title: (
    <>
      Balie ogrodowe
      <br />
      na wymiar
    </>
  ),
  lead: "Ręcznie budowane balie z drewna termicznego i akrylu, z precyzyjnym systemem grzewczym i wykończeniem, które wytrzyma dekady. Projektowane pod Twój ogród i Twój rytuał.",
  headerImage: b1,
  heroImages: [b1, b2, b3, b4, b5],
  intro: {
    heading: (
      <>
        Ciepło zamknięte
        <br />
        w precyzji
      </>
    ),
    paragraphs: [
      "Każda balia RITUA powstaje na indywidualne zamówienie. Zaczynamy od projektu dopasowanego do przestrzeni, nasłonecznienia i architektury posesji, a kończymy na montażu pod klucz.",
      "Łączymy naturalne drewno z nowoczesną techniką: wydajnym ogrzewaniem, bezobsługową filtracją i sterowaniem z poziomu aplikacji. Efekt to komfort, którego nie trzeba doglądać.",
    ],
  },
  features: [
    {
      icon: Flame,
      title: "Ogrzewanie",
      text: "Zewnętrzny piec ze stali nierdzewnej lub grzałka elektryczna — dobierane do oczekiwanego tempa nagrzewania.",
    },
    {
      icon: Droplets,
      title: "Filtracja i dezynfekcja",
      text: "Bezobsługowy obieg wody z filtracją i dezynfekcją UV, utrzymujący krystaliczną czystość.",
    },
    {
      icon: Waves,
      title: "Hydromasaż",
      text: "Dysze strefowe na plecy, kark i nogi, z płynną regulacją intensywności.",
    },
    {
      icon: Sparkles,
      title: "Oświetlenie LED",
      text: "Podwodne oświetlenie w standardzie IP68 z gotowymi scenami świetlnymi.",
    },
    {
      icon: SlidersHorizontal,
      title: "Sterowanie",
      text: "Panel dotykowy i aplikacja mobilna — temperatura, sceny i harmonogram.",
    },
    {
      icon: ShieldCheck,
      title: "Pokrywa termiczna",
      text: "Wielowarstwowa, izolowana pokrywa ograniczająca straty ciepła i zużycie energii.",
    },
  ],
  specs: [
    { label: "Materiał obudowy", value: "Drewno termiczne / HPL" },
    { label: "Niecka", value: "Akryl wzmocniony włóknem" },
    { label: "Średnica", value: "180–240 cm" },
    { label: "Głębokość", value: "110 cm" },
    { label: "Pojemność wody", value: "900–1800 l" },
    { label: "Liczba osób", value: "4–8" },
    { label: "Ogrzewanie", value: "Piec 30 kW / grzałka 3–6 kW" },
    { label: "Czas nagrzewania", value: "od 2 godz." },
    { label: "Zasilanie", value: "230 / 400 V" },
    { label: "Gwarancja", value: "do 10 lat" },
  ],
  materials: [
    {
      title: "Drewno termiczne",
      text: "Świerk lub modrzew poddany obróbce termicznej — odporny na wilgoć i stabilny wymiarowo.",
    },
    {
      title: "Akryl premium",
      text: "Higieniczna, gładka niecka wzmocniona włóknem szklanym, łatwa w utrzymaniu.",
    },
    {
      title: "Stal nierdzewna 316L",
      text: "Piec i okucia z gatunku odpornego na korozję, także w wodzie mineralnej.",
    },
    {
      title: "Kompozyt HPL",
      text: "Opcjonalna obudowa bezobsługowa o wysokiej odporności na UV i warunki atmosferyczne.",
    },
  ],
  models: [
    { name: "Balia Ø180", dims: "Ø 180 × 110 cm", capacity: "4 osoby", note: "900 l" },
    { name: "Balia Ø200", dims: "Ø 200 × 110 cm", capacity: "6 osób", note: "1200 l" },
    { name: "Balia Ø240", dims: "Ø 240 × 110 cm", capacity: "8 osób", note: "1800 l" },
    { name: "Balia owalna", dims: "220 × 160 cm", capacity: "6 osób", note: "na wymiar" },
  ],
  process: [
    { title: "Konsultacja", text: "Poznajemy Twoje oczekiwania, przestrzeń i budżet." },
    { title: "Projekt", text: "Przygotowujemy projekt z doborem materiałów i wyposażenia." },
    { title: "Produkcja", text: "Ręcznie budujemy balię w naszej pracowni." },
    { title: "Montaż", text: "Dostarczamy i uruchamiamy instalację pod klucz." },
    { title: "Serwis", text: "Zapewniamy wsparcie, przeglądy i części eksploatacyjne." },
  ],
  galleryImages: [b3, b4, b5, b1, b2],
  statement: {
    kicker: "Rzemiosło",
    text: (
      <>
        Każdy detal dopracowany
        <br />
        do milimetra
      </>
    ),
    image: b2,
  },
  cta: {
    heading: (
      <>
        Zaprojektujmy
        <br />
        Twoją balię
      </>
    ),
    text: "Umów bezpłatną konsultację — dobierzemy rozmiar, materiały i wyposażenie do Twojej przestrzeni.",
  },
};

export default function BaliePage() {
  return <ProductPage data={data} />;
}
