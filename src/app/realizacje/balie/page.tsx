import type { Metadata } from "next";
import RealizationsView from "@/components/RealizationsView";
import { balieRealizations } from "@/data/realizations";

export const metadata: Metadata = {
  title: "Realizacje balii — RITUA | Balie ogrodowe premium",
  description:
    "Realizacje balii ogrodowych RITUA — projekty budowane na wymiar w Polsce i na Słowacji. Zobacz nasze balie pod klucz.",
};

export default function RealizacjeBaliePage() {
  return (
    <RealizationsView
      eyebrow="Realizacje · Balie"
      title="Realizacje balii"
      intro="Wybrane balie ogrodowe zrealizowane przez RITUA — od kameralnych ogrodów po prywatne strefy SPA. Każda budowana na wymiar."
      realizations={balieRealizations}
      headerImage={balieRealizations[0].images[0]}
    />
  );
}
