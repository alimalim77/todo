"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Card({ todoLists }) {
  const router = useRouter();

  async function delTodo(id) {
    const res = await fetch(`api/todos/${id}`, { method: "DELETE" });
    const data = await res.json();
    console.log(res);
    console.log(data);
    router.refresh();
  }

  return todoLists.map((todo) => (
    <div key={todo.id} className="bg-gray-800 p-4 relative">
      <button
        className="absolute top-4 right-4"
        onClick={() => delTodo(todo.id)}
      >
        X
      </button>
      <div className="space-y-4">
        <h1 className="text-2xl">{todo.todo}</h1>
        <p>{todo.date}</p>
      </div>
      <div className="mt-4">
        <Link
          className="bg-amber-600 rounded-md hover:bg-amber-700 hover:text-slate-200 text-slate-100 px-6 py-2"
          href={`/todo-list/${todo.id}`}
        >
          Detail
        </Link>
      </div>
    </div>
  ));
}
