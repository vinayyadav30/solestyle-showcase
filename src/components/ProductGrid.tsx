import { useState } from "react";
import { useProducts, useBrands } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown, Grid3X3, LayoutGrid, Loader2 } from "lucide-react";

const ProductGrid = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);
  const [gridSize, setGridSize] = useState<"compact" | "large">("large");

  const { data: products = [], isLoading: productsLoading } = useProducts();
  const { data: brands = [] } = useBrands();

  const categories = ["all", "Basketball", "Running", "Lifestyle"];

  const filteredProducts = products.filter((product) => {
    const brandMatch = selectedBrand === "all" || product.brand === selectedBrand;
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    return brandMatch && categoryMatch;
  });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-2 block">
            Collection
          </span>
          <h2 className="font-display text-5xl md:text-6xl mb-4">
            FEATURED <span className="text-gradient">KICKS</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of premium footwear from the world's leading brands.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2 font-heading uppercase tracking-wide"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </Button>

            <div className="hidden md:flex items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 font-heading text-sm uppercase tracking-wider rounded-full transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-body text-sm text-muted-foreground">
              {filteredProducts.length} Products
            </span>
            <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
              <button
                onClick={() => setGridSize("large")}
                className={`p-2 rounded ${gridSize === "large" ? "bg-background" : ""}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridSize("compact")}
                className={`p-2 rounded ${gridSize === "compact" ? "bg-background" : ""}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="mb-8 p-6 bg-card rounded-xl animate-fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <button
                onClick={() => setSelectedBrand("all")}
                className={`p-4 rounded-lg font-heading text-sm uppercase tracking-wider transition-all border ${
                  selectedBrand === "all"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:border-primary"
                }`}
              >
                All Brands
              </button>
              {brands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => setSelectedBrand(brand.name)}
                  className={`p-4 rounded-lg font-heading text-sm uppercase tracking-wider transition-all border ${
                    selectedBrand === brand.name
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-primary"
                  }`}
                >
                  {brand.name}
                </button>
              ))}
            </div>

            <div className="md:hidden mt-4 pt-4 border-t border-border">
              <p className="font-body text-sm text-muted-foreground mb-3">Categories</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 font-heading text-sm uppercase tracking-wider rounded-full transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        {productsLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <div
            className={`grid gap-6 ${
              gridSize === "large"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            }`}
          >
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="xl">
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
