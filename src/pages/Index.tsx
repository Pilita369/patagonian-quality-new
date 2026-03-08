import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HACCPSection from "@/components/HACCPSection";
import ServicesSection from "@/components/ServicesSection";
import CertificationsSection from "@/components/CertificationsSection";
import IndustriesSection from "@/components/IndustriesSection";
import StrategicValueSection from "@/components/StrategicValueSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <HACCPSection />
      <ServicesSection />
      <CertificationsSection />
      <IndustriesSection />
      <StrategicValueSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
