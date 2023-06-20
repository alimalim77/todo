import Link from "next/link";
import "./global.css";
import NavLink from "@/components/NavLink";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          charset="
        UTF-8"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TodoList</title>
      </head>
      <body className="bg-black">
        <nav className="p-4 border-b border-gray-600">
          <ul className="text-white text-lg space-x-4">
            <NavLink href="/" >Home </NavLink>
            <NavLink href="/todo-list">TodoLists</NavLink>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
