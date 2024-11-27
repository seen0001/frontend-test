import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TwoColumnSection from "../components/TwoColumnSection";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";
import ReceptorSection from "@/components/ReceptorSection";
import ClinicalTools from "@/components/ClinicalTools";
import VideosSection from "@/components/VideosSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="italic font-thin">
        <Hero />
        <TwoColumnSection />
        <CardSection />
        <ReceptorSection />
        <ClinicalTools />
        <VideosSection />
      </main>
      <Footer />
    </>
  );
}
