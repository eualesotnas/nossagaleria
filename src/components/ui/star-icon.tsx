import starLogo from "@/assets/star-logo.png";

export const StarIcon = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="p-4 rounded-full bg-gallery-star/10 border border-gallery-star/20">
        <img 
          src={starLogo} 
          alt="Nossa Galeria - Logo Estrela" 
          className="w-8 h-8"
        />
      </div>
    </div>
  );
};