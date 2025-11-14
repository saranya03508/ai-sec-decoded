import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      title: "WannaCry Ransomware Attack (2017)",
      year: "2017",
      location: "Global",
      impact: "Affected 200,000+ computers in 150 countries",
      description: "A massive ransomware attack that exploited a Windows vulnerability. While not AI-powered itself, it demonstrated the need for AI-based threat detection systems. Organizations without AI security were hit hardest.",
      lesson: "This incident accelerated the adoption of AI-powered threat detection systems that can identify and respond to zero-day exploits in real-time.",
      type: "attack"
    },
    {
      title: "Darktrace AI Stops Zero-Day Attack (2020)",
      year: "2020",
      location: "United Kingdom",
      impact: "Prevented major data breach at healthcare provider",
      description: "Darktrace's AI system detected unusual network behavior indicating a sophisticated zero-day attack on a UK healthcare provider. The AI autonomously neutralized the threat within seconds.",
      lesson: "AI's ability to detect unknown threats by identifying anomalous behavior patterns saved patient data and prevented system downtime.",
      type: "defense"
    },
    {
      title: "SolarWinds Supply Chain Attack (2020)",
      year: "2020",
      location: "United States",
      impact: "Compromised 18,000+ organizations including government agencies",
      description: "Hackers inserted malicious code into SolarWinds' software updates. The attack remained undetected for months, affecting major corporations and government departments.",
      lesson: "Traditional security failed here. This incident highlighted the critical need for AI systems that can detect subtle, slow-moving threats and analyze supply chain security.",
      type: "attack"
    },
    {
      title: "Google AI Blocks 100 Million Phishing Emails Daily (2023)",
      year: "2023",
      location: "Global",
      impact: "Protects 1.5 billion Gmail users",
      description: "Google's AI systems analyze email patterns, sender behavior, and content to block phishing attempts. The system learns from billions of emails and adapts to new phishing techniques instantly.",
      lesson: "AI protection at scale demonstrates how machine learning can protect millions of users from evolving threats without human intervention.",
      type: "defense"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-Life Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learning from actual cybersecurity incidents and AI interventions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {cases.map((case_, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-card-hover transition-all duration-300 border-border bg-card"
            >
              <div className="flex items-start justify-between mb-4">
                <Badge 
                  variant={case_.type === "defense" ? "default" : "destructive"}
                  className="mb-2"
                >
                  {case_.type === "defense" ? "AI Defense" : "Cyber Attack"}
                </Badge>
                <div className="flex gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {case_.year}
                  </Badge>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{case_.title}</h3>
              
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {case_.location}
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  {case_.impact}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {case_.description}
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold mb-2">Key Lesson:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {case_.lesson}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
