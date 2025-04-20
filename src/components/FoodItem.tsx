
import React from "react";
import { FoodItem as FoodItemType } from "@/data/foodItems";
import { useCart } from "@/context/CartContext";
import { Plus } from "lucide-react";

interface FoodItemProps {
  item: FoodItemType;
  outletName: string;
}

const FoodItem: React.FC<FoodItemProps> = ({ item, outletName }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    if (!item.isAvailable) return;
    
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      outletId: item.outletId,
      outletName: outletName,
      image: item.image
    });
  };

  return (
    <div className={`bg-white rounded-lg overflow-hidden card-shadow ${!item.isAvailable ? 'opacity-70' : ''}`}>
      <div className="flex flex-col h-full">
        <div className="h-36 overflow-hidden relative">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
          {item.isPopular && (
            <div className="absolute top-2 left-2 bg-bennett-500 text-white text-xs px-2 py-1 rounded">
              Popular
            </div>
          )}
          <div className="absolute top-2 right-2 bg-white rounded-md px-1">
            <div className={`h-3 w-3 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
          </div>
        </div>
        
        <div className="p-3 flex flex-col flex-grow">
          <h3 className="font-medium text-gray-900">{item.name}</h3>
          <p className="text-gray-600 text-xs mt-1 line-clamp-2 flex-grow">{item.description}</p>
          
          <div className="mt-3 flex items-center justify-between">
            <div className="font-semibold text-gray-900">₹{item.price}</div>
            
            <button 
              onClick={handleAddToCart}
              disabled={!item.isAvailable}
              className={`p-1.5 rounded ${
                item.isAvailable 
                  ? 'bg-bennett-500 text-white hover:bg-bennett-600' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              } transition-colors`}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          {!item.isAvailable && (
            <div className="mt-2 text-center text-xs font-medium text-red-500">
              Currently Unavailable
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
