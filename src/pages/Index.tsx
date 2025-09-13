import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import UploadSection from "@/components/UploadSection";
import FeaturesSection from "@/components/FeaturesSection";
import VerificationResults from "@/components/VerificationResults";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <UploadSection />
        <FeaturesSection />
        <VerificationResults />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-primary">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold text-foreground">Certifyer</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Professional certificate verification powered by AI and blockchain technology.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Product</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground transition-colors">Features</a>
                <a href="#" className="block hover:text-foreground transition-colors">Pricing</a>
                <a href="#" className="block hover:text-foreground transition-colors">Enterprise</a>
                <a href="#" className="block hover:text-foreground transition-colors">API</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground transition-colors">About</a>
                <a href="#" className="block hover:text-foreground transition-colors">Blog</a>
                <a href="#" className="block hover:text-foreground transition-colors">Careers</a>
                <a href="#" className="block hover:text-foreground transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground transition-colors">Documentation</a>
                <a href="#" className="block hover:text-foreground transition-colors">Help Center</a>
                <a href="#" className="block hover:text-foreground transition-colors">Security</a>
                <a href="#" className="block hover:text-foreground transition-colors">Status</a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Certifyer. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
