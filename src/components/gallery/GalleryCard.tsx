import { useState } from "react";
import { Card } from "@/components/ui/card";

interface GalleryCardProps {
  image: {
    id: string;
    url: string;
    title: string;
    category: string;
  };
  onClick: () => void;
}

export const GalleryCard = ({ image, onClick }: GalleryCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Card 
      className="group cursor-pointer bg-gallery-card  hover:shadow-elegant transition-smooth hover:scale-[1.02]" //border-border overflow-hidden 
      onClick={onClick}
    ><div className="polaroid">
      <div className="aspect-square relative overflow-hidden">
        {!imageError ? (
          <>
            {!imageLoaded && (
              
              <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 border- border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <img
              src={image.url}
              alt={image.title}
              className={`w-full h-full object-cover transition-smooth group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              loading="lazy"
            />
          </>
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Erro ao carregar</p>
          </div>
        )}
        </div>
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-smooth" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          {/* <p className="text-foreground font-medium opacity-0 group-hover:opacity-100 transition-smooth transform translate-y-2 group-hover:translate-y-0">
            Nossa Galeria
          </p> */}
        </div>
      </div>
    </Card>
  );
};