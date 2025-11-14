import { Card } from "@/components/ui/card";
import { Rocket, Brain, Lock, Zap, Globe, Eye } from "lucide-react";

const FuturePredictions = () => {
  const predictions = [
    {
      icon: Brain,
      year: "2025-2027",
      title: "AI vs AI Security Wars",
      description: "We'll see AI-powered attacks met with AI-powered defenses in real-time, creating an autonomous cybersecurity battlefield where machines fight machines at superhuman speeds."
    },
    {
      icon: Lock,
      year: "2028-2030",
      title: "Quantum AI Security",
      description: "Quantum computers combined with AI will break current encryption methods, forcing the development of quantum-resistant cryptography powered by even more advanced AI."
    },
    {
      icon: Globe,
      year: "2030-2035",
      title: "Unified Global AI Defense",
      description: "Countries and corporations will collaborate on shared AI security systems that predict and prevent attacks globally, creating a worldwide cyber defense network."
    },
    {
      icon: Eye,
      year: "2035+",
      title: "Predictive Threat Intelligence",
      description: "AI will evolve to predict cyber attacks before they're even planned, analyzing global data patterns, social trends, and geopolitical tensions to forecast security threats."
    }
  ];

  const trends = [
    "Automated penetration testing where AI finds vulnerabilities faster than humans can create them",
    "Behavioral biometrics becoming standard—AI will verify identity based on how you type, move your mouse, and interact with devices",
    "Self-healing systems that automatically patch vulnerabilities and restore compromised data without human intervention",
    "AI-generated synthetic data to train security models without exposing real sensitive information",
    "Personalized security AI assistants that adapt to individual user behavior and protect against targeted attacks"
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-accent">
            <Rocket className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Future Predictions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            What the next decade holds for AI and cybersecurity
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {predictions.map((prediction, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-card-hover transition-all duration-300 border-border bg-card relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <prediction.icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-accent">{prediction.year}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{prediction.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {prediction.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-primary/5 border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold">Emerging Trends to Watch</h3>
          </div>
          <ul className="space-y-4">
            {trends.map((trend, index) => (
              <li key={index} className="flex gap-3">
                <div className="flex-shrink-0 mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{trend}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default FuturePredictions;
