import ItemList from "./item-list";
import items from "./items.json";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>

      <div className="max-w-md mx-auto">
        <ItemList items={items} />
      </div>
    </main>
  );
}
