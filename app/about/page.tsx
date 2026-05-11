import Header from "@/Component/Header";
import Footer from "@/Component/Footer";
import AboutHeroSection from "@/Component/About/AboutHeroSection"
import AboutSection from "@/Component/About/Aboutsection";
import WhoWeAre from "@/Component/About/WhoWeAre";
import NewsletterCTA from "@/Component/Home/NewsletterCTA";
import Journey from "@/Component/About/Journey";
import WhyFamiliesTrustUs from "@/Component/About/WhyFamiliesTrustUs";
import FAQSection from "@/Component/About/FAQSection";
export default function About() {
  return (
    <>
      <AboutHeroSection />
      <AboutSection />
      <WhoWeAre />
      <Journey /> 
      <FAQSection />
      <NewsletterCTA /> 
    </>
  );
}
