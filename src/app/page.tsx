import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-purple-200 min-h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-6xl font-bold">Welcome to Todo App</h1>
      <h2 className="text-3xl font-bold">Here you can add your Todo list</h2>
      <Link href="/todo"className="bg-slate-400 px-4 py-2 text-white rounded hover:bg-slate-500 transition duration-300">
          Get Started
        
      </Link>
    </div>
  );
}

