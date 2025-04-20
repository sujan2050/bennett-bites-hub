
import React from "react";
import { Outlet } from "@/data/outlets";
import { Link } from "react-router-dom";

interface OutletCardProps {
  outlet: Outlet;
}

const OutletCard: React.FC<OutletCardProps> = ({ outlet }) => {
  return (
    <Link to={`/outlet/${outlet.id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden card-shadow">
        <div className="h-40 overflow-hidden">
          <img 
            src={outlet.image} 
            alt={outlet.name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg text-gray-900">{outlet.name}</h3>
            <div className="flex items-center bg-green-50 px-2 py-1 rounded">
              <span className="text-sm font-medium text-green-700">{outlet.rating}</span>
              <span className="ml-1 text-sm text-green-700">★</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{outlet.description}</p>
          <div className="mt-3 flex items-center text-gray-500 text-sm">
            <span className="mr-2">⏱ {outlet.deliveryTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OutletCard;
