import BandGallery from "./components/BandGallery";

import HeroHome from "./components/HeroHome";

export default async function HomePage() {
  return (
    <div>
      <HeroHome />
      <BandGallery />
    </div>
  );
}
