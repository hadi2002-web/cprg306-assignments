"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items }) {

   const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
       return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

   return (
    <div>

      <div className="mb-4">
         <div className="mb-4">
             <ul className="mt-4"></ul>
        </div>
        <button
           onClick={() => setSortBy("name")}
          className={`px-4 py-2 mr-2 rounded ${
              sortBy === "name"
               ? "bg-yellow-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          Name
        </button>

        <button
           onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category"
              ? "bg-yellow-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
             name={item.name}
             quantity={item.quantity}
            category={item.category}
          />
        ))}
       </ul>

    </div>
  );
}