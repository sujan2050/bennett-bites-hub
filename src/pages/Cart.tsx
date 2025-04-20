
import React from "react";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Cart: React.FC = () => {
  const { items, getTotal, getTax, getFinalTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    if (items.length === 0) return;
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      <div className="bg-bennett-600 pt-4 pb-8">
        <div className="container-custom">
          <h1 className="text-xl font-bold text-white">Your Cart</h1>
          <p className="text-white text-opacity-80 mt-1">
            {items.length > 0
              ? `${items.length} items from ${new Set(items.map(item => item.outletName)).size} outlets`
              : "Your cart is empty"}
          </p>
        </div>
      </div>
      
      <div className="container-custom -mt-4">
        {items.length > 0 ? (
          <>
            <div className="bg-white rounded-t-xl shadow-sm p-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            
            <div className="bg-white shadow-sm mt-4 rounded-lg p-4">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              
              <div className="mt-4 space-y-2">
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
              
              <div className="mt-6 flex gap-3">
                <button
                  onClick={clearCart}
                  className="btn-secondary flex-1"
                >
                  Clear Cart
                </button>
                
                <button
                  onClick={handleCheckout}
                  className="btn-primary flex-1"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="flex justify-center">
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-gray-400" />
              </div>
            </div>
            
            <h2 className="mt-4 text-xl font-semibold">Your cart is empty</h2>
            <p className="mt-2 text-gray-500">
              Add items from our campus outlets to fill your cart
            </p>
            
            <button
              onClick={() => navigate("/home")}
              className="mt-6 btn-primary"
            >
              Browse Outlets
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
