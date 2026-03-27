"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={name}
        placeholder="Item name"
        onChange={(e) => setName(e.target.value)}
        required
        className="text-white placeholder-gray-300"
      />

      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="text-white placeholder-gray-300"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="text-white placeholder-gray-300"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
      </select>

      <button type="submit" className="bg-green-500 px-4 py-2 rounded text-white">
        Add Item
      </button>
    </form>
  );
}