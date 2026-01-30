export default function GroceryItem({ name, quantity, category }) {
  return (
    <li className="border border-white p-2 mb-4 bg-black max-w-sm list-none">
      <h2 className="text-lg font-bold text-white">{name}</h2>
      <div className="text-sm text-white">
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </div>
    </li>
  );
}