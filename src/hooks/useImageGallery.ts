import { useState, useEffect } from 'react';

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

// Hook para gerenciar o estado da galeria e carregamento de imagens
export const useImageGallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulação de carregamento de dados - substitua pela sua API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        
        // Simular delay de API
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - substitua por sua implementação real
        const mockData: GalleryImage[] = [
          { id: "1", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", title: "Paisagem do Parque", category: "Dia de parque" },
          { id: "2", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", title: "Ondas na Praia", category: "Dia de praia" },
          { id: "3", url: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?w=800", title: "Vista da Montanha", category: "Dia de parque" },
          { id: "4", url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800", title: "Areia e Mar", category: "Dia de praia" },
          { id: "5", url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800", title: "Sessão Cinema", category: "Dia cinema" },
          { id: "6", url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800", title: "Encontro de Amigos", category: "Dia com amigos" },
          { id: "7", url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800", title: "Aventura de Viagem", category: "Dia de viagem" },
          { id: "8", url: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800", title: "Momento em Família", category: "Dia dos pais" },
          { id: "9", url: "https://images.unsplash.com/photo-1542856204-00d60be4b63d?w=800", title: "Festa Junina", category: "Dia de quadrilha" },
          { id: "10", url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800", title: "Por do Sol na Praia", category: "Dia de praia" },
          { id: "11", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800", title: "Trilha no Parque", category: "Dia de parque" },
          { id: "12", url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", title: "Destino Incrível", category: "Dia de viagem" },
          { id: "13", url: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800", title: "Pipoca no Cinema", category: "Dia cinema" },
          { id: "14", url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800", title: "Risadas com Amigos", category: "Dia com amigos" },
          { id: "15", url: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=800", title: "Abraço de Pai", category: "Dia dos pais" },
        ];
        
        setImages(mockData);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar as imagens');
        console.error('Erro no carregamento:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const getImagesByCategory = () => {
    return images.reduce((acc, image) => {
      if (!acc[image.category]) {
        acc[image.category] = [];
      }
      acc[image.category].push(image);
      return acc;
    }, {} as Record<string, GalleryImage[]>);
  };

  const getCategories = () => {
    return Object.keys(getImagesByCategory());
  };

  return {
    images,
    loading,
    error,
    getImagesByCategory,
    getCategories
  };
};