import prisma from "@/lib/prisma";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {todoLists.map((todo) => (
          <div key={todo.id} className="bg-gray-800 p-4 relative">
            <button className="absolute top-4 right-4">X</button>
            <div className="space-y-4">
              <h1 className="text-2xl">{todo.todo}</h1>
              <p>{todo.date}</p>
            </div>
            <div className="mt-4">
              <button
                className="bg-amber-600 rounded-md hover:bg-amber-700 hover:text-slate-200 text-slate-100 px-6 py-2"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
