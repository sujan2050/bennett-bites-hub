
import React, { createContext, useState, useContext, useEffect } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  dorm: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, dorm: string) => boolean;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
  isLoggedIn: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUser = localStorage.getItem("bennettFoodsUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string, dorm: string) => {
    // Simple validation - in a real app this would connect to a backend
    if (email && password && dorm) {
      const userData: User = {
        id: "user-" + Math.random().toString(36).substring(2, 9),
        email,
        name: email.split('@')[0], // Extract name from email
        dorm
      };
      
      setUser(userData);
      localStorage.setItem("bennettFoodsUser", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("bennettFoodsUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
