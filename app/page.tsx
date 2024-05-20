import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-2 justify-center items-center p-24">
      <h3>Templete author</h3><Link href="https://github.com/devjuaneid" className="text-orange-600 font-bold">devjuaneid</Link>
   </main>
  );
}
