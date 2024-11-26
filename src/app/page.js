import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TwoColumnSection from "../components/TwoColumnSection";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TwoColumnSection />
      <CardSection />
      {/* Tilføj flere sektioner */}
      <Footer />
    </>
  );
}
