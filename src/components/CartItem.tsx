
import React from "react";
import { CartItem as CartItemType } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };
  
  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };
  
  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-200 last:border-b-0">
      <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h3 className="font-medium text-gray-900">{item.name}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{item.outletName}</p>
        <div className="mt-1 font-semibold text-gray-900">₹{item.price}</div>
      </div>
      
      <div className="flex items-center">
        <button
          onClick={handleDecrease}
          className="p-1.5 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
        >
          {item.quantity === 1 ? (
            <Trash2 className="h-3.5 w-3.5 text-red-500" />
          ) : (
            <Minus className="h-3.5 w-3.5 text-gray-600" />
          )}
        </button>
        
        <span className="mx-3 font-medium text-gray-800 min-w-[24px] text-center">
          {item.quantity}
        </span>
        
        <button
          onClick={handleIncrease}
          className="p-1.5 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
        >
          <Plus className="h-3.5 w-3.5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
