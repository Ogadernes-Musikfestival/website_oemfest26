import BandGallery from "./components/BandGallery";
import CTAWithButtons from "./components/CTAWithButtons";

import HeroHome from "./components/HeroHome";

export default async function HomePage() {
  return (
    <div>
      <HeroHome />
      <CTAWithButtons />
      <BandGallery />
    </div>
  );
}
