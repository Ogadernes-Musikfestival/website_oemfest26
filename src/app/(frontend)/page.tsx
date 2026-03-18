import { DrawerPreview as Drawer } from "@base-ui/react/drawer";
import CTAfrivillig from "./components/CTAfrivillig";
import TriggerButton from "./components/TriggerButton";
import { frivilligDrawer } from "./lib/handles";
import SignupForm from "./components/SignupForm";
import Hero from "./components/Hero";
import { getSiteSettings } from "./lib/getSiteSettings";

export default async function HomePage() {
  return (
    <div>
      <Hero />
    </div>
  );
}
