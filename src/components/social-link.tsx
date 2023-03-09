import { SocialLink } from "@/data/social-links";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { IconType } from "react-icons";

interface Props {
  link: SocialLink;
}

const SocialLink: FC<Props> = ({ link }) => {
  const { name, url, icon } = link;
  const Icon = icon;
  return (
    <Link href={url}>
      <Icon className="h-6 w-6" />
    </Link>
  );
};
export default SocialLink;
