"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, ShoppingBag, Search, Heart } from "lucide-react";
import SearchBar from "@/components/custom/search-bar";
import { useCartContext } from "@/components/context/cart.provider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsOpen: setCartOpen, getCartItemsCount } = useCartContext();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold gradient-text">
              Cashburner
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              New Arrivals
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Clothing
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Accessories
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Beauty
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Skincare
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Sale
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <SearchBar className="w-full" />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {getCartItemsCount() > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center"
                >
                  {getCartItemsCount()}
                </Badge>
              )}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="mb-4">
              <SearchBar className="w-full" />
            </div>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                New Arrivals
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Clothing
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Accessories
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Beauty
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Skincare
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Sale
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;