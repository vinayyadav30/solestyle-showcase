import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { products as staticProducts, brands as staticBrands, ambassadors as staticAmbassadors, Product } from "@/data/products";

export interface DbProduct {
  id: string;
  name: string;
  brand: string;
  price: number;
  original_price: number | null;
  image_url: string;
  category: string;
  sizes: number[];
  in_stock: boolean;
  stock_count: number;
  ambassador: string | null;
  featured: boolean;
  is_new: boolean;
  description: string;
}

export interface DbBrand {
  id: string;
  slug: string;
  name: string;
  logo: string;
}

export interface DbAmbassador {
  id: string;
  name: string;
  title: string;
  brand: string;
  quote: string;
  stats: string;
}

// Map DB product to frontend Product type, using static images as fallback
import shoe1 from "@/assets/shoe-1.jpg";
import shoe2 from "@/assets/shoe-2.jpg";
import shoe3 from "@/assets/shoe-3.jpg";
import shoe4 from "@/assets/shoe-4.jpg";
import shoe5 from "@/assets/shoe-5.jpg";
import shoe6 from "@/assets/shoe-6.jpg";

const imageMap: Record<string, string> = {
  "/shoe-1.jpg": shoe1,
  "/shoe-2.jpg": shoe2,
  "/shoe-3.jpg": shoe3,
  "/shoe-4.jpg": shoe4,
  "/shoe-5.jpg": shoe5,
  "/shoe-6.jpg": shoe6,
};

const mapDbProduct = (p: DbProduct): Product => ({
  id: p.id,
  name: p.name,
  brand: p.brand,
  price: p.price,
  originalPrice: p.original_price ?? undefined,
  image: imageMap[p.image_url] || shoe1,
  category: p.category,
  sizes: p.sizes,
  inStock: p.in_stock,
  stockCount: p.stock_count,
  ambassador: p.ambassador ?? undefined,
  featured: p.featured,
  new: p.is_new,
  description: p.description,
});

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*");
      if (error || !data || data.length === 0) {
        console.log("Using static products fallback");
        return staticProducts;
      }
      return (data as unknown as DbProduct[]).map(mapDbProduct);
    },
  });
};

export const useBrands = () => {
  return useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("brands")
        .select("*");
      if (error || !data || data.length === 0) {
        return staticBrands;
      }
      return data as unknown as DbBrand[];
    },
  });
};

export const useAmbassadors = () => {
  return useQuery({
    queryKey: ["ambassadors"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("ambassadors")
        .select("*");
      if (error || !data || data.length === 0) {
        return staticAmbassadors;
      }
      return data as unknown as DbAmbassador[];
    },
  });
};
