
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, User, ArrowLeft } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

const Header: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const { getItemCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Don't show header on login page
  if (location.pathname === "/login") {
    return null;
  }
  
  const showBackButton = location.pathname !== "/home" && location.pathname !== "/";
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-3 flex items-center justify-between">
        {showBackButton ? (
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-bennett-600" />
          </button>
        ) : (
          <Link to="/home" className="flex items-center">
            <span className="text-bennett-600 font-bold text-xl">Bennett</span>
            <span className="text-bennett-500 font-bold text-xl">Foods</span>
          </Link>
        )}
        
        {isLoggedIn && (
          <div className="flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ShoppingCart className="h-5 w-5 text-bennett-600" />
              {getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-bennett-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Link>
            
            <Link 
              to="/profile" 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <User className="h-5 w-5 text-bennett-600" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
