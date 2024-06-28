import { navLink } from "@/constants";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between">
      <h1 className="text-5xl">LOGO</h1>
      <ul className="flex gap-6">
        {navLink.map((link) => (
          <li key={link.id}>
            <Link href={""} className="hover:underline">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
