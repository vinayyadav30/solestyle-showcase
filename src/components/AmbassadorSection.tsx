import { Button } from "@/components/ui/button";
import { ambassadors } from "@/data/products";
import heroImage1 from "@/assets/hero-ambassador-1.jpg";
import heroImage2 from "@/assets/hero-ambassador-2.jpg";

const ambassadorImages = [heroImage1, heroImage2];

const AmbassadorSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-2 block">
            Athletes
          </span>
          <h2 className="font-display text-5xl md:text-6xl mb-4">
            BRAND <span className="text-gradient">AMBASSADORS</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            World-class athletes trust our footwear to perform at the highest level.
          </p>
        </div>

        {/* Ambassador Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ambassadors.map((ambassador, index) => (
            <div
              key={ambassador.id}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-glow transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={ambassadorImages[index] || heroImage1}
                  alt={ambassador.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-20 z-10">
                {/* Brand Badge */}
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-heading uppercase tracking-wider rounded-full mb-3">
                  {ambassador.brand}
                </span>

                {/* Name & Title */}
                <h3 className="font-display text-3xl mb-1">{ambassador.name}</h3>
                <p className="font-heading text-sm uppercase tracking-wider text-primary mb-4">
                  {ambassador.title}
                </p>

                {/* Stats */}
                <div className="px-4 py-3 bg-muted rounded-lg mb-4">
                  <p className="font-body text-sm text-center text-muted-foreground">
                    <span className="font-heading text-foreground">{ambassador.stats}</span>
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="font-body text-sm italic text-muted-foreground border-l-2 border-primary pl-4 mb-4">
                  "{ambassador.quote}"
                </blockquote>

                {/* CTA */}
                <Button variant="outline" className="w-full font-heading uppercase tracking-wider">
                  Shop {ambassador.name.split(" ")[0]}'s Collection
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmbassadorSection;
