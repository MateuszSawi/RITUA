import type { Metadata } from "next";
import {
  Flame,
  PanelsTopLeft,
  TreePine,
  SlidersHorizontal,
  Sparkles,
  Wind,
} from "lucide-react";
import ProductPage, { type ProductPageData } from "@/components/ProductPage";

import s1 from "../../../public/realizacje/sauny/1.jpg";
import s2 from "../../../public/realizacje/sauny/2.jpg";
import s3 from "../../../public/realizacje/sauny/3.jpg";
import s4 from "../../../public/realizacje/sauny/4.jpg";
import s5 from "../../../public/realizacje/sauny/5.jpg";

export const metadata: Metadata = {
  title: "Sauny na wymiar — RITUA | Fińskie, parowe, infrared",
  description:
    "Sauny ogrodowe i wewnętrzne projektowane na wymiar. Cedr, olcha, przeszklenia panoramiczne i piece premium. Dane techniczne, wymiary i warianty saun.",
};

const data: ProductPageData = {
  variant: "light",
  eyebrow: "Sauny",
  title: (
    <>
      Sauny ogrodowe
      <br />
      i wewnętrzne
    </>
  ),
  lead: "Sauny projektowane i budowane na wymiar — fińskie, parowe i infrared. Szlachetne drewno, precyzyjne wykończenie i technika, która działa bezgłośnie w tle.",
  headerImage: s1,
  heroImages: [s1, s2, s3, s4, s5],
  intro: {
    heading: (
      <>
        Precyzja ciepła
        <br />
        we wnętrzu
      </>
    ),
    paragraphs: [
      "Projektujemy sauny dopasowane do wnętrza lub ogrodu — od kompaktowych kabin po przeszklone bryły z panoramą na las. Każdy detal, od układu ław po nawiew, planujemy pod komfort użytkowników.",
      "Stawiamy na drewno najwyższej klasy i piece renomowanych producentów. Sterowanie z aplikacji pozwala rozgrzać saunę, zanim wrócisz do domu.",
    ],
  },
  features: [
    {
      icon: Flame,
      title: "Piec",
      text: "Elektryczny 6–9 kW lub opalany drewnem — z akumulacją ciepła i równomiernym rozkładem temperatury.",
    },
    {
      icon: PanelsTopLeft,
      title: "Przeszklenia",
      text: "Panoramiczne szyby hartowane otwierające wnętrze na otoczenie.",
    },
    {
      icon: TreePine,
      title: "Drewno klasy premium",
      text: "Cedr kanadyjski, olcha lub skandynawski świerk — sezonowane i selekcjonowane.",
    },
    {
      icon: SlidersHorizontal,
      title: "Sterowanie",
      text: "Panel i aplikacja — temperatura, wilgotność, harmonogram i oświetlenie.",
    },
    {
      icon: Sparkles,
      title: "Oświetlenie",
      text: "Nastrojowe oświetlenie LED z regulacją, bezpieczne w wysokiej temperaturze.",
    },
    {
      icon: Wind,
      title: "Wentylacja",
      text: "Przemyślany nawiew i wywiew zapewniający świeże powietrze i trwałość drewna.",
    },
  ],
  specs: [
    { label: "Rodzaj", value: "Fińska / parowa / infrared" },
    { label: "Drewno", value: "Cedr / olcha / świerk" },
    { label: "Wymiary", value: "od 180 × 180 cm" },
    { label: "Wysokość", value: "210 cm" },
    { label: "Liczba osób", value: "2–8" },
    { label: "Piec", value: "Elektryczny 6–9 kW / na drewno" },
    { label: "Temperatura", value: "do 110 °C" },
    { label: "Zasilanie", value: "230 / 400 V" },
    { label: "Izolacja", value: "Wełna + folia aluminiowa" },
    { label: "Gwarancja", value: "do 10 lat" },
  ],
  materials: [
    {
      title: "Cedr kanadyjski",
      text: "Aromatyczne, odporne na wilgoć drewno o wyjątkowej trwałości i niskiej przewodności cieplnej.",
    },
    {
      title: "Olcha",
      text: "Miękkie w dotyku, nie nagrzewa się nadmiernie — idealne na ławy i oparcia.",
    },
    {
      title: "Szkło hartowane",
      text: "Bezpieczne przeszklenia i drzwi o grubości do 8 mm, z dyskretnymi okuciami.",
    },
    {
      title: "Piec akumulacyjny",
      text: "Renomowane piece z kamieniami magazynującymi ciepło dla łagodnego klimatu.",
    },
  ],
  models: [
    { name: "Sauna beczka", dims: "Ø 200 × 240 cm", capacity: "4 osoby", note: "ogrodowa" },
    { name: "Sauna kwadratowa", dims: "200 × 200 cm", capacity: "4–6 osób", note: "ogród / wnętrze" },
    { name: "Sauna panoramiczna", dims: "250 × 220 cm", capacity: "6 osób", note: "przeszklona" },
    { name: "Sauna narożna", dims: "180 × 180 cm", capacity: "2–4 osoby", note: "wnętrze" },
  ],
  process: [
    { title: "Konsultacja", text: "Poznajemy Twoje oczekiwania, przestrzeń i budżet." },
    { title: "Projekt", text: "Przygotowujemy projekt z doborem drewna i pieca." },
    { title: "Produkcja", text: "Ręcznie budujemy saunę w naszej pracowni." },
    { title: "Montaż", text: "Dostarczamy i uruchamiamy saunę pod klucz." },
    { title: "Serwis", text: "Zapewniamy wsparcie, przeglądy i części eksploatacyjne." },
  ],
  galleryImages: [s3, s4, s5, s1, s2],
  statement: {
    kicker: "Precyzja",
    text: (
      <>
        Ciepło projektowane
        <br />z myślą o dekadach
      </>
    ),
    image: s2,
  },
  cta: {
    heading: (
      <>
        Zaprojektujmy
        <br />
        Twoją saunę
      </>
    ),
    text: "Umów bezpłatną konsultację — dobierzemy typ sauny, drewno i piec do Twojego wnętrza lub ogrodu.",
  },
};

export default function SaunyPage() {
  return <ProductPage data={data} />;
}
