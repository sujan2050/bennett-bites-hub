
import React, { createContext, useState, useContext, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  outletId: string;
  outletName: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getTax: () => number;
  getFinalTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getTotal: () => 0,
  getTax: () => 0,
  getFinalTotal: () => 0,
  getItemCount: () => 0,
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  useEffect(() => {
    // Load cart from localStorage
    const storedCart = localStorage.getItem("bennettFoodsCart");
    if (storedCart) {
      setItems(JSON.parse(storedCart));
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("bennettFoodsCart", JSON.stringify(items));
  }, [items]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setItems(currentItems => {
      // Check if item already exists in cart
      const existingItemIndex = currentItems.findIndex(i => i.id === item.id);
      
      if (existingItemIndex >= 0) {
        // Increment quantity if item exists
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        // Add new item with quantity 1
        return [...currentItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setItems(currentItems => 
      currentItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTax = () => {
    return getTotal() * 0.05; // 5% tax
  };

  const getFinalTotal = () => {
    return getTotal() + getTax();
  };
  
  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        getTotal, 
        getTax, 
        getFinalTotal,
        getItemCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
