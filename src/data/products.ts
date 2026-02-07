import shoe1 from "@/assets/shoe-1.jpg";
import shoe2 from "@/assets/shoe-2.jpg";
import shoe3 from "@/assets/shoe-3.jpg";
import shoe4 from "@/assets/shoe-4.jpg";
import shoe5 from "@/assets/shoe-5.jpg";
import shoe6 from "@/assets/shoe-6.jpg";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sizes: number[];
  inStock: boolean;
  stockCount: number;
  ambassador?: string;
  featured?: boolean;
  new?: boolean;
  description: string;
}

export const brands = [
  { id: "nike", name: "NIKE", logo: "✓" },
  { id: "adidas", name: "ADIDAS", logo: "⫿⫿⫿" },
  { id: "jordan", name: "JORDAN", logo: "⚡" },
  { id: "puma", name: "PUMA", logo: "🐆" },
  { id: "newbalance", name: "NEW BALANCE", logo: "NB" },
  { id: "reebok", name: "REEBOK", logo: "△" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Air Max Fusion X",
    brand: "NIKE",
    price: 15769,
    originalPrice: 19089,
    image: shoe1,
    category: "Basketball",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 24,
    ambassador: "Marcus Thompson",
    featured: true,
    new: true,
    description: "Engineered for explosive performance on the court with revolutionary Air Max cushioning."
  },
  {
    id: "2",
    name: "UltraBoost Velocity",
    brand: "ADIDAS",
    price: 14939,
    image: shoe2,
    category: "Running",
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true,
    stockCount: 18,
    ambassador: "Elena Rodriguez",
    featured: true,
    description: "Premium Boost technology delivers incredible energy return for your fastest runs."
  },
  {
    id: "3",
    name: "Classic Court Pro",
    brand: "NEW BALANCE",
    price: 10789,
    image: shoe3,
    category: "Lifestyle",
    sizes: [7, 8, 9, 10, 11, 12, 13],
    inStock: true,
    stockCount: 42,
    description: "Timeless design meets modern comfort. The perfect everyday sneaker."
  },
  {
    id: "4",
    name: "Flight Elite Gold",
    brand: "JORDAN",
    price: 20749,
    originalPrice: 24899,
    image: shoe4,
    category: "Basketball",
    sizes: [8, 9, 10, 11, 12],
    inStock: true,
    stockCount: 8,
    ambassador: "Derek Williams",
    featured: true,
    new: true,
    description: "Limited edition metallic finish. Dominate the court with legendary Jordan performance."
  },
  {
    id: "5",
    name: "RS-X Retro",
    brand: "PUMA",
    price: 9959,
    image: shoe5,
    category: "Lifestyle",
    sizes: [6, 7, 8, 9, 10, 11],
    inStock: true,
    stockCount: 31,
    description: "Classic retro design with bold color blocking and comfortable cushioning."
  },
  {
    id: "6",
    name: "Air Force Elite",
    brand: "NIKE",
    price: 13279,
    image: shoe6,
    category: "Basketball",
    sizes: [7, 8, 9, 10, 11, 12],
    inStock: false,
    stockCount: 0,
    description: "Iconic silhouette reimagined with premium materials and enhanced cushioning."
  },
  {
    id: "7",
    name: "Forum Bold",
    brand: "ADIDAS",
    price: 11619,
    image: shoe3,
    category: "Basketball",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10],
    inStock: true,
    stockCount: 15,
    new: true,
    description: "Heritage basketball style with modern comfort technology."
  },
  {
    id: "8",
    name: "Retro Future 2",
    brand: "JORDAN",
    price: 18259,
    image: shoe4,
    category: "Basketball",
    sizes: [8, 9, 10, 11],
    inStock: true,
    stockCount: 5,
    featured: true,
    description: "Next-generation performance meets classic Jordan aesthetics."
  }
];

export const ambassadors = [
  {
    id: "1",
    name: "Marcus Thompson",
    title: "Pro Basketball MVP",
    brand: "NIKE",
    quote: "These shoes took my game to the next level. Unmatched grip and comfort.",
    stats: "32 PPG | 8 APG | 5 RPG"
  },
  {
    id: "2",
    name: "Elena Rodriguez",
    title: "Olympic Marathon Champion",
    brand: "ADIDAS",
    quote: "Every stride feels effortless. The energy return is incredible.",
    stats: "2:19:43 Marathon PR"
  },
  {
    id: "3",
    name: "Derek Williams",
    title: "Slam Dunk Champion",
    brand: "JORDAN",
    quote: "When I lace up, I feel unstoppable. These are built for flight.",
    stats: "28 PPG | League MVP"
  }
];
