import { Button } from "@/components/ui/button";
import { Shield, Upload, CheckCircle, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Blockchain-Secured Verification</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Verify Certificate
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Authenticity</span>
                <br />
                in Seconds
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Professional-grade document verification powered by AI and blockchain technology. 
                Detect tampering, validate authenticity, and build trust with instant verification.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-success/10">
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <span className="text-sm font-medium text-foreground">AI-Powered Detection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-success/10">
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <span className="text-sm font-medium text-foreground">Blockchain Security</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-success/10">
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <span className="text-sm font-medium text-foreground">Instant Results</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-success/10">
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <span className="text-sm font-medium text-foreground">99.9% Accuracy</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="xl" className="group">
                <Upload className="h-5 w-5" />
                Verify Certificate Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Documents Verified</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 bg-card border border-border/50 rounded-2xl shadow-card p-8 backdrop-blur-sm">
              <img 
                src={heroBg} 
                alt="Certificate verification platform interface" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full shadow-glow font-semibold text-sm">
                Verified ✓
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border shadow-card px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-sm font-medium text-foreground">Blockchain Secured</span>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full scale-150" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;