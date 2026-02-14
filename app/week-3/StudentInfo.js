import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="bg-slate-900 p-4 rounded-lg max-w-sm">
      <p className="text-xl mb-2">Name: firdowshadi</p>
      <p>
        GitHub: <Link href="https://github.com/hadi2002-web/cprg306-assignments" className="text-blue-400 underline italic">hadi2002-web/cprg306-assignments</Link>
      </p>
    </div>
  );
}
