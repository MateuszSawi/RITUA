import type { Metadata } from "next";
import RealizationsView from "@/components/RealizationsView";
import { saunyRealizations } from "@/data/realizations";

export const metadata: Metadata = {
  title: "Realizacje saun — RITUA | Sauny na wymiar",
  description:
    "Realizacje saun RITUA — sauny ogrodowe i wewnętrzne budowane na wymiar w Polsce i na Słowacji. Zobacz nasze sauny pod klucz.",
};

export default function RealizacjeSaunyPage() {
  return (
    <RealizationsView
      eyebrow="Realizacje · Sauny"
      title="Realizacje saun"
      intro="Wybrane sauny zrealizowane przez RITUA — ogrodowe i wewnętrzne, od klasycznych beczek po przeszklone bryły z panoramą. Każda budowana na wymiar."
      realizations={saunyRealizations}
      variant="light"
      headerImage={saunyRealizations[0].images[0]}
    />
  );
}
