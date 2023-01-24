"use client";

import { useState } from "react";
import HamburgerButton from "./hamburger-button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="isolate">
      <div className="fixed top-0 left-0 right-0 z-0 h-20 bg-black"></div>
      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </article>
  );
};
export default MobileNav;
