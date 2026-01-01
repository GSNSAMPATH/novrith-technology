import HeroSection from "./components/HeroSection";
import PoweredByInnovation from "./components/inovation";
import Navbar from "./components/Navbar";
import Newerend from "./components/Newerend";
import Projects from "./components/projects";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TrustedSection from "./components/TrustedSection";

export default function Home() {
  return (
      <>
      <Navbar />
      <HeroSection />
      <Newerend />
      <ServicesSection/>
      <Projects/>
      <PoweredByInnovation/>
      {/* <TrustedSection/> */}
      <StatsSection/>
      {/* <TestimonialsSection/> */}
      </>
  )
}