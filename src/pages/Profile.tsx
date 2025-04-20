
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Mail, Home, User, Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    logout();
    navigate("/login");
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      <div className="bg-bennett-600 pt-4 pb-10">
        <div className="container-custom">
          <h1 className="text-xl font-bold text-white">My Profile</h1>
        </div>
      </div>
      
      <div className="container-custom -mt-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center">
            <div className="h-16 w-16 bg-bennett-100 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-bennett-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-500 text-sm">{user.email}</p>
            </div>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Mail className="h-5 w-5 text-gray-500" />
              <div className="ml-3">
                <p className="text-sm font-medium">Email</p>
                <p className="text-gray-700">{user.email}</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Home className="h-5 w-5 text-gray-500" />
              <div className="ml-3">
                <p className="text-sm font-medium">Dorm/Address</p>
                <p className="text-gray-700">{user.dorm}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Account Settings</h3>
            
            <div className="mt-4 space-y-2">
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="ml-3 text-gray-800">Edit Profile</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-gray-500" />
                  <span className="ml-3 text-gray-800">Change Password</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
            </div>
          </div>
          
          <button
            onClick={handleLogout}
            className="mt-8 w-full btn-secondary py-2.5"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
