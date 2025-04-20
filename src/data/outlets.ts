
export interface Outlet {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  deliveryTime: string;
}

export const outlets: Outlet[] = [
  {
    id: "maggi-hotspot",
    name: "Maggi Hotspot",
    description: "Variety of delicious Maggi options to satisfy your cravings",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.2,
    deliveryTime: "10-15 min"
  },
  {
    id: "kathi-house",
    name: "Kathi House",
    description: "Authentic North Indian cuisine including parathas and chole bhature",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e4c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.5,
    deliveryTime: "15-20 min"
  },
  {
    id: "n-block-mess",
    name: "N Block Mess",
    description: "Full restaurant experience with biryani, butter chicken and more",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069fc07b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.3,
    deliveryTime: "20-25 min"
  },
  {
    id: "snapeats",
    name: "Snapeats",
    description: "Variety of teas and snacks to energize your day",
    image: "https://images.unsplash.com/photo-1561336526-2914f13ceb36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.1,
    deliveryTime: "10-15 min"
  },
  {
    id: "tuck-stop",
    name: "Tuck Stop",
    description: "Basic snacks like chocolates, chips, and stationery items",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.0,
    deliveryTime: "5-10 min"
  }
];
