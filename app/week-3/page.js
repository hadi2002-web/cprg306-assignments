import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="bg-black min-h-screen p-6 flex flex-col items-center">
        <div className="w-full max-w-sm">
        <h1 className="text-1xl font-bold text-white mb-6">Shopping List</h1>
        <GroceryItemList />
      </div>
    </main>
  );
}