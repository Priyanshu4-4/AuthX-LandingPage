import Navbar from "@/components/Navbar";
import HeroScene from "@/components/HeroScene";
import ImpactScene from "@/components/ImpactScene";
import FeaturesScene from "@/components/FeaturesScene";
import WorkflowScene from "@/components/WorkflowScene";
import SolutionScene from "@/components/SolutionScene";
import BusinessScene from "@/components/BusinessScene";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroScene />
      <ImpactScene />
      <FeaturesScene />
      <WorkflowScene />
      <SolutionScene />
      <BusinessScene />
      <Footer />
    </main>
  );
}
