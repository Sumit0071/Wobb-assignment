import { useState } from "react";
import { Filter } from "lucide-react";

const SortComponent = ({ categories, onCategoryChange, onFilterIconClick }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="relative flex gap-4 justify-center my-6">
      {/* Filter Icon (Handled in Home.jsx) */}
      <Filter
        className="cursor-pointer bg-slate-200 hover:text-blue-800"
        onClick={onFilterIconClick} // Calls the function from Home.jsx
      />

      {/* Category Buttons */}
      {Object.keys(categories).map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleCategoryChange(category)}
        >
          {category} ({categories[category]})
        </button>
      ))}
    </div>
  );
};

export default SortComponent;
