import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertTriangle, Download, Share, Clock } from "lucide-react";

interface VerificationResultsProps {
  isVerified?: boolean;
  confidence?: number;
  fileName?: string;
  uploadTime?: string;
}

const VerificationResults = ({ 
  isVerified = true, 
  confidence = 98.5, 
  fileName = "degree_certificate.pdf",
  uploadTime = "2 minutes ago" 
}: VerificationResultsProps) => {
  const getStatusIcon = () => {
    if (confidence >= 95) return <CheckCircle className="h-6 w-6 text-success" />;
    if (confidence >= 80) return <AlertTriangle className="h-6 w-6 text-warning" />;
    return <XCircle className="h-6 w-6 text-destructive" />;
  };

  const getStatusColor = () => {
    if (confidence >= 95) return "success";
    if (confidence >= 80) return "warning";
    return "destructive";
  };

  const getStatusText = () => {
    if (confidence >= 95) return "Verified Authentic";
    if (confidence >= 80) return "Requires Review";
    return "Potentially Fraudulent";
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Verification Complete
            </h2>
            <p className="text-lg text-muted-foreground">
              Your certificate has been analyzed using advanced AI and blockchain verification
            </p>
          </div>

          {/* Main Result Card */}
          <Card className="p-8 mb-8 shadow-card border-2" style={{
            borderColor: confidence >= 95 ? 'hsl(var(--success))' : 
                        confidence >= 80 ? 'hsl(var(--warning))' : 'hsl(var(--destructive))'
          }}>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                {getStatusIcon()}
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{getStatusText()}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <Badge variant={getStatusColor() as any} className="text-sm">
                      {confidence}% Confidence
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {uploadTime}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                  Download Report
                </Button>
                <Button variant="hero" size="sm">
                  <Share className="h-4 w-4" />
                  Share Results
                </Button>
              </div>
            </div>
          </Card>

          {/* Detailed Analysis */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Document Details */}
            <Card className="p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-foreground mb-4">Document Details</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">File Name:</span>
                  <span className="font-medium text-foreground">{fileName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">File Type:</span>
                  <span className="font-medium text-foreground">PDF Document</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">File Size:</span>
                  <span className="font-medium text-foreground">2.4 MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Upload Time:</span>
                  <span className="font-medium text-foreground">{uploadTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Blockchain Hash:</span>
                  <span className="font-mono text-sm text-foreground">0x4f3c...89a2</span>
                </div>
              </div>
            </Card>

            {/* Analysis Results */}
            <Card className="p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-foreground mb-4">Analysis Results</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Digital Signature</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-success font-medium">Valid</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Tamper Detection</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-success font-medium">No Issues</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Institution Verification</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-success font-medium">Verified</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Blockchain Status</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-success font-medium">Recorded</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Confidence Meter */}
          <Card className="p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-foreground mb-4">Confidence Score</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Overall Authenticity</span>
                <span className="text-xl font-bold text-foreground">{confidence}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="h-3 rounded-full transition-all duration-1000"
                  style={{
                    width: `${confidence}%`,
                    background: confidence >= 95 ? 'hsl(var(--success))' : 
                               confidence >= 80 ? 'hsl(var(--warning))' : 'hsl(var(--destructive))'
                  }}
                />
              </div>
              <div className="grid grid-cols-3 text-xs text-muted-foreground">
                <span>Low Risk</span>
                <span className="text-center">Medium Risk</span>
                <span className="text-right">High Risk</span>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Button variant="outline" size="lg">
              Verify Another Document
            </Button>
            <Button variant="hero" size="lg">
              Get Premium Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationResults;