import Button from "./button";
import { FaLinkedinIn, FaInstagram, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
        </Button>
      ))}
    </div>
  );
}

const socials = [
  {
    icon: <FaXTwitter className="w-5 h-5" />,
    link: "https://x.com/lungelopackery",
    username: "@lungelopackery",
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/lungelo-packery",
    username: "Lungelo Packery",
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    link: "https://www.github.com/lungelo63",
    username: "Lungelo63",
  },
];