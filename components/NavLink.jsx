"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ children, href }) {
    const path = usePathname();
    const active = path === href;
    return (
        <Link className={active ? "font-bold" : ""} href={href}>{children}</Link>
    )
}