import { brands } from "@/data/products";

const BrandShowcase = () => {
  return (
    <section className="py-16 bg-secondary/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center font-heading text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Shop by Brand
        </h2>
      </div>
      
      {/* Infinite scroll animation */}
      <div className="relative">
        <div className="flex animate-[shimmer_30s_linear_infinite] gap-16 items-center">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <a
              key={`${brand.id}-${index}`}
              href="#"
              className="group flex-shrink-0 flex flex-col items-center gap-3 px-8 py-4 hover:opacity-100 opacity-60 transition-all duration-300"
            >
              <span className="text-4xl md:text-5xl font-display tracking-wider text-foreground group-hover:text-primary transition-colors">
                {brand.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
