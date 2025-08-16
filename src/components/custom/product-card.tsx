import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Product } from '@/lib/dummies/products';
import { useCartContext } from '../context/cart.provider';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  onProductClick?: (product: Product) => void;
  className?: string;
  style?: React.CSSProperties;
}

const ProductCard = ({ product, onProductClick, className, style }: ProductCardProps) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast("Added to cart");
  };

  const handleProductClick = () => {
    onProductClick?.(product);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className={cn(
          "group relative overflow-hidden border-0 shadow-soft hover:shadow-lg transition-all duration-500 cursor-pointer py-0",
          className
        )}
        style={style}
        onClick={handleProductClick}
      >
      <div className="aspect-square relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.onSale && (
            <Badge variant="destructive" className="bg-red-500 text-white">
              Sale
            </Badge>
          )}
          {product.featured && (
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="outline" className="bg-background/80">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Wishlist button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 h-8 w-8 p-0 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => {
            e.stopPropagation();
            toast("Added to wishlist");
          }}
        >
          <Heart className="w-4 h-4" />
        </Button>

        {/* Add to cart overlay */}
        <motion.div 
          className="absolute inset-0 bg-foreground/20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              size="sm"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-foreground mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3 h-3",
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-muted-foreground"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-foreground">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>
      </div>
    </Card>
    </motion.div>
  );
};

export default ProductCard;