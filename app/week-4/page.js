import ItemList from "./item-list";
import items from "./items.json";


export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center"> Shopping List
      </h1>
      <p className="text-center text-zinc-400 mb-6">
  GitHub: https://github.com/hadi2002-web/cprg306-assignments.git <br />
  Vercel: https://cprg306-assignments-zeta-dusky.vercel.app?_vercel_share=yZPkBVwfHDPZmAfrcoA49krJYRRTHa7i
</p>

<p className="max-w-md mx-auto text-zinc-300 mb-6">
  Summary: This page renders a list of items using map(), loads the data from a JSON
  file, and passes props into a reusable Item component.
</p>


      <div className="max-w-md mx-auto">
        <ItemList items={items} />
      </div>
    </main>
  );
}
