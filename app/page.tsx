import Image from "next/image";
import Header from "@/Component/Header";
import Footer from "@/Component/Footer";
import Hero from "@/Component/Home/Hero";
import ProudNumbers from "@/Component/Home/Proudnumbers";
import WhyChooseUs from "@/Component/Home/WhyChooseUs";
import LearningExperience from "@/Component/Home/LearningExperience";
import NewsletterCTA from "@/Component/Home/NewsletterCTA";
import CareerFocused from "@/Component/Home/CareerFocused";
export default function Home() {
  return (
    <>
    <Header />  
    <Hero/>
    <ProudNumbers/>
    <WhyChooseUs/>
    <LearningExperience/>
    
    <NewsletterCTA/>
    <Footer />
    </>
  );
}
