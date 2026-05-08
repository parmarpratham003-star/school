import Header from "@/Component/Header";
import Footer from "@/Component/Footer";
import AboutHeroSection from "@/Component/About/AboutHeroSection"
import AboutSection from "@/Component/About/Aboutsection";
import WhoWeAre from "@/Component/About/WhoWeAre";
import NewsletterCTA from "@/Component/Home/NewsletterCTA";
export default function About() {
  return (
    <>
      <AboutHeroSection />
      <AboutSection />
      <WhoWeAre />
      <NewsletterCTA /> 
    </>
  );
}
