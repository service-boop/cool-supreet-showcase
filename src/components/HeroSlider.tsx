import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    title: "Expert HVAC Solutions",
    subtitle: "Commercial & Residential Air Conditioning",
  },
  {
    image: heroSlide2,
    title: "Innovative Cooling Systems",
    subtitle: "Energy-Efficient & Reliable Installations",
  },
  {
    image: heroSlide3,
    title: "Professional Service",
    subtitle: "Trusted by Leading Businesses Across India",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    // <div className="relative h-[600px] md:h-[700px] overflow-hidden">
    <div className="relative h-[80vh] md:h-[90vh] overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          /> */}
          {/* <div
  className="
    absolute inset-0
    bg-center
    bg-no-repeat
    bg-contain
    sm:bg-cover
  "
  style={{ backgroundImage: `url(${slide.image})` }}
/> */}
 <div
  className="
    absolute inset-0
    bg-cover
    bg-top
    md:bg-center
  "
  style={{ backgroundImage: `url(${slide.image})` }}
/>

          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
          
          {/* <div className="relative container mx-auto px-4 h-full flex items-center justify-center"> */}
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center pt-12 md:pt-0">

            <div className="max-w-3xl text-background text-center">

              {/* Company Name */}
              {/* <h1
                className="text-6xl md:text-6xl font-bold mb-3 animate-fade-in 
                 bg-gradient-to-r from-red-700 via-orange-500 to-orange-400 
                 bg-clip-text text-transparent leading-tight pb-2"
              >
                Supreet Cooling Solutions
              </h1> */}
             
             <h1
  className="text-4xl md:text-6xl font-bold mb-3 animate-fade-in 
   bg-gradient-to-r from-red-700 via-orange-500 to-orange-400 
   bg-clip-text text-transparent leading-tight pb-2"
>
  Supreet Cooling Solutions
</h1>

              {/* UPDATED SLIDE TITLE SIZE */}
              {/* <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in"> */}
              <h1 className="text-2xl md:text-4xl font-bold mb-3 animate-fade-in">

                {slide.title}
              </h1>

              {/* <p className="text-xl md:text-2xl mb-8 text-background/90"> */}
              <p className="text-base md:text-2xl mb-6 text-background/90">

                {slide.subtitle}
              </p>

              <div className="flex gap-4 justify-center">
                {/* Future button section */}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/30 text-background p-2 rounded-full transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/30 text-background p-2 rounded-full transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-background w-8"
                : "bg-background/50 hover:bg-background/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
