import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

import balie1 from "../../public/balie/pic_1.jpg";
import balie2 from "../../public/balie/pic_2.jpg";
import balie3 from "../../public/balie/pic_3.jpg";
import balie4 from "../../public/balie/pic-crop.png";
import balieOrn from "../../public/balie/Ciemnozielone Nowoczesne Logo – moda/2.png";
import sauny1 from "../../public/sauny/pic_1.jpg";
import sauny2 from "../../public/sauny/pic_2.jpg";
import sauny3 from "../../public/sauny/pic_3.jpg";
import sauny4 from "../../public/sauny/pic-crop.png";

const loremBalie = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
];

const loremSauny = [
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <ProductSection
          id="balie"
          variant="dark"
          eyebrow="Balie"
          headline={
            <>
              Ciepło, które
              <br />
              otula rytuałem
            </>
          }
          body={loremBalie}
          price="Cena od 20 000 zł"
          href="/balie"
          images={[balie1, balie2, balie3, balie4]}
          imageAlt="Balia ogrodowa premium nad jeziorem"
          ornament={balieOrn}
          ornamentBase="tr"
        />

        <ProductSection
          id="sauny"
          variant="light"
          reversed
          eyebrow="Sauny"
          headline={
            <>
              Precyzja ciepła
              <br />
              we wnętrzu
            </>
          }
          body={loremSauny}
          price="Cena od 20 000 zł"
          href="/sauny"
          images={[sauny1, sauny2, sauny3, sauny4]}
          imageAlt="Sauna ogrodowa premium w plenerze"
          ornament={balieOrn}
          ornamentBase="tr"
        />

        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
