export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
  onSale?: boolean;
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const categories: Category[] = [
  {
    id: "clothing",
    title: "Clothing",
    description: "Timeless pieces for every occasion",
    image: "/assets/images/categories/clothings.webp",
    link: "/category/clothing"
  },
  {
    id: "accessories",
    title: "Accessories",
    description: "Complete your look with luxury details",
    image: "/assets/images/categories/accessories.webp",
    link: "/category/accessories"
  },
  {
    id: "beauty",
    title: "Beauty",
    description: "Enhance your natural radiance",
    image: "/assets/images/categories/beauty.webp",
    link: "/category/beauty"
  },
  {
    id: "skincare",
    title: "Skincare",
    description: "Nourish your skin naturally",
    image: "/assets/images/categories/skincare.webp",
    link: "/category/skincare"
  },
  {
    id: "gadgets",
    title: "Gadgets",
    description: "Tech accessories for modern women",
    image: "/assets/images/categories/gadgets.webp",
    link: "/category/gadgets"
  }
];

export const products: Product[] = [
  // Clothing
  {
    id: "dress-001",
    name: "Elegant Silk Midi Dress",
    price: 189,
    originalPrice: 239,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=500&q=80",
    description: "A timeless silk midi dress perfect for any occasion",
    inStock: true,
    featured: true,
    onSale: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: "blouse-001",
    name: "Classic White Blouse",
    price: 89,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=500&q=80",
    description: "Essential white blouse for professional wardrobe",
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: "jacket-001",
    name: "Tailored Blazer",
    price: 159,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=500&q=80",
    description: "Sophisticated blazer for business and casual wear",
    inStock: true,
    rating: 4.7,
    reviews: 67
  },

  // Accessories
  {
    id: "bag-001",
    name: "Leather Handbag",
    price: 249,
    originalPrice: 299,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=500&q=80",
    description: "Premium leather handbag with elegant design",
    inStock: true,
    featured: true,
    onSale: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: "watch-001",
    name: "Minimalist Watch",
    price: 129,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=500&q=80",
    description: "Elegant minimalist watch with leather strap",
    inStock: true,
    rating: 4.5,
    reviews: 78
  },
  {
    id: "jewelry-001",
    name: "Gold Statement Necklace",
    price: 79,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=500&q=80",
    description: "Bold gold necklace to elevate any outfit",
    inStock: true,
    rating: 4.4,
    reviews: 92
  },

  // Beauty
  {
    id: "lipstick-001",
    name: "Velvet Matte Lipstick",
    price: 28,
    category: "beauty",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=500&q=80",
    description: "Long-lasting velvet matte finish lipstick",
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 234
  },
  {
    id: "foundation-001",
    name: "Luminous Foundation",
    price: 45,
    category: "beauty",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=500&q=80",
    description: "Full coverage foundation with natural finish",
    inStock: true,
    rating: 4.7,
    reviews: 189
  },
  {
    id: "palette-001",
    name: "Eyeshadow Palette",
    price: 52,
    originalPrice: 65,
    category: "beauty",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=500&q=80",
    description: "12-shade eyeshadow palette with versatile colors",
    inStock: true,
    onSale: true,
    rating: 4.8,
    reviews: 167
  },

  // Skincare
  {
    id: "serum-001",
    name: "Vitamin C Serum",
    price: 65,
    category: "skincare",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    description: "Brightening vitamin C serum for radiant skin",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 298
  },
  {
    id: "moisturizer-001",
    name: "Hydrating Night Cream",
    price: 48,
    category: "skincare",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    description: "Rich night cream for deep hydration",
    inStock: true,
    rating: 4.6,
    reviews: 145
  },
  {
    id: "cleanser-001",
    name: "Gentle Foam Cleanser",
    price: 32,
    category: "skincare",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    description: "Gentle daily cleanser for all skin types",
    inStock: true,
    rating: 4.5,
    reviews: 178
  },

  // Body Care
  {
    id: "bodywash-001",
    name: "Luxury Body Wash",
    price: 24,
    category: "bodywash",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=80",
    description: "Nourishing body wash with essential oils",
    inStock: true,
    rating: 4.4,
    reviews: 112
  },
  {
    id: "lotion-001",
    name: "Body Lotion",
    price: 28,
    category: "bodywash",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=80",
    description: "Silky smooth body lotion with lasting fragrance",
    inStock: true,
    rating: 4.6,
    reviews: 98
  },

  // Gadgets
  {
    id: "phone-case-001",
    name: "Designer Phone Case",
    price: 35,
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&q=80",
    description: "Stylish protective case with elegant design",
    inStock: true,
    rating: 4.3,
    reviews: 67
  },
  {
    id: "wireless-charger-001",
    name: "Wireless Charging Pad",
    price: 45,
    originalPrice: 55,
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&q=80",
    description: "Fast wireless charging with sleek design",
    inStock: true,
    onSale: true,
    rating: 4.5,
    reviews: 89
  }
];

export const getFeaturedProducts = () => products.filter(product => product.featured);
export const getSaleProducts = () => products.filter(product => product.onSale);
export const getProductsByCategory = (categoryId: string) => 
  products.filter(product => product.category === categoryId);
export const searchProducts = (query: string) => 
  products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );