type NavLink = {
  name: "Projects" | "Store" | "About";
  url: "/" | "/about" | "/store";
};

export const navLinks: NavLink[] = [
  { name: "Projects", url: "/" },
  { name: "Store", url: "/about" },
  { name: "About", url: "/store" },
];
