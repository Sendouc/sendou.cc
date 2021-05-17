import Article from "../components/Article";
import AuthorTime from "../components/AuthorTime";
import MyHead from "../components/MyHead";
import P from "../components/P";
import Title from "../components/Title";

const ModesArticlePage = () => {
  return (
    <>
      <MyHead title="In and out of the zone" />
      <Article>
        <Title>In and out of the zone</Title>
        <AuthorTime time={[2021, 4, 17]} />
        <P>
          What modes to play in competitive Splatoon has always been under
          debate. When I started organizing In The Zone the idea of playing
          Splat Zones only was a novel one in the west. In Splatoon 1 it was
          quite frankly the only option. Tower Control and Rainmaker were too
          easily abused. The improvements to them in Splatoon 2 made them
          competitively viable. Of course just because something is possible
          doesn't mean it should happen. In this post I wanted to say a few
          words on how I view the SZ only vs. SZ/TC/RM/CB ruleset debate.
        </P>
        <P>
          There are some clear merits when it comes to playing SZ only. The
          biggest of those is simply that it's the easiest ranked mode. This is
          also the biggest compliment I can give to the mode. Quite a few of the
          teams playing in the scrims or tournaments are just pickups thrown
          together. They haven't honed any specific strategies but rather rely
          on individual skill and general game knowledge to succeed. SZ is a
          mode almost every competitive player knows how to play on a basic
          level. The phases of a typical SZ match are well defined and everyone
          more or less has an idea of what they are supposed to be doing.
          Compare that to TC where even deciding who takes the tower can be a
          struggle with pick-ups. Don't even get me started on CB. Playing the
          easiest mode levels the playing field as teams that have more
          experience playing together don't have as big advantage as in the
          other modes.{" "}
        </P>
        <P>
          SZ only is also an easy focus to make. With that I mean take for
          example MakoMart. I'm pretty sure I have played MakoMart SZ many times
          over MakoMart TC, RM and CB combined. This ties to the so-called 92
          map problem where the amount of map and mode combinations to learn in
          this game is huge. So if we decide we are going to play just SZ that
          cuts it down to a much more manageable 23. This is on top of it being
          the easiest ranked mode like I mentioned earlier.
        </P>
        <P>
          One pitfall TC, RM and CB all share are the lull periods where one
          team is just defending their strong lead. There are some mechanics in
          the game to stop them from happening. They are things like pushing the
          tower in TC preventing the enemy gaining static special recharge or
          Rainmaker resetting. Yet the shift in the game is pretty easy to see
          once we move on from both teams still looking to make their big push
          compared to one team just stalling. Of course being able to stall is a
          privilege they have earned but they are still dull moments in the game
          for both teams.
        </P>{" "}
        <P>
          SZ does not have these lull periods. The winning team can never get
          comfortable. Comeback always feels possible as any hold can very well
          be the last one. One sided games end in a swift knockout. This is also
          distinct from other modes. There are other factors you can mention in
          favor of SZ only such as it's the chosen mode of Japan but I think
          what I mentioned above are by far the most important considerations.
        </P>
        <P>
          So does this mean we should all just switch to SZ only? Of course not.
          All of the ranked modes test different skills of the teams playing. In
          SZ a team who is really good at holding the middle of the map can be
          very good. In other modes just having this skill is not sufficient.
          Having a variety of modes in a set tests teams' skillsets and also
          strategics in interesting ways. There is also the spectator factor to
          consider. The way comebacks happen sometime in TC/RM/CB is just very
          entertaining for an average viewer. While not the most important
          factor, completely not considering spectator experience is foolish if
          we want to drive up viewership.
        </P>
        <P>
          To me this whole debate it is akin of asking should the distance
          sprinters run be 100 meters or 400? It's just not a choice we have to
          make. Both categories test different things. It's easy to organize
          events for both rulesets. People will continue practicing under both
          rulesets. In Splatoon as a competitor I want to be able to do well no
          matter the mode we are playing but if others have preferences then do
          whatever makes you happy. It's just a game after all. Tournament
          organizers will also keep organizing tournaments with the rulesets
          they want to. Things will naturally adjust towards whatever most
          people prefer.
        </P>
        <P>
          Currently this issue seems pretty divise with both rulesets having
          their own fanbase but it's interesting to see how it develops towards
          Splatoon 3 and beyond. Who knows what modes will look like in that
          game. Maybe in one year we will be arguing for Clam Blitz only.
        </P>
        <P></P>{" "}
      </Article>
    </>
  );
};

export default ModesArticlePage;
