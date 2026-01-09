import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cinematic-black/50 via-transparent to-background/90" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-30" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
      }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 
            className="text-glitch font-black mb-6 bg-gradient-to-r from-white via-cinematic-red-glow to-white bg-clip-text text-transparent"
            data-text="THAMIZH ANBAN"
          >
            THAMIZH ANBAN
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cinematic-red to-transparent mx-auto mb-8 animate-glow" />
          <p className="text-xl md:text-2xl lg:text-3xl text-cinematic-gray-light mb-4 font-light tracking-wide">
            FULL STACK DEVELOPER
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that merge cutting-edge technology with compelling storytelling
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              className="btn-hero text-lg px-8 py-4"
              onClick={scrollToAbout}
            >
              EXPLORE MY WORK
            </Button>
            <Button 
              variant="outline" 
              className="border-cinematic-red text-cinematic-red hover:bg-cinematic-red hover:text-white transition-[var(--transition-cinematic)] px-8 py-4"
            >
              DOWNLOAD CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="h-8 w-8 text-cinematic-red cursor-pointer hover:text-cinematic-red-glow transition-colors" 
          onClick={scrollToAbout}
        />
      </div>

      {/* Angular Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cinematic-red/10 to-transparent section-angular opacity-20" />
    </section>
  );
};

export default Hero;