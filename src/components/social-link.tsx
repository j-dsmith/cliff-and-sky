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
      <Icon className="h-5 w-5" />
    </Link>
  );
};
export default SocialLink;
