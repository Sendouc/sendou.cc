import Head from "next/head";
import Parser from "rss-parser";
import DividerWithText from "../components/DividerWithText";
import LinkIcons from "../components/LinkIcons";
import Image from "next/image";
import { FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

const parserYoutube = new Parser({
  customFields: {
    item: ["media:group", "media:group", { keepArray: true }],
  },
});

const parserTwitch = new Parser();

const YOUTUBE_RSS_FEED =
  "https://www.youtube.com/feeds/videos.xml?channel_id=UCWbJLXByvsfQvTcR4HLPs5Q";

const TWITCH_RSS_FEED = "https://twitchrss.appspot.com/vodonly/sendou";

export default function Home({ youtubeVideo, twitchVideo }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>sendou</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 text-center mx-4">
        <LinkIcons />
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

        {/* <DividerWithText>CONTENT</DividerWithText>
        <div className="flex flex-wrap mt-8 text-sm">
          <a href={youtubeVideo.link}>
            <div className="flex w-60 h-52 mx-4">
              <div className="bg-yellow-400 text-black rounded-md">
                <div className="flex mx-auto font-bold flex items-center justify-center">
                  <FaYoutube className="mr-1" />
                  YouTube
                </div>
                <Image src={youtubeVideo.thumbnail} width={256} height={144} />
                <div className="h-11 flex justify-center items-center">
                  {youtubeVideo.title}
                </div>
              </div>
            </div>
          </a>

          <a href={twitchVideo.link}>
            <div className="flex w-60 h-52 mx-4">
              <div className="bg-yellow-400 text-black rounded-md">
                <div className="flex mx-auto font-bold flex items-center justify-center">
                  <FaTwitch className="mr-1" />
                  Twitch
                </div>
                <Image src={twitchVideo.thumbnail} width={256} height={144} />
                <div className="h-11 flex justify-center items-center">
                  {twitchVideo.title}
                </div>
              </div>
            </div>
          </a>
        </div>

        <DividerWithText>COMMITS</DividerWithText> */}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const feedYoutube = await parserYoutube.parseURL(YOUTUBE_RSS_FEED);
  const youtubeVideo = {
    title: feedYoutube.items[0].title,
    thumbnail: feedYoutube.items[0]["media:group"]["media:thumbnail"][0][
      "$"
    ].url.replace("hqdefault", "maxresdefault"), // width 480 height 360
    link: feedYoutube.items[0].link,
  };

  const feedTwitch = await parserTwitch.parseURL(TWITCH_RSS_FEED);
  console.log({ feedTwitch: feedTwitch.items[0] });
  const twitchVideo = {
    title: feedTwitch.items[0].title,
    // thumbnail: feedTwitch.items[0].content,
    thumbnail:
      "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/173f356cbc8d5665ce57_sendou_40561091149_1613162501//thumb/thumb0-640x360.jpg",
    link: feedTwitch.items[0].link,
  };

  return { props: { youtubeVideo, twitchVideo } };
};
