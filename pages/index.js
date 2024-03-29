import Head from "next/head";
import LinkIcons from "../components/LinkIcons";
import MyHead from "../components/MyHead";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <MyHead />

      <main className="flex flex-col items-center justify-center flex-1 mx-4 mb-4 text-center">
        <LinkIcons />
        <section className="container max-w-md mt-8">
          Hey! My name is Kalle but most people probably know me as Sendou. I
          study computer science at the University of Helsinki and work as a
          full-stack web developer.
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
    </div>
  );
}
