import { useState } from "react";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  const navLinks = ["New Releases", "Men", "Women", "Kids", "Sale"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Promo Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4">
        <p className="text-sm font-body tracking-wide">
          FREE SHIPPING ON ORDERS OVER $150 | <span className="font-semibold">SHOP NOW →</span>
        </p>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-3xl font-display tracking-wider text-gradient">
              SOLESCAPE
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-heading text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-secondary rounded-full hover:bg-muted transition-colors">
              <Search className="w-4 h-4" />
              <span className="font-body text-sm text-muted-foreground">Search</span>
            </button>

            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-heading text-lg uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
              <div className="flex items-center gap-2 mt-4 px-4 py-3 bg-secondary rounded-full">
                <Search className="w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent text-sm flex-1 outline-none font-body"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
