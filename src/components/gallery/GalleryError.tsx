import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface GalleryErrorProps {
  message: string;
  onRetry: () => void;
}

export const GalleryError = ({ message, onRetry }: GalleryErrorProps) => {
  return (
    <div className="min-h-screen bg-gallery-bg flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-gallery-card border-border text-center">
        <div className="flex justify-center mb-6">
          <div className="p-3 rounded-full bg-destructive/10">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-foreground mb-2">
          Ops! Algo deu errado
        </h2>
        
        <p className="text-muted-foreground mb-6">
          {message}
        </p>
        
        <Button
          onClick={onRetry}
          className="bg-gradient-primary hover:shadow-glow transition-smooth"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Tentar Novamente
        </Button>
      </Card>
    </div>
  );
};