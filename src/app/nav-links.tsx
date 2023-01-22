"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  name: "Projects" | "Store" | "About";
  url: "/" | "/about" | "/store";
};

const NavLinks = () => {
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: "Projects", url: "/" },
    { name: "Store", url: "/about" },
    { name: "About", url: "/store" },
  ];
  return (
    <ul className="flex gap-10 text-xl">
      {navLinks.map(({ name, url }) => (
        <li
          key={name}
          className={clsx(
            "cursor-pointer text-2xl font-light transition-colors duration-300 ease-in-out hover:text-black",
            pathname === url ? "text-black" : "text-gray-400"
          )}
        >
          <Link href={url}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
