"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import MealIdeas from "./mealdeas";

import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

export default function Page() {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");


  useEffect(() => {
    async function loadData() {
      const snapshot = await getDocs(collection(db, "users"));

      const data = snapshot.docs.map(doc => doc.data());

      console.log(data);
    }

    loadData();
  }, []);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {

    let cleanedName = item.name.split(",")[0].trim();

    cleanedName = cleanedName.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "");

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen bg-black-700 flex justify-center items-start pt-10">

      <div className="flex gap-10">

        <div className="bg-gray-800 w-full max-w-2xl p-8 rounded shadow-lg text-white">

          <h1 className="text-3xl font-bold mb-6 border-b pb-2">
            Shopping List
          </h1>

          <NewItem onAddItem={handleAddItem} />

          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
          />

        </div>

        <MealIdeas ingredient={selectedItemName} />

      </div>

    </main>
  );
}