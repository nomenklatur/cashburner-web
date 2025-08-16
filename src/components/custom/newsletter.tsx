"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast("You have successfully subscribed to our newsletter!");
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-24 bg-gradient-to-r from-primary-soft/20 to-accent-warm/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="max-w-4xl mx-auto py-12 px-8 text-center shadow-lg border-0 bg-background/80 backdrop-blur-sm">
            <motion.h2 
              className="text-4xl lg:text-5xl font-serif font-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stay <span className="gradient-text font-medium">Inspired</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Be the first to discover new collections, exclusive offers, and style inspiration 
              delivered directly to your inbox.
            </motion.p>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 border-primary/20 focus:border-primary w-[300px]"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="h-12 px-8"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
            </motion.form>
            
            <motion.p 
              className="text-sm text-muted-foreground mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </motion.p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;