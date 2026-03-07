"use client";

import { useState } from "react";
import itemsData from "./items.json";
 import ItemList from "./ItemList";
import NewItem from "./NewItem";

export default function Page() {

  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

   
  return (
  <main className="min-h-screen bg-black-700 flex justify-center items-start pt-10">
    
    <div className="bg-gray-800 w-full max-w-2xl p-8 rounded shadow-lg text-white">

      <h1 className="text-3xl font-bold mb-6 border-b pb-2">
        Shopping List
      </h1>

      <NewItem onAddItem={handleAddItem} />

      <ItemList items={items} />

    </div>

  </main>
);
}