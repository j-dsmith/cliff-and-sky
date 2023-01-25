"use client";

import { navLinks } from "@/data/nav-links";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="hidden gap-10 text-xl md:flex">
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
