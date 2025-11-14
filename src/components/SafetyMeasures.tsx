import { Card } from "@/components/ui/card";
import { Shield, Users, BookOpen, AlertCircle, Lock, RefreshCw } from "lucide-react";

const SafetyMeasures = () => {
  const measures = [
    {
      icon: Shield,
      category: "For Individuals",
      tips: [
        "Use strong, unique passwords for every account and enable two-factor authentication (2FA)",
        "Keep software and operating systems updated—patches fix AI-exploitable vulnerabilities",
        "Be skeptical of emails and messages, even from known contacts (could be AI-generated phishing)",
        "Use reputable antivirus software with AI-powered threat detection",
        "Avoid clicking suspicious links or downloading unknown attachments"
      ]
    },
    {
      icon: Users,
      category: "For Organizations",
      tips: [
        "Implement AI-powered Security Information and Event Management (SIEM) systems",
        "Conduct regular security training to help employees recognize AI-generated attacks",
        "Use zero-trust architecture—verify every access request, never assume trust",
        "Deploy AI-based endpoint detection and response (EDR) solutions",
        "Perform regular penetration testing with AI-assisted tools to find vulnerabilities"
      ]
    },
    {
      icon: BookOpen,
      category: "Best Practices",
      tips: [
        "Practice the principle of least privilege—only grant minimum necessary access",
        "Encrypt sensitive data both at rest and in transit",
        "Maintain offline backups to protect against ransomware and AI-powered attacks",
        "Monitor network traffic for unusual patterns that indicate AI-driven attacks",
        "Have an incident response plan specifically addressing AI-powered threats"
      ]
    }
  ];

  const ethicalConsiderations = [
    {
      icon: AlertCircle,
      title: "Transparency",
      description: "Security AI systems should be explainable—understand why they make decisions"
    },
    {
      icon: Lock,
      title: "Privacy",
      description: "AI security tools must protect user privacy while defending against threats"
    },
    {
      icon: RefreshCw,
      title: "Continuous Learning",
      description: "Stay informed about emerging AI threats and evolving defense strategies"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <Shield className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Safety Measures & Best Practices
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Practical steps to protect yourself and your organization from AI-powered threats
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          {measures.map((measure, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <measure.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold">{measure.category}</h3>
              </div>
              <ul className="space-y-3 pl-4">
                {measure.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex gap-3">
                    <div className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <p className="text-muted-foreground leading-relaxed">{tip}</p>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ethicalConsiderations.map((consideration, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-primary/5 border-primary/20 text-center"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <consideration.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">{consideration.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {consideration.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyMeasures;
