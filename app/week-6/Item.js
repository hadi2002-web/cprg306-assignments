export default function Item({ name, quantity, category }) {
  return (
    <div className="bg-white text-black p-4 rounded mb-4">
       <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
   <p>Category: {category}</p>
    </div>
  );
}