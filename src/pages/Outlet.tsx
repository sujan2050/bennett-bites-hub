
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { outlets } from "@/data/outlets";
import { getFoodItemsByOutlet } from "@/data/foodItems";
import FoodItem from "@/components/FoodItem";
import { useToast } from "@/components/ui/use-toast";

const Outlet: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isLoading, setIsLoading] = useState(true);
  
  const outlet = outlets.find(o => o.id === id);
  const foodItems = id ? getFoodItemsByOutlet(id) : [];
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  useEffect(() => {
    if (!isLoading && !outlet) {
      toast({
        title: "Outlet not found",
        description: "The outlet you are looking for does not exist",
        variant: "destructive",
      });
      navigate("/home");
    }
  }, [outlet, isLoading, navigate, toast]);

  if (isLoading || !outlet) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-bennett-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      <div className="h-48 relative">
        <img 
          src={outlet.image} 
          alt={outlet.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>
        
        <div className="absolute bottom-4 left-0 w-full px-4">
          <div className="container-custom">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">{outlet.name}</h1>
              <div className="flex items-center bg-white px-2 py-1 rounded">
                <span className="text-sm font-medium text-green-700">{outlet.rating}</span>
                <span className="ml-1 text-sm text-green-700">★</span>
              </div>
            </div>
            <p className="text-white text-opacity-90 mt-1">{outlet.description}</p>
          </div>
        </div>
      </div>
      
      <div className="container-custom mt-4">
        <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span className="text-gray-800 font-medium">Delivery time:</span> {outlet.deliveryTime}
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-800">Open Now</span>
          </div>
        </div>
        
        <h2 className="text-lg font-semibold mt-6 mb-3">Menu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {foodItems.map((item) => (
            <FoodItem key={item.id} item={item} outletName={outlet.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Outlet;
