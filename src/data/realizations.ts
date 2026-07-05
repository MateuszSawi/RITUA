import type { StaticImageData } from "next/image";

import b1 from "../../public/realizacje/balie/1.jpg";
import b2 from "../../public/realizacje/balie/2.jpg";
import b3 from "../../public/realizacje/balie/3.jpg";
import b4 from "../../public/realizacje/balie/4.jpg";
import b5 from "../../public/realizacje/balie/5.jpg";
import s1 from "../../public/realizacje/sauny/1.jpg";
import s2 from "../../public/realizacje/sauny/2.jpg";
import s3 from "../../public/realizacje/sauny/3.jpg";
import s4 from "../../public/realizacje/sauny/4.jpg";
import s5 from "../../public/realizacje/sauny/5.jpg";

export type Realization = {
  category: string;
  title: string;
  location: string;
  description: string;
  images: StaticImageData[];
};

export const balieRealizations: Realization[] = [
  {
    category: "Balia",
    title: "Balia ogrodowa nad jeziorem",
    location: "Mazury",
    description:
      "Ręcznie wykończona balia z drewna termicznego, zintegrowana z pomostem nad taflą jeziora. Piec zewnętrzny ze stali nierdzewnej i oświetlenie podwodne tworzą scenerię wieczornego rytuału.",
    images: [b1, b2, b3, b4, b5],
  },
  {
    category: "Balia",
    title: "Prywatne SPA z balią i tarasem",
    location: "Kaszuby",
    description:
      "Kompleksowa aranżacja strefy relaksu: balia z hydromasażem, taras z drewna egzotycznego i dyskretne oświetlenie. Całość dopasowana do architektury rezydencji.",
    images: [b4, b5, b1, b2, b3],
  },
  {
    category: "Balia",
    title: "Balia z zadaszeniem i strefą ognia",
    location: "Bieszczady",
    description:
      "Balia osadzona pod drewnianą wiatą, z sąsiadującą strefą ognia i wypoczynku. Rozwiązanie na całoroczne użytkowanie, niezależnie od pogody.",
    images: [b2, b3, b4, b5, b1],
  },
];

export const saunyRealizations: Realization[] = [
  {
    category: "Sauna",
    title: "Sauna panoramiczna w lesie",
    location: "Zakopane",
    description:
      "Sauna z panoramicznym przeszkleniem otwierającym wnętrze na las. Cedrowe wykończenie, piec akumulacyjny i ławy projektowane pod indywidualny komfort domowników.",
    images: [s1, s2, s3, s4, s5],
  },
  {
    category: "Sauna",
    title: "Sauna ogrodowa z jacuzzi",
    location: "Wrocław",
    description:
      "Zestawienie sauny fińskiej i jacuzzi w jednej, spójnej bryle. Sterowanie z poziomu aplikacji, filtracja bezobsługowa i wykończenia klasy premium.",
    images: [s4, s5, s1, s2, s3],
  },
  {
    category: "Sauna",
    title: "Sauna beczka nad potokiem",
    location: "Tatry · Słowacja",
    description:
      "Klasyczna sauna w formie beczki, ustawiona nad górskim potokiem. Naturalne drewno i minimalistyczna forma wpisane w surowy, tatrzański krajobraz.",
    images: [s3, s2, s1, s5, s4],
  },
];

export const allRealizations: Realization[] = [
  balieRealizations[0],
  saunyRealizations[0],
  balieRealizations[1],
  saunyRealizations[1],
  balieRealizations[2],
  saunyRealizations[2],
];
