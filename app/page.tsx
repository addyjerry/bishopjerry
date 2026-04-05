import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection/>
      <TechStack/>
    </main>
  );
}
