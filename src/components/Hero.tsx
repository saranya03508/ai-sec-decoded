import heroImage from "@/assets/hero-cybersecurity.jpg";
import { Shield, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 text-primary">
              <Shield className="h-8 w-8" />
              <Brain className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Cyber Security in the Age of{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Discover how modern AI tools are revolutionizing digital security—both as powerful protectors and sophisticated attackers. An educational journey into the dual nature of AI in cybersecurity.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img
              src={heroImage}
              alt="AI and Cybersecurity visualization showing neural networks and digital security"
              className="relative rounded-2xl shadow-card-hover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
