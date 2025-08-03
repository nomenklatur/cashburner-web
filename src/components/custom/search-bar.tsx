import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { searchProducts, Product } from '@/lib/dummies/products';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  onProductSelect?: (product: Product) => void;
  className?: string;
}

const SearchBar = ({ onProductSelect, className }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Product[]>([]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      const searchResults = searchProducts(searchQuery);
      setResults(searchResults.slice(0, 6)); // Limit to 6 results
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleSelectProduct = (product: Product) => {
    setQuery('');
    setIsOpen(false);
    onProductSelect?.(product);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          className="pl-10 pr-10 bg-background/50 border-border/50 focus:bg-background"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-auto p-1 hover:bg-transparent"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </Button>
        )}
      </div>
      
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-elegant z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="text-sm text-muted-foreground mb-2 px-2">
              {results.length} result{results.length !== 1 ? 's' : ''} found
            </div>
            {results.map((product) => (
              <button
                key={product.id}
                onClick={() => handleSelectProduct(product)}
                className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 text-left transition-colors"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{product.name}</div>
                  <div className="text-xs text-muted-foreground">
                    ${product.price} • {product.category}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-elegant z-50">
          <div className="p-4 text-center text-muted-foreground">
            No products found for "{query}"
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;