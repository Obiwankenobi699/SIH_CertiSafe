import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileText, Camera, Scan, Shield, Clock } from "lucide-react";
import { useState } from "react";

const UploadSection = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    // Handle file drop logic here
    setIsUploading(true);
    setTimeout(() => setIsUploading(false), 2000);
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Upload & Verify Your Certificate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simply upload your document or scan with your camera. Our AI will analyze it in real-time and provide instant verification results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Area */}
            <Card className="p-8 border-2 border-dashed border-border hover:border-primary/50 transition-all duration-300">
              <div
                className={`space-y-6 text-center transition-all duration-300 ${
                  isDragOver ? 'scale-105' : ''
                } ${isUploading ? 'opacity-50' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="flex justify-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary shadow-glow">
                    {isUploading ? (
                      <Clock className="h-8 w-8 text-white animate-spin" />
                    ) : (
                      <Upload className="h-8 w-8 text-white" />
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {isUploading ? 'Processing...' : 'Drop your certificate here'}
                  </h3>
                  <p className="text-muted-foreground">
                    {isUploading ? 'Analyzing document with AI' : 'or click to browse files'}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Button variant="hero" size="lg" disabled={isUploading}>
                    <FileText className="h-5 w-5" />
                    Choose File
                  </Button>
                  <Button variant="outline" size="lg" disabled={isUploading}>
                    <Camera className="h-5 w-5" />
                    Use Camera
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground space-y-1">
                  <p>Supports: PDF, JPG, PNG, DOCX (Max 10MB)</p>
                  <p>🔒 Your files are encrypted and secure</p>
                </div>
              </div>
            </Card>

            {/* Verification Process */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">How It Works</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border shadow-sm">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 flex-shrink-0">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Upload Document</h4>
                    <p className="text-sm text-muted-foreground">Drag and drop or select your certificate file</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border shadow-sm">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 flex-shrink-0">
                    <Scan className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">AI Analysis</h4>
                    <p className="text-sm text-muted-foreground">Our ML engine scans for tampering and authenticity markers</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border shadow-sm">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-success/10 flex-shrink-0">
                    <Shield className="h-4 w-4 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Blockchain Verification</h4>
                    <p className="text-sm text-muted-foreground">Results are recorded on immutable blockchain ledger</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border shadow-sm">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 flex-shrink-0">
                    <span className="text-sm font-bold text-accent">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Instant Results</h4>
                    <p className="text-sm text-muted-foreground">Get detailed verification report in seconds</p>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-gradient-card border border-success/20">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-success" />
                  <span className="font-semibold text-success">Security Guarantee</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  All uploads are encrypted with AES-256 and processed in secure environments. 
                  Documents are automatically deleted after verification.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;