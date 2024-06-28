import { navLink } from "@/constants";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between">
      <h1 className="text-5xl font-bold">
        <Link href={"/"}>
          Mr. <span className="text-teal-500">Abdulrahman</span>
        </Link>
      </h1>
      <ul className="flex gap-6 items-center">
        {navLink.map((link) => (
          <li key={link.id} className="hover:underline">
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
