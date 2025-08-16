"use client";
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCartContext } from '../context/cart.provider';
import { toast } from 'sonner';

const CartSidebar = () => {
  const { cartItems, isOpen, setIsOpen, updateQuantity, removeFromCart, getCartTotal } = useCartContext();

  const handleCheckout = () => {
    toast("Checkout functionality is not implemented yet.");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Shopping Cart ({cartItems.length})
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex items-center justify-center flex-col gap-4">
              <ShoppingBag className="w-16 h-16 text-muted-foreground" />
              <p className="text-muted-foreground text-center">Your cart is empty</p>
              <Button onClick={() => setIsOpen(false)} variant="outline">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-6 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-foreground truncate">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">${item.price}</p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-7 w-7 p-0"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-7 w-7 p-0"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="h-auto p-1 text-muted-foreground hover:text-foreground"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                      <p className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-6 space-y-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <Button 
                  onClick={handleCheckout} 
                  className="w-full" 
                  size="lg"
                >
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;