import BandGallery from "./components/BandGallery";
import CTAWithButtons from "./components/CTAWithButtons";

import HeroHome from "./components/HeroHome";
import Partnere from "./components/Partnere";

export default async function HomePage() {
  return (
    <div>
      <HeroHome />
      <CTAWithButtons />
      <BandGallery />
      <Partnere />
    </div>
  );
}
