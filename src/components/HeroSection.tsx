import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { ambassadors } from "@/data/products";
import heroImage1 from "@/assets/hero-ambassador-1.jpg";
import heroImage2 from "@/assets/hero-ambassador-2.jpg";

const heroSlides = [
  {
    image: heroImage1,
    ambassador: ambassadors[0],
    tagline: "DOMINATE THE COURT",
    subtitle: "New Season Collection",
    cta: "Shop Basketball"
  },
  {
    image: heroImage2,
    ambassador: ambassadors[1],
    tagline: "RUN FASTER",
    subtitle: "Performance Running 2024",
    cta: "Shop Running"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          key={currentSlide}
          src={slide.image}
          alt={slide.ambassador.name}
          className="w-full h-full object-cover object-center animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl animate-slide-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-body text-sm uppercase tracking-wider text-primary">
              {slide.subtitle}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-none mb-6">
            {slide.tagline.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "text-gradient" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>

          {/* Ambassador Quote */}
          <div className="mb-8 pl-4 border-l-2 border-primary">
            <p className="font-body text-lg text-muted-foreground italic mb-2">
              "{slide.ambassador.quote}"
            </p>
            <p className="font-heading text-sm uppercase tracking-wider">
              — {slide.ambassador.name}, <span className="text-primary">{slide.ambassador.title}</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl">
              {slide.cta}
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Lookbook
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-primary" : "bg-foreground/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">
          Scroll to explore
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
