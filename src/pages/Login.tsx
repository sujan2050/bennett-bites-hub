
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Home, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dorm, setDorm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const success = login(email, password, dorm);
      
      if (success) {
        toast({
          title: "Login successful",
          description: "Welcome to Bennett Foods!",
        });
        navigate("/home");
      } else {
        toast({
          title: "Login failed",
          description: "Please fill in all the fields",
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="h-64 bg-bennett-600 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Bennett Foods</h1>
          <p className="text-white text-opacity-80 mt-2">
            Campus food delivery made easy
          </p>
        </div>
      </div>
      
      <div className="container-custom -mt-12 flex-grow flex flex-col">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
          <p className="text-gray-500 mt-2">
            Enter your details to continue
          </p>
          
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-bennett-500 focus:border-bennett-500"
                  placeholder="email@bennett.edu.in"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-bennett-500 focus:border-bennett-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="dorm" className="block text-sm font-medium text-gray-700 mb-1">
                Dorm No / Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Home className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="dorm"
                  type="text"
                  value={dorm}
                  onChange={(e) => setDorm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-bennett-500 focus:border-bennett-500"
                  placeholder="e.g., H8-203 or Main Campus"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary py-2.5 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Login & Continue"
              )}
            </button>
          </form>
          
          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account? <a href="#" className="text-bennett-600 font-medium">Sign up</a>
          </p>
        </div>
      </div>
      
      <div className="py-4 text-center text-gray-500 text-sm">
        © 2025 Bennett Foods. All rights reserved.
      </div>
    </div>
  );
};

export default Login;
