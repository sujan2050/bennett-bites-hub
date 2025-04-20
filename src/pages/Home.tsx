
import React, { useEffect } from "react";
import { outlets } from "@/data/outlets";
import OutletCard from "@/components/OutletCard";
import { SearchIcon } from "lucide-react";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      <div className="bg-bennett-600 pt-4 pb-8">
        <div className="container-custom">
          <h1 className="text-xl font-bold text-white">Bennett Foods</h1>
          <p className="text-white text-opacity-80 mt-1">
            Hungry? We've got you covered
          </p>
          
          <div className="relative mt-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2.5 bg-white bg-opacity-95 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Search for food or outlets..."
            />
          </div>
        </div>
      </div>
      
      <div className="container-custom -mt-4">
        <div className="bg-white rounded-t-xl shadow-sm p-4">
          <h2 className="text-lg font-semibold">Campus Outlets</h2>
          <p className="text-sm text-gray-500 mt-1">
            Discover the best food on campus
          </p>
        </div>
      </div>
      
      <div className="container-custom pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {outlets.map((outlet) => (
            <OutletCard key={outlet.id} outlet={outlet} />
          ))}
        </div>
      </div>
      
      <div className="container-custom mt-8">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-semibold">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="text-center p-4">
              <div className="h-12 w-12 bg-bennett-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-bennett-600 font-bold">1</span>
              </div>
              <h3 className="font-medium mt-2">Select an outlet</h3>
              <p className="text-gray-500 text-sm mt-1">
                Choose from various campus food outlets
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="h-12 w-12 bg-bennett-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-bennett-600 font-bold">2</span>
              </div>
              <h3 className="font-medium mt-2">Pick your food</h3>
              <p className="text-gray-500 text-sm mt-1">
                Add delicious items to your cart
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="h-12 w-12 bg-bennett-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-bennett-600 font-bold">3</span>
              </div>
              <h3 className="font-medium mt-2">Get it delivered</h3>
              <p className="text-gray-500 text-sm mt-1">
                Quick delivery to your dorm or location
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
