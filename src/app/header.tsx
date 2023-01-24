import HamburgerButton from "./hamburger-button";
import MobileNav from "./mobile-nav";
import NavLinks from "./nav-links";

const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between px-16">
      {/* Todo: add logo */}
      <div className=""></div>
      <NavLinks />
      <MobileNav />
    </header>
  );
};

export default Header;
