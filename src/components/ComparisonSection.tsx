import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const ComparisonSection = () => {
  const advantages = [
    "Speed: AI processes millions of security events per second, far beyond human capability",
    "24/7 Protection: Never sleeps, constantly monitoring for threats without fatigue",
    "Pattern Recognition: Identifies complex attack patterns humans might miss",
    "Scalability: Protects millions of users simultaneously without additional resources",
    "Adaptive Learning: Continuously improves by learning from new threats and attacks",
    "Reduced Human Error: Eliminates mistakes caused by fatigue or oversight"
  ];

  const risks = [
    "AI systems can be poisoned with bad training data, learning to ignore real threats",
    "False positives can overwhelm security teams and create alert fatigue",
    "Hackers can reverse-engineer AI models to find weaknesses and blind spots",
    "Over-reliance on AI may lead to neglecting human security expertise and intuition",
    "Bias in AI training data can create security gaps for certain user groups or scenarios",
    "AI attacks evolve faster than defenses, creating an endless arms race"
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advantages vs Risks
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding both sides of AI in cybersecurity
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="p-8 bg-card border-border border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Advantages</h3>
            </div>
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">{advantage}</p>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-card border-border border-l-4 border-l-destructive">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <XCircle className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-semibold">Risks & Challenges</h3>
            </div>
            <ul className="space-y-4">
              {risks.map((risk, index) => (
                <li key={index} className="flex gap-3">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">{risk}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
