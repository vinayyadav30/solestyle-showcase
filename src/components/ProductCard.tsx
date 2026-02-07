import { useState } from "react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Eye, Check, X } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className="group relative bg-card rounded-xl overflow-hidden shadow-card transition-all duration-500 hover:shadow-glow hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.new && (
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-heading uppercase tracking-wider rounded-full">
            New
          </span>
        )}
        {discountPercentage > 0 && (
          <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-heading uppercase tracking-wider rounded-full">
            -{discountPercentage}%
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
      >
        <Heart
          className={`w-5 h-5 transition-colors ${
            isLiked ? "fill-destructive text-destructive" : "text-foreground"
          }`}
        />
      </button>

      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-muted to-background p-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-contain transition-all duration-500 ${
            isHovered ? "scale-110 rotate-[-5deg]" : "scale-100"
          }`}
        />

        {/* Quick Actions Overlay */}
        <div
          className={`absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center gap-3 transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Button variant="hero" size="lg" className="gap-2">
            <Eye className="w-4 h-4" />
            Quick View
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Brand */}
        <p className="font-heading text-xs uppercase tracking-widest text-primary mb-1">
          {product.brand}
        </p>

        {/* Name */}
        <h3 className="font-heading text-lg uppercase tracking-wide text-foreground mb-2 line-clamp-1">
          {product.name}
        </h3>

        {/* Category */}
        <p className="font-body text-sm text-muted-foreground mb-3">
          {product.category}
        </p>

        {/* Sizes */}
        <div className="mb-4">
          <p className="font-body text-xs text-muted-foreground mb-2">Available Sizes:</p>
          <div className="flex flex-wrap gap-1">
            {product.sizes.slice(0, 6).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-8 h-8 text-xs font-heading rounded transition-all ${
                  selectedSize === size
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-accent"
                }`}
              >
                {size}
              </button>
            ))}
            {product.sizes.length > 6 && (
              <span className="w-8 h-8 text-xs font-body flex items-center justify-center text-muted-foreground">
                +{product.sizes.length - 6}
              </span>
            )}
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2 mb-4">
          {product.inStock ? (
            <>
              <Check className="w-4 h-4 text-primary" />
              <span className="font-body text-sm text-primary">
                In Stock ({product.stockCount} left)
              </span>
            </>
          ) : (
            <>
              <X className="w-4 h-4 text-destructive" />
              <span className="font-body text-sm text-destructive">Out of Stock</span>
            </>
          )}
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl text-foreground">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="font-body text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <Button
            variant="default"
            size="icon"
            disabled={!product.inStock}
            className="rounded-full"
          >
            <ShoppingBag className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
