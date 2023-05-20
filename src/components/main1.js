import React, { useState, useEffect } from "react";

const FileManager = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://646312614dca1a661353d0ee.mockapi.io/api/Category"
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleLabelToggle = async (labelId) => {
    try {
      // Send update request to API to toggle label with labelId
      await fetch(
        `https://646312614dca1a661353d0ee.mockapi.io/api/Category/Labels/${labelId}`,
        {
          method: "PATCH",
        }
      );
      // Refresh categories after label toggling
      fetchCategories();
    } catch (error) {
      console.error("Error toggling label:", error);
    }
  };

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <div className=" p-2 text-gray-500 font-Nuni font-bold">
              {category.Name}
            </div>
            {category.id && (
              <ul className="pl-4 space-y-2">
                {category.Labels.map((label) => (
                  <li key={label.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={label.selected}
                      className="mr-2"
                      onChange={() => handleLabelToggle(label.id)}
                    />
                    <span className=" text-gray-400 font-Nuni">
                      {label.Name}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileManager;
