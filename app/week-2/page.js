import StudentInfo from "./StudentInfo";

export default function Page() {
  return (
    <main className="p-10 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <StudentInfo />
    </main>
  );
}