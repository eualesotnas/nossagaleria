import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { StarIcon } from "@/components/ui/star-icon";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [endereco, setEndereco] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!endereco || !senha) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Simulando login simples
    toast({
      title: "Login realizado!",
      description: "Bem-vindo à Nossa Galeria"
    });
    
    navigate("/galeria");
  };

  return (
    <div className="min-h-screen bg-gallery-bg flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-gallery-card border-border shadow-elegant">
        <StarIcon />
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">Nossa Galeria</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-gradient-primary hover:shadow-glow transition-smooth"
          >
            Nossa Galeria
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;