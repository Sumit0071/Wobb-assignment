import { useState } from "react";

const SortComponent = ({ categories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="flex gap-4 justify-center my-6">
      {Object.keys(categories).map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
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
