import { Heart, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-serif font-bold mb-4 text-primary-soft">
              Cashburner
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Elevating your style with carefully curated fashion, beauty, and accessories 
              that celebrate confidence and elegance.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary-soft">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary-soft">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary-soft">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-soft">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Clothing</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Accessories</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Beauty</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-soft">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">FAQ</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Care Instructions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-soft">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Press</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Cashburner. All rights reserved.
          </p>
          <p className="text-background/60 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-primary-soft" /> by <a href="https://dimaseka.my.id" target="_blank" className="underline ml-1">Dimas Eka Putra</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;