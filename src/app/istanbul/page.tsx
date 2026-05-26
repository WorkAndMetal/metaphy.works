import type { Metadata } from "next";
import IstanbulContent from "../../components/istanbul-content";

export const metadata: Metadata = {
  title: "Istanbul Gallery",
  description:
    "Explore the Istanbul highlights included in our premium private guided tour draft.",
};

export default function IstanbulGalleryPage() {
  return <IstanbulContent />;
}
