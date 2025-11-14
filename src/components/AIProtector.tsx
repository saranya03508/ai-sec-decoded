import protectorImage from "@/assets/ai-protector.jpg";
import { Card } from "@/components/ui/card";
import { Shield, Search, Zap, Lock } from "lucide-react";

const AIProtector = () => {
  const capabilities = [
    {
      icon: Search,
      title: "Threat Detection",
      description: "AI scans millions of events per second to identify unusual patterns and potential security breaches before they cause damage."
    },
    {
      icon: Zap,
      title: "Real-Time Response",
      description: "Automated systems respond to attacks instantly, blocking threats and isolating compromised systems in milliseconds."
    },
    {
      icon: Lock,
      title: "Predictive Security",
      description: "Machine learning models predict future attack vectors by analyzing historical data and emerging threat patterns."
    }
  ];

  const examples = [
    "Email filtering systems that block 99.9% of phishing attempts using AI pattern recognition",
    "Biometric authentication that uses facial recognition and behavioral analysis to verify identity",
    "Network monitoring tools that detect anomalies like unusual data transfers or unauthorized access attempts",
    "Password managers with AI that generate and analyze password strength in real-time"
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <Shield className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI as a <span className="bg-gradient-primary bg-clip-text text-transparent">Protector</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            How artificial intelligence defends our digital world from cyber threats
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
          <div>
            <img
              src={protectorImage}
              alt="AI protecting digital systems with defensive shields and encrypted data"
              className="rounded-2xl shadow-card-hover w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg h-fit">
                  <capability.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="p-8 bg-card border-border">
          <h3 className="text-2xl font-semibold mb-6">Real-World Examples</h3>
          <ul className="space-y-4">
            {examples.map((example, index) => (
              <li key={index} className="flex gap-3">
                <div className="flex-shrink-0 mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
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

export default AIProtector;
