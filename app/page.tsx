import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import ProcessStepper from "@/components/ProcessStepper";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection/>
      <TechStack/>
      <ProcessStepper/>
      <Projects/>
      
    </main>
  );
}
