"use client";
import { navLink } from "@/constants";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [show, setShow] = useState(false);
  function handleShow() {
    return setShow((prev) => !prev);
  }
  return (
    <nav className=" relative flex justify-between ">
      <h1 className="text-2xl font-bold">
        <Link href={"/"}>
          Mr. <span className="text-teal-500">Abdulrahman</span>
        </Link>
      </h1>
      {/* desktob nav */}
      <ul className=" gap-6 items-center hidden md:flex">
        {navLink.map((link) => (
          <li key={link.id} className="hover:underline">
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
      {/* mobile nav */}
      <IoMdMenu className="text-3xl md:hidden" onClick={handleShow} />
      <ul className="absolute -right-1  top-10 flex gap-3   md:hidden flex-col text-end">
        {show
          ? navLink.map((link) => (
              <li
                key={link.id}
                className="hover:underline p-2 text-center rounded-md bg-gray-500"
                onClick={handleShow}
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))
          : ""}
      </ul>
    </nav>
  );
}
