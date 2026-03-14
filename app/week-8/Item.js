export default function Item({ name, quantity, category, onSelect }) {

    return (
    <div
        onClick={() => onSelect({ name, quantity, category })}
      className="bg-white text-black p-4 rounded mb-4 cursor-pointer"
    >
      <p className="font-semibold">{name}</p>
          <p>Quantity: {quantity}</p>
       <p>Category: {category}</p>
 </div>
  );

}