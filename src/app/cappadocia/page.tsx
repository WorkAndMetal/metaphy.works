import type { Metadata } from "next";
import CappadociaContent from "../../components/cappadocia-content";

export const metadata: Metadata = {
  title: "Cappadocia Gallery",
  description:
    "Explore the highlights included in our premium Cappadocia private guided tour draft.",
};

export default function CappadociaGalleryPage() {
  return <CappadociaContent />;
}
