
export interface FoodItem {
  id: string;
  outletId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isAvailable: boolean;
  isVeg: boolean;
  isPopular?: boolean;
}

export const foodItems: FoodItem[] = [
  // Maggi Hotspot Items
  {
    id: "maggi-classic",
    outletId: "maggi-hotspot",
    name: "Classic Maggi",
    description: "The original masala Maggi we all love",
    price: 40,
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true,
    isPopular: true
  },
  {
    id: "maggi-cheese",
    outletId: "maggi-hotspot",
    name: "Cheese Maggi",
    description: "Classic Maggi topped with grated cheese",
    price: 60,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },
  {
    id: "maggi-butter",
    outletId: "maggi-hotspot",
    name: "Butter Maggi",
    description: "Maggi cooked with butter for richer taste",
    price: 50,
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },
  {
    id: "maggi-veggie",
    outletId: "maggi-hotspot",
    name: "Vegetable Maggi",
    description: "Maggi with mix of fresh vegetables",
    price: 70,
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },
  {
    id: "maggi-egg",
    outletId: "maggi-hotspot",
    name: "Egg Maggi",
    description: "Maggi with scrambled eggs mixed in",
    price: 75,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: false
  },
  {
    id: "maggi-schezwan",
    outletId: "maggi-hotspot",
    name: "Schezwan Maggi",
    description: "Spicy Maggi with schezwan sauce",
    price: 65,
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true,
    isPopular: true
  },

  // Kathi House Items
  {
    id: "kathi-paratha",
    outletId: "kathi-house",
    name: "Aloo Paratha",
    description: "Stuffed potato paratha served with curd",
    price: 60,
    image: "https://images.unsplash.com/photo-1589778655375-3e622a9fc28c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true,
    isPopular: true
  },
  {
    id: "kathi-gobi",
    outletId: "kathi-house",
    name: "Gobi Paratha",
    description: "Cauliflower stuffed paratha served with curd",
    price: 65,
    image: "https://images.unsplash.com/photo-1604152135912-04a022e73f35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },
  {
    id: "kathi-paneer",
    outletId: "kathi-house",
    name: "Paneer Paratha",
    description: "Cottage cheese stuffed paratha with butter",
    price: 75,
    image: "https://images.unsplash.com/photo-1589778655375-3e622a9fc28c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },
  {
    id: "kathi-chole",
    outletId: "kathi-house",
    name: "Chole Bhature",
    description: "Spicy chickpea curry with fried bread",
    price: 90,
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e4c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true,
    isPopular: true
  },
  {
    id: "kathi-dal",
    outletId: "kathi-house",
    name: "Dal Makhani",
    description: "Creamy black lentil curry with 2 rotis",
    price: 85,
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e4c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },
  {
    id: "kathi-rajma",
    outletId: "kathi-house",
    name: "Rajma Chawal",
    description: "Kidney bean curry served with steamed rice",
    price: 85,
    image: "https://images.unsplash.com/photo-1604152135912-04a022e73f35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },

  // N Block Mess Items
  {
    id: "n-block-biryani-veg",
    outletId: "n-block-mess",
    name: "Veg Biryani",
    description: "Fragrant rice with mixed vegetables and spices",
    price: 120,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069fc07b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },
  {
    id: "n-block-biryani-chicken",
    outletId: "n-block-mess",
    name: "Chicken Biryani",
    description: "Classic chicken biryani with raita",
    price: 160,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: false,
    isPopular: true
  },
  {
    id: "n-block-butter-chicken",
    outletId: "n-block-mess",
    name: "Butter Chicken",
    description: "Creamy tomato chicken curry with 2 naan",
    price: 180,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: false,
    isPopular: true
  },
  {
    id: "n-block-paneer",
    outletId: "n-block-mess",
    name: "Paneer Butter Masala",
    description: "Cottage cheese in rich tomato gravy with 2 naan",
    price: 160,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },
  {
    id: "n-block-thali",
    outletId: "n-block-mess",
    name: "Veg Thali",
    description: "Complete meal with dal, sabzi, rice, roti, and dessert",
    price: 140,
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },
  {
    id: "n-block-thali-non",
    outletId: "n-block-mess",
    name: "Non-Veg Thali",
    description: "Complete meal with chicken curry, rice, roti, and dessert",
    price: 180,
    image: "https://images.unsplash.com/photo-1596797038530-2c107aa8e1fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: false
  },

  // Snapeats Items
  {
    id: "snap-chai",
    outletId: "snapeats",
    name: "Masala Chai",
    description: "Classic Indian spiced tea",
    price: 20,
    image: "https://images.unsplash.com/photo-1561336526-2914f13ceb36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true,
    isPopular: true
  },
  {
    id: "snap-coffee",
    outletId: "snapeats",
    name: "Filter Coffee",
    description: "South Indian style filter coffee",
    price: 30,
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },
  {
    id: "snap-samosa",
    outletId: "snapeats",
    name: "Samosa",
    description: "Crispy pastry filled with spiced potatoes",
    price: 25,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true,
    isPopular: true
  },
  {
    id: "snap-kachori",
    outletId: "snapeats",
    name: "Kachori",
    description: "Deep-fried snack with spicy filling",
    price: 25,
    image: "https://images.unsplash.com/photo-1605196560547-5fb70bb3f2df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },
  {
    id: "snap-pakora",
    outletId: "snapeats",
    name: "Mix Pakora",
    description: "Assorted vegetable fritters",
    price: 40,
    image: "https://images.unsplash.com/photo-1522612406683-5795634d717f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },
  {
    id: "snap-sandwich",
    outletId: "snapeats",
    name: "Veg Sandwich",
    description: "Grilled sandwich with vegetables and cheese",
    price: 45,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },

  // Tuck Stop Items
  {
    id: "tuck-lays",
    outletId: "tuck-stop",
    name: "Lays (Classic)",
    description: "Classic salted potato chips",
    price: 20,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true,
    isPopular: true
  },
  {
    id: "tuck-kurkure",
    outletId: "tuck-stop",
    name: "Kurkure",
    description: "Crunchy corn puffs with masala flavor",
    price: 20,
    image: "https://images.unsplash.com/photo-1613919517761-0d9e79bdda47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },
  {
    id: "tuck-chocolate",
    outletId: "tuck-stop",
    name: "Dairy Milk",
    description: "Cadbury Dairy Milk chocolate bar",
    price: 40,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true,
    isPopular: true
  },
  {
    id: "tuck-biscuits",
    outletId: "tuck-stop",
    name: "Parle-G",
    description: "Classic glucose biscuits",
    price: 10,
    image: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },
  {
    id: "tuck-pen",
    outletId: "tuck-stop",
    name: "Ballpoint Pen",
    description: "Blue ballpoint pen for writing",
    price: 15,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  },
  {
    id: "tuck-notebook",
    outletId: "tuck-stop",
    name: "Notebook",
    description: "A5 size ruled notebook",
    price: 30,
    image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isAvailable: true,
    isVeg: true
  }
];

export const getFoodItemsByOutlet = (outletId: string): FoodItem[] => {
  return foodItems.filter(item => item.outletId === outletId);
};
