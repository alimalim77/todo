"use client";
import Input from "./Input";
import { useRouter } from "next/navigation";

export default function FormTodo() {
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: formdata.get("todo"),
        date: formdata.get("date"),
        time: formdata.get("time"),
      }),
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
    e.target.reset();
    router.push("/todo-list");
  }
  return (
    <div className="grid grid-cols-1 sapce-x-4 place-items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-4 w-[80vw] md:w-[40vw]"
      >
        <div className="flex flex-col gap-4">
          <label className="text-slate-100">Title</label>
          <Input name="todo" type="todo" placeholder="add your text" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-slate-100">Title</label>
          <Input name="date" type="date" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-slate-100">Title</label>
          <Input name="time" type="time" placeholder="add your time" />
        </div>
        <div className="text-center pt-6">
          <button
            className="bg-amber-600 rounded-md hover:bg-amber-700 hover:text-slate-200 text-slate-100 px-6 py-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
