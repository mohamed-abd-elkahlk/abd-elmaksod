import Link from "next/link";
import { FaFacebook, FaInstagram, FaSnapchat } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="flex text-3xl gap-12 text-teal-500 md:justify-start items-center justify-center mt-6">
      <Link href={"/#"} className="hover:text-white">
        <FaSnapchat />
      </Link>
      <Link
        href={
          "https://www.facebook.com/profile.php?id=100057587073431&mibextid=ZbWKwL"
        }
        target="_blank"
        className="hover:text-white"
      >
        <FaFacebook />
      </Link>
      <Link
        href={
          "https://www.instagram.com/cr7.12072004?utm_source=qr&igsh=ZDNrazF4ZzdxaWd1"
        }
        target="_blank"
        className="hover:text-white"
      >
        <FaInstagram />{" "}
      </Link>
    </footer>
  );
}
