"use client";

import { useState } from "react";

    export default function NewItem() {
    const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

function handleSubmit(e) {
    e.preventDefault();
     const item = { name, quantity, category };
     console.log(item);
    alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);
     setName("");
     setQuantity(1);
    setCategory("produce");
}

const increment = () => quantity < 20 && setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <form onSubmit={handleSubmit} className="bg-white text-black p-20 rounded-xl max-w-2xl w-full">
      <h2 className="text-2xl font-bold mb-7">Week 5 — New Item</h2>
       
<input
        type="text"
        value={name}
        required
        
        placeholder="Item name"
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 rounded-md border mb-4"
      />

 <div className="mb-4">
        <p className="mb-2">Quantity: {quantity}</p>
        <div className="flex gap-2 mb-4">
          <button type="button" onClick={decrement} disabled={quantity === 1 } 
            className="w-10 h-10 bg-gray-200 rounded disabled:opacity-50">−</button>
          <button type="button" onClick={increment} disabled={quantity === 20}
            className="w-10 h-10 bg-blue-500 text-white rounded disabled:opacity-50">+</button>
          </div>
      </div>

      <select value={category} onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 rounded-md border mb-4">
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>

      <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
        Add Item
      </button>
    </form>
  );
}