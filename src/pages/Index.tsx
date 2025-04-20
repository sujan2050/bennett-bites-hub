
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  
  useEffect(() => {
    // Redirect based on login status
    if (isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bennett-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-bennett-600">Bennett Foods</h1>
        <p className="text-xl text-gray-600">Loading...</p>
        <div className="mt-4 h-8 w-8 border-4 border-bennett-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
};

export default Index;
