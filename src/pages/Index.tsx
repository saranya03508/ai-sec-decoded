import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import AIProtector from "@/components/AIProtector";
import AIAttacker from "@/components/AIAttacker";
import CaseStudies from "@/components/CaseStudies";
import FuturePredictions from "@/components/FuturePredictions";
import ComparisonSection from "@/components/ComparisonSection";
import SafetyMeasures from "@/components/SafetyMeasures";
import Conclusion from "@/components/Conclusion";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Overview />
      <AIProtector />
      <AIAttacker />
      <CaseStudies />
      <FuturePredictions />
      <ComparisonSection />
      <SafetyMeasures />
      <Conclusion />
    </main>
  );
};

export default Index;
