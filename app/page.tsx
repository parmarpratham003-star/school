import Image from "next/image";
import Header from "@/Component/Header";
import Footer from "@/Component/Footer";
import Hero from "@/Component/Home/Hero";
import ProudNumbers from "@/Component/Home/Proudnumbers";
export default function Home() {
  return (
    <>
    <Header />  
    <Hero/>
    <ProudNumbers/>
    <Footer />
    </>
  );
}
