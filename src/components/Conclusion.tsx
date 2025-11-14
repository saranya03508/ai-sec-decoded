import { Card } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Target } from "lucide-react";

const Conclusion = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Future is Both Bright and Challenging
            </h2>
          </div>

          <Card className="p-8 md:p-12 bg-card border-border shadow-card-hover mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Artificial Intelligence has fundamentally transformed cybersecurity, creating a landscape where the line between protector and attacker is defined not by the technology itself, but by who wields it. We stand at a critical crossroads in digital history.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                On one hand, AI empowers us with unprecedented defensive capabilities—detecting threats in milliseconds, analyzing patterns across billions of data points, and adapting to new attack vectors faster than any human team could. It has made our digital world more secure and resilient than ever before.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                On the other hand, these same capabilities can be weaponized. Cybercriminals now have access to AI tools that can automate attacks, create sophisticated phishing campaigns, and find vulnerabilities with alarming efficiency. The attacks are getting smarter, faster, and more difficult to detect.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                But here is the crucial insight: <strong>the outcome is not predetermined</strong>. The future of cybersecurity will be shaped by our choices today—how we develop AI responsibly, how we educate ourselves and others, how we implement security measures, and how we balance innovation with protection.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Stay Informed</h4>
                <p className="text-sm text-muted-foreground">
                  Understanding AI threats is the first step to defending against them
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Take Action</h4>
                <p className="text-sm text-muted-foreground">
                  Implement security measures and best practices in your daily digital life
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Keep Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Cybersecurity is constantly evolving—continuous education is essential
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-center text-muted-foreground leading-relaxed italic">
                Remember: In the age of artificial intelligence, cybersecurity is not just the responsibility of IT professionals—it is everyone's concern. Every individual, every student, every organization plays a role in building a safer digital future. The question is not whether AI will shape our security landscape, but how we will shape AI to protect what matters most.
              </p>
            </div>
          </Card>

          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Stay vigilant. Stay informed. Stay secure.</p>
            <p className="text-muted-foreground">
              The future of cybersecurity begins with understanding it today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
