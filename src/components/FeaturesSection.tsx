import { Card } from "@/components/ui/card";
import { Shield, Zap, Lock, Users, BarChart3, Globe } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "AI-Powered Detection",
      description: "Advanced machine learning algorithms detect even the most sophisticated document tampering and forgery attempts.",
      color: "text-primary"
    },
    {
      icon: Lock,
      title: "Blockchain Security",
      description: "Immutable verification records stored on blockchain ensure tamper-proof authenticity validation.",
      color: "text-success"
    },
    {
      icon: Zap,
      title: "Instant Verification",
      description: "Get comprehensive verification results in seconds, not days. Real-time processing for immediate decisions.",
      color: "text-warning"
    },
    {
      icon: Users,
      title: "Multi-Stakeholder Support",
      description: "Built for students, employers, institutions, and government agencies with role-based access controls.",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detailed insights and reports help you understand verification trends and detect fraud patterns.",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Global Compatibility",
      description: "Support for certificates from institutions worldwide with multi-language OCR and validation.",
      color: "text-success"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Enterprise Features</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Secure Verification</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional-grade tools and features designed for organizations that demand the highest 
            levels of security and accuracy in document verification.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors duration-300">
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <Card className="p-8 lg:p-12 bg-gradient-card border border-border/50 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  Accuracy Rate
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  &lt;2s
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  Verification Time
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  Documents Verified
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  Enterprise Clients
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;