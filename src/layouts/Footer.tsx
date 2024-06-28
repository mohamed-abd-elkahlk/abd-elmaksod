import Link from "next/link";
import { FaFacebook, FaSnapchat, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="flex text-3xl gap-12 text-teal-500 md:justify-start items-center justify-center mt-6">
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
