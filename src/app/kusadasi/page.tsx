import type { Metadata } from "next";
import KusadasiContent from "../../components/kusadasi-content";

export const metadata: Metadata = {
  title: "Kusadasi Gallery",
  description:
    "Explore the highlights included in our Kusadasi premium private guided tour draft.",
};

export default function KusadasiGalleryPage() {
  return <KusadasiContent />;
}
