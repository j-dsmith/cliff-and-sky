import { FC, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import MobileNav from "@/components/mobile-nav";
import NavLinks from "@/components/nav-links";

type HeaderVariantProps = VariantProps<typeof headerClasses>;

interface HeaderProps
  extends HTMLAttributes<HTMLDivElement>,
    Required<Pick<HeaderVariantProps, "theme">> {}

const headerClasses = cva(["flex", "h-20", "items-center", "justify-between", "px-6", "md:px-16"], {
  variants: {
    theme: {
      dark: ["bg-black"],
      light: ["bg-white"],
    },
  },
});
const Header: FC<HeaderProps> = ({ className, theme, ...props }) => {
  return (
    <header className={headerClasses({ theme, className })} {...props}>
      {/* Todo: add logo */}
      <div className=""></div>
      <NavLinks />
      <MobileNav theme={theme} />
    </header>
  );
};

export default Header;
