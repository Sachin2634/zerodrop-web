import HeroSection from "./components/HeroSection";
import ReadySection from "./components/ReadySection";
import Testimonials from "./components/Testimonials";
import TrustedOrgs from "./components/TrustedOrgs";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
      <div>
        <HeroSection />
        <WhyChoose />
        <TrustedOrgs />
        <Testimonials />
        <ReadySection />
      </div>
  );
}
