import attackerImage from "@/assets/ai-attacker.jpg";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Bug, Target, Skull } from "lucide-react";

const AIAttacker = () => {
  const threats = [
    {
      icon: Bug,
      title: "Automated Malware",
      description: "AI creates self-evolving malware that adapts to security measures, making it harder to detect and remove."
    },
    {
      icon: Target,
      title: "Smart Phishing",
      description: "Machine learning analyzes social media to craft personalized, convincing phishing messages that trick even cautious users."
    },
    {
      icon: Skull,
      title: "Password Cracking",
      description: "AI-powered tools can crack passwords exponentially faster by learning patterns and predicting likely combinations."
    }
  ];

  const examples = [
    "DeepFake technology creating fake videos of CEOs to authorize fraudulent transactions",
    "AI bots that conduct brute-force attacks at superhuman speeds, testing millions of password combinations per second",
    "Polymorphic malware that changes its code structure to evade antivirus detection",
    "Automated vulnerability scanners that find and exploit security weaknesses before they can be patched"
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-destructive">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI as an <span className="text-destructive">Attacker</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding how artificial intelligence is weaponized by cybercriminals
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
          <div className="order-2 lg:order-1 space-y-6">
            {threats.map((threat, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 p-2 bg-destructive/10 rounded-lg h-fit">
                  <threat.icon className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{threat.title}</h3>
                  <p className="text-muted-foreground">{threat.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={attackerImage}
              alt="AI being used for cyber attacks showing malicious code and vulnerability scanning"
              className="rounded-2xl shadow-card-hover w-full h-auto"
            />
          </div>
        </div>

        <Card className="p-8 bg-card border-border border-l-4 border-l-destructive">
          <h3 className="text-2xl font-semibold mb-6">Examples of AI-Powered Attacks</h3>
          <ul className="space-y-4">
            {examples.map((example, index) => (
              <li key={index} className="flex gap-3">
                <div className="flex-shrink-0 mt-1 h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center">
                  <AlertTriangle className="h-3 w-3 text-destructive" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{example}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default AIAttacker;
