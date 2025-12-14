export type CategorySlug = "zero-waste" | "eco-gadgets" | "grow-green" | "upcycling" | "gifts";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  descriptionShort?: string;
  descriptionLong?: string;
  price: number;
  category: CategorySlug;
  tags: string[];
  badges: string[];
  image: string;
  images?: string[];
  sustainabilityInfo: string;
  inStock: boolean;
  isHeroProduct: boolean;
  isBestseller: boolean;
  details?: string;
  materials?: string[];
  benefits?: string[];
  highlights?: string[];
  usage?: string;
  crossSelling?: string[];
}

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}



