import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="text-lg">
      <p>Name: firdowshadi</p>
      <p>
        GitHub: <Link href="https://github.com/hadi2002-web/cprg306-assignments" className="text-blue-400 underline">hadi2002-web/cprg306-assignments</Link>
      </p>
    </div>
  );
}