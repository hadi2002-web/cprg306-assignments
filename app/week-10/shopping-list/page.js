"use client";

import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";

import { getItems, addItem } from "../_services/shopping-list-service";

import { auth } from "../../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    async function loadItems() {
      const data = await getItems(user.uid);
      setItems(data);
    }

    loadItems();
  }, [user]);

  async function handleAddItem(newItem) {
    const id = await addItem(user.uid, newItem);
    setItems([...items, { id, ...newItem }]);
  }

  function handleItemSelect(item) {
    let cleanedName = item.name.split(",")[0].trim();

    cleanedName = cleanedName.replace(
      /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu,
      ""
    );

    setSelectedItemName(cleanedName);
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-black-700 flex justify-center items-start pt-10">
        <p className="text-white">Please sign in to view your shopping list.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black-700 flex justify-center items-start pt-10">
      <div className="flex gap-10">
        <div className="bg-gray-800 w-full max-w-2xl p-8 rounded shadow-lg text-white">
          <h1 className="text-3xl font-bold mb-6 border-b pb-2">
            Week 10 Shopping List
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