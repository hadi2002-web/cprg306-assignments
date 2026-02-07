export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-zinc-950 p-4 rounded-lg shadow-md border border-zinc-800">

         <p className="text-lg font-bold text-white">{name}</p>
      <p className="text-slate-300">Buy {quantity} in {category}</p>
    </li>
  );
}
