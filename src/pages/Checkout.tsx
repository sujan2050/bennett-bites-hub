
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Home, CreditCard, QrCode, IndianRupee } from "lucide-react";

const Checkout: React.FC = () => {
  const { items, getTotal, getTax, getFinalTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "upi" | "card">("cash");
  const [deliveryAddress, setDeliveryAddress] = useState(user?.dorm || "");
  const [isLoading, setIsLoading] = useState(false);
  
  if (items.length === 0) {
    navigate("/cart");
    return null;
  }
  
  const handlePlaceOrder = () => {
    if (!deliveryAddress) {
      toast({
        title: "Missing information",
        description: "Please provide your delivery address",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate order processing
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Your food is being prepared",
      });
      
      clearCart();
      navigate("/home");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      <div className="bg-bennett-600 pt-4 pb-8">
        <div className="container-custom">
          <h1 className="text-xl font-bold text-white">Checkout</h1>
          <p className="text-white text-opacity-80 mt-1">
            Complete your order
          </p>
        </div>
      </div>
      
      <div className="container-custom -mt-4">
        <div className="bg-white rounded-t-xl shadow-sm p-4">
          <h2 className="text-lg font-semibold">Delivery Details</h2>
          
          <div className="mt-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Home className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="address"
                type="text"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-bennett-500 focus:border-bennett-500"
                placeholder="e.g., H8-203 or Main Campus"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-sm mt-4 rounded-lg p-4">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          
          <div className="mt-3 space-y-3 max-h-40 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.quantity} × {item.name}</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 space-y-2 border-t border-gray-200 pt-3">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{getTotal().toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between text-gray-600">
              <span>Tax (5%)</span>
              <span>₹{getTax().toFixed(2)}</span>
            </div>
            
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{getFinalTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-sm mt-4 rounded-lg p-4">
          <h2 className="text-lg font-semibold">Payment Method</h2>
          
          <div className="mt-4 space-y-3">
            <div
              className={`border rounded-lg p-3 cursor-pointer flex items-center ${
                paymentMethod === "cash" ? "border-bennett-500 bg-bennett-50" : "border-gray-200"
              }`}
              onClick={() => setPaymentMethod("cash")}
            >
              <div className={`h-5 w-5 rounded-full border-2 ${
                paymentMethod === "cash" ? "border-bennett-500" : "border-gray-300"
              } flex items-center justify-center`}>
                {paymentMethod === "cash" && <div className="h-2.5 w-2.5 bg-bennett-500 rounded-full"></div>}
              </div>
              <div className="ml-3 flex-grow">
                <p className="font-medium">Cash on Delivery</p>
                <p className="text-gray-500 text-sm">Pay when your food arrives</p>
              </div>
              <IndianRupee className="h-5 w-5 text-gray-400" />
            </div>
            
            <div
              className={`border rounded-lg p-3 cursor-pointer flex items-center ${
                paymentMethod === "upi" ? "border-bennett-500 bg-bennett-50" : "border-gray-200"
              }`}
              onClick={() => setPaymentMethod("upi")}
            >
              <div className={`h-5 w-5 rounded-full border-2 ${
                paymentMethod === "upi" ? "border-bennett-500" : "border-gray-300"
              } flex items-center justify-center`}>
                {paymentMethod === "upi" && <div className="h-2.5 w-2.5 bg-bennett-500 rounded-full"></div>}
              </div>
              <div className="ml-3 flex-grow">
                <p className="font-medium">UPI Payment</p>
                <p className="text-gray-500 text-sm">Pay via UPI apps (GPay, PhonePe, etc.)</p>
              </div>
              <QrCode className="h-5 w-5 text-gray-400" />
            </div>
            
            <div
              className={`border rounded-lg p-3 cursor-pointer flex items-center ${
                paymentMethod === "card" ? "border-bennett-500 bg-bennett-50" : "border-gray-200"
              }`}
              onClick={() => setPaymentMethod("card")}
            >
              <div className={`h-5 w-5 rounded-full border-2 ${
                paymentMethod === "card" ? "border-bennett-500" : "border-gray-300"
              } flex items-center justify-center`}>
                {paymentMethod === "card" && <div className="h-2.5 w-2.5 bg-bennett-500 rounded-full"></div>}
              </div>
              <div className="ml-3 flex-grow">
                <p className="font-medium">Card Payment</p>
                <p className="text-gray-500 text-sm">Pay with credit or debit card</p>
              </div>
              <CreditCard className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full btn-primary py-2.5 flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Place Order"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
