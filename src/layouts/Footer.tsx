import Link from "next/link";
import { FaFacebook, FaSnapchat, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="flex text-3xl gap-3 text-teal-500">
      <Link href={""} className="hover:text-white">
        <FaSnapchat />
      </Link>
      <Link href={""} className="hover:text-white">
        <FaFacebook />
      </Link>
      <Link href={""} className="hover:text-white">
        <FaTwitter />{" "}
      </Link>
    </footer>
  );
}
