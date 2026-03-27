"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...(items || [])].sort((a, b) => {
    if (sortBy === "name") {
      return (a.name || "").localeCompare(b.name || "");
    } else {
      return (a.category || "").localeCompare(b.category || "");
    }
  });

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => setSortBy("name")}
          className="px-4 py-2 mr-2 rounded bg-yellow-500 text-white"
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className="px-4 py-2 rounded bg-gray-300 text-black"
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
            onSelect={onItemSelect}
          />
        ))}
      </ul>
    </div>
  );
}