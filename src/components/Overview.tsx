import { Card } from "@/components/ui/card";
import { Lightbulb, Target, TrendingUp } from "lucide-react";

const Overview = () => {
  const points = [
    {
      icon: Lightbulb,
      title: "What is AI in Cybersecurity?",
      description: "Artificial Intelligence uses machine learning and smart algorithms to analyze patterns, detect threats, and respond to cyber attacks faster than any human could."
    },
    {
      icon: Target,
      title: "The Dual Nature",
      description: "AI is a double-edged sword—it can protect systems with advanced threat detection, but it can also be weaponized by hackers to create more sophisticated attacks."
    },
    {
      icon: TrendingUp,
      title: "Why It Matters Now",
      description: "As digital threats grow exponentially, AI has become essential for both defending against and understanding modern cyber attacks. The future of security depends on it."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Understanding AI in Cybersecurity
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Artificial Intelligence is transforming how we protect and attack digital systems. Here's what you need to know.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {points.map((point, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <div className="mb-4 p-3 bg-gradient-primary rounded-lg w-fit">
                <point.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
