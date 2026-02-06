import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandShowcase from "@/components/BrandShowcase";
import ProductGrid from "@/components/ProductGrid";
import AmbassadorSection from "@/components/AmbassadorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BrandShowcase />
        <ProductGrid />
        <AmbassadorSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
