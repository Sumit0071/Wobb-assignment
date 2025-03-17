import { useContext, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./Theme";
import "./App.css";
import CardComponent from "./components/CardComponent";
import SkeletonCard from "./components/SkeletonCard";
import SortComponent from "./components/sortComponent";

function App() {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [filteredCategory, setFilteredCategory] = useState("All");

  const products = [
    {
      title: "Ozivia",
      description: "Get ₹500 cash + barter worth ₹449 for 2 Reels and 1 Story",
      logo: "src/assets/OZiva_logo_svg.svg",
      heroImage: "src/assets/download.jpeg",
      cash: "500 INR",
      barterWorth: "449 INR",
      hired: 20,
      slotsAvailable: 100,
      buttonText: "Profile Pending",
      category: "Applied",
    },
    {
      title: "Protein Shake",
      description: "Delicious protein shake for muscle growth and recovery",
      logo: "src/assets/shake_logo.svg",
      heroImage: "src/assets/shake.jpeg",
      cash: "300 INR",
      barterWorth: "150 INR",
      hired: 35,
      slotsAvailable: 200,
      buttonText: "Buy Now",
      category: "Hired",
    },
  ];

  const categoryCounts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, { All: products.length });

  const filteredProducts =
    filteredCategory === "All"
      ? products
      : products.filter((p) => p.category === filteredCategory);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className={`App ${theme} min-h-screen bg-gray-100 text-gray-900`}>
     
      <Navbar />
      
     
      <div className="pt-20 px-4 md:px-8 lg:px-12">
        <SortComponent
          categories={categoryCounts}
          onCategoryChange={setFilteredCategory}
          className="mt-6"  
        />

        <div className="container mx-auto py-10 flex flex-wrap justify-center gap-8">
          {loading
            ? [1, 2].map((_, i) => <SkeletonCard key={i} />)
            : filteredProducts.map((product, i) => (
                <CardComponent key={i} {...product} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
