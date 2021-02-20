import Image from "next/image";
import { useState } from "react";
import {
  FaDiscord,
  FaGithub,
  FaPatreon,
  FaPaypal,
  FaTrophy,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiOctopusdeploy } from "react-icons/si";

const links = [
  {
    name: "email",
    left: "mailto:",
    right: "77@gmail.com",
    Icon: MdEmail,
  },
  {
    name: "twitter",
    left: "twitter.com/",
    right: "c",
    Icon: FaTwitter,
  },
  {
    name: "youtube",
    left: "youtube.com/c/",
    right: "",
    Icon: FaYoutube,
  },
  {
    name: "twitch",
    left: "twitch.tv/",
    right: "",
    Icon: FaTwitch,
  },
  {
    name: "github",
    left: "github.com/",
    right: "c",
    Icon: FaGithub,
  },
  {
    name: "challonge",
    left: "",
    right: "s.challonge.com",
    Icon: FaTrophy,
  },
  {
    name: "sendou.ink",
    left: "sendou.ink/u/",
    right: "",
    Icon: SiOctopusdeploy,
  },
  {
    name: "discord",
    left: "discord.gg/",
    right: "",
    Icon: FaDiscord,
  },
  {
    name: "patreon",
    left: "patreon.com/",
    right: "",
    Icon: FaPatreon,
  },
  {
    name: "paypal",
    left: "paypal.me/",
    right: "",
    Icon: FaPaypal,
  },
];

const LinkIcons = () => {
  const [iconHovered, setIconHovered] = useState({
    left: "",
    right: "",
  });
  return (
    <>
      <header className="font-bold text-4xl text-gray-600 mt-4">
        <Image
          className="inline object-cover w-48 h-48 rounded-full"
          src="/me.png"
          alt="Profile image"
          width={150}
          height={150}
        />
        <h1 className="hidden sm:block mt-3">
          <span className="invisible">{iconHovered.right}</span>
          <span>{iconHovered.left}</span>
          <span className="text-yellow-400">sendou</span>
          <span>{iconHovered.right}</span>
          <span className="invisible">{iconHovered.left}</span>
        </h1>
        <h1 className="block sm:hidden mt-3">
          <span className="text-yellow-400">sendou</span>
        </h1>
      </header>

      <div className="flex text-3xl mt-4">
        {links.slice(0, 5).map(({ Icon, name, ...link }) => (
          <a
            key={name}
            className="px-2 hover:text-yellow-400 cursor-pointer"
            href={`https://${link.left}sendou${link.right}`}
            onFocus={() => setIconHovered(link)}
            onBlur={() =>
              setIconHovered({
                left: "",
                right: "",
              })
            }
            onMouseEnter={() => setIconHovered(link)}
            onMouseLeave={() =>
              setIconHovered({
                left: "",
                right: "",
              })
            }
          >
            <Icon />
          </a>
        ))}
      </div>
      <div className="flex text-3xl mt-3">
        {links.slice(5).map(({ Icon, name, ...link }) => (
          <a
            key={name}
            className="px-2 hover:text-yellow-400 cursor-pointer"
            href={`https://${link.left}sendou${link.right}`}
            onFocus={() => setIconHovered(link)}
            onBlur={() =>
              setIconHovered({
                left: "",
                right: "",
              })
            }
            onMouseEnter={() => setIconHovered(link)}
            onMouseLeave={() =>
              setIconHovered({
                left: "",
                right: "",
              })
            }
          >
            <Icon />
          </a>
        ))}
      </div>
    </>
  );
};

export default LinkIcons;
