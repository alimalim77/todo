import prisma from "@/lib/prisma";
import Card from "@/components/Card";

async function getTodoLists() {
  const data = await prisma.todo.findMany({
    select: {
      id: true,
      todo: true,
      date: true,
    },
  });
  return data;
}

export default async function TodoLists() {
  const todoLists = await getTodoLists();
  console.log(todoLists);
  return (
    <div className="p-4 text-slate-400 space-y-4">
      <h1 className="text-xl">TodoLists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"></div>
      <Card todoLists={todoLists} />
    </div>
  );
}
