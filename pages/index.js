import Head from "next/head";
import {
  FaDiscord,
  FaGithub,
  FaPatreon,
  FaTrophy,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiOctopusdeploy } from "react-icons/si";
import Image from "next/image";
import { useState } from "react";

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
];

export default function Home() {
  const [iconHovered, setIconHovered] = useState({
    left: "",
    right: "",
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>sendou</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <header>
          <Image
            className="inline object-cover w-48 h-48 rounded-full"
            src="/me.png"
            alt="Profile image"
            width={150}
            height={150}
          />
          <h1 className="font-bold text-4xl mt-3 text-gray-600">
            <span className="invisible">{iconHovered.right}</span>
            <span>{iconHovered.left}</span>
            <span className="text-yellow-400">sendou</span>
            <span>{iconHovered.right}</span>
            <span className="invisible">{iconHovered.left}</span>
          </h1>
        </header>

        <div className="flex text-3xl mt-4">
          {links.map(({ Icon, name, ...link }) => (
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

        <section className="mt-8 max-w-md container">
          Hey! My name is Kalle but most people probably know me as Sendou. I
          study computer science and work as a full-stack web developer at the
          University of Helsinki.
          <br />
          <br />
          Competitive Splatoon has been my thing since it was released in 2015.
          I have won various prestigious tournaments and was{" "}
          <a className="text-yellow-400" href="/ghost.jpeg">
            signed as a pro player to an esports organization for a year.
          </a>
          <br />
          <br /> I'm also deeply involved with tournament organizing and other
          community building efforts. Even found myself{" "}
          <a
            className="text-yellow-400"
            href="https://youtu.be/rFXiU29TPK0?t=1418"
          >
            casting Splatoon European Championships 2018
          </a>{" "}
          live in Switzerland.
        </section>
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
    </div>
  );
}
