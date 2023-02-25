import { FaFacebookMessenger, FaInstagram, FaLinkedin } from "react-icons/fa";

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    name: "Messenger",
    url: "https://www.messenger.com/",
    icon: FaFacebookMessenger,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: FaLinkedin,
  },
];

export type SocialLink = (typeof socialLinks)[number];
