import { FC } from "react";
import { navLinks } from "@/data/nav-links";
import { socialLinks } from "@/data/social-links";
import Link from "next/link";
import ArrowLink from "./arrow-link";
import SocialLink from "./social-link";
import clsx from "clsx";
import { cva } from "class-variance-authority";

const footerClasses = cva(["flex", "flex-col", "justify-center", "gap-1", "px-8", "py-32"], {
  variants: {
    theme: {
      dark: ["text-white", "bg-black"],
      light: ["text-black", "bg-white"],
    },
  },
  defaultVariants: {
    theme: "dark",
  },
});

const Footer: FC<{ theme: "dark" | "light" }> = ({ theme }) => {
  return (
    <section className={footerClasses({ theme })}>
      <p className="font-walsheim text-4xl font-bold uppercase">Have An Idea?</p>

      <div className="flex items-center justify-between">
        <p className="text-2xl font-thin">Let&apos;s Connect!</p>
        <ArrowLink url="/contact" className="h-14 w-14 text-3xl" outline={true} />
      </div>
      <ul className="mt-8 flex items-center justify-between border-b border-white pb-8">
        {navLinks.map(({ name, url }) => (
          <li key={name}>
            <Link href={url} className="uppercase">
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 mb-8 flex gap-4">
        {socialLinks.map((link) => (
          <SocialLink key={link.name} link={link} />
        ))}
      </div>

      <p className="text-xs">
        I respectfully acknowledge that I create on the traditional and ancestral homelands of the
        Očhéthi Šakówiŋ (Sioux Nation), and Wahpekute (Dakota) people.
      </p>
    </section>
  );
};
export default Footer;
