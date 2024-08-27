import Description from "@/components/main/Description";
import Encryption from "@/components/main/Encryption";
import FAQs from "@/components/main/FAQs";
import Hero from "@/components/main/Hero";
import Judges from "@/components/main/Judges";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Sponsors from "@/components/main/Sponsors";
import Timeline from "@/components/main/Timeline";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Description />
        <Timeline />
        <Encryption />
        <Projects />
        <Judges />
        <Sponsors />
        <FAQs />
      </div>
    </main>
  );
}
