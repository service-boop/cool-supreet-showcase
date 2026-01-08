import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  children?: ReactNode;
}

const HeroSection = ({ title, subtitle, backgroundImage, children }: HeroSectionProps) => {
  return (
    <section 
      className="relative h-[400px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/60" />
      
      <div className="relative z-10 text-center text-background px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-background/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
