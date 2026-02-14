import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-10">Shopping List</h1>
      <NewItem />
    </main>
  );
}
