import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import HowItWorks from "../sections/HowItWorks";
import Features from "../sections/Features";
import ProductScreens from "../sections/ProductScreens";
import WhoVaaniHelps from "../sections/WhoVaaniHelps";
import CTA from "../sections/CTA";
import ParticlesBackground from "../components/ParticlesBackground";
import WaveBackground from "../components/WaveBackground";
import CursorSpotlight from "../components/CursorSpotlight";

function Landing() {
  return (
    <div className="relative overflow-hidden">

      {/* Cursor Spotlight Effect */}
      <CursorSpotlight />

      {/* Wave animated background */}
      <WaveBackground />

      {/* Particles background */}
      <ParticlesBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HowItWorks />
        <Features />
        <ProductScreens />
        <WhoVaaniHelps />
        <CTA />
      </div>

    </div>
  );
}

export default Landing;