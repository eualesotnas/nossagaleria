import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StarIcon } from "@/components/ui/star-icon";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gallery-bg">
      <div className="text-center space-y-8">
        <StarIcon />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Bem-vindo à Nossa Galeria</h1>
          <p className="text-xl text-muted-foreground">
            Explore momentos especiais através de nossas imagens
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate("/login")}
            className="bg-gradient-primary hover:shadow-glow transition-smooth px-8 py-3"
          >
            Fazer Login
          </Button>
          
          <Button
            variant="outline"
            onClick={() => navigate("/galeria")}
            className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
          >
            Ver Galeria
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
