"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { categories } from "@/lib/dummies/products";

const FeaturedCategories = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6">
            Shop by <span className="gradient-text font-bold">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our carefully curated collections designed to elevate your style
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <Card  className="group relative overflow-hidden border-0 shadow-soft hover:shadow-lg transition-all duration-500 py-0">
                <motion.div 
                  className="aspect-square relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                  
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-serif font-medium mb-2">
                        {category.title}
                      </h3>
                      <p className="text-white/90 mb-4 text-sm">
                        {category.description}
                      </p>
                      <Button 
                        variant={"outline"}
                        size="sm"
                        className="border-white text-gray-800"
                      >
                        Explore
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;