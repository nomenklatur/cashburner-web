import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
            src="/assets/images/hero-image.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-6xl lg:text-7xl font-serif font-light mb-6 leading-tight">
              Elegance
              <br />
              <span className="gradient-text font-medium">Redefined</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg text-balance leading-relaxed">
              Discover our curated collection of luxurious fashion, beauty, and accessories 
              that celebrate your unique style and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Lookbook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;