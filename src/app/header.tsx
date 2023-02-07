import MobileNav from "@/app/components/mobile-nav";
import NavLinks from "@/app/components/nav-links";

const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between px-8 md:px-16">
      {/* Todo: add logo */}
      <div className=""></div>
      <NavLinks />
      <MobileNav />
    </header>
  );
};

export default Header;
