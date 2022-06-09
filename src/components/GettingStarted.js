import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";

//img
import rustbg from "../images/rustbg.png";
import search from "../images/search.png";
import gettingstarted from "../images/start.png";
import vitals from "../images/vitals.jpg";
import pwood from "../images/pwood.png";
import prock from "../images/prock.png";
import psulf from "../images/psulf.png";
import pmetal from "../images/pmetal.png";
import treechop from "../images/treechop.png";
import stonechop from "../images/stonechop.png";
import hemp from "../images/hmpers.png";
import stonehatchet from "../images/stonehatchet.png";
import stonepick from "../images/stonepick.png";
import woodspear from "../images/woodspear.png";
import bow from "../images/bow.png";
import boneknife from "../images/boneknife.png";
import sleepingbag from "../images/sleepingbag.png";
import building from "../images/building.png";
import toolcup from "../images/toolcup.png";
import lock from "../images/lock.png";
import bp from "../images/bp.png";
import hammer from "../images/hammer.png";
import rightwall from "../images/rightwall.png";
import leftwall from "../images/wrongwall.png";
import basedone from "../images/basedone.png";
//data
import { starterTools } from "../data";

const GettingStarted = () => {
  return (
    <>
      <StyledMain>
        <img src={rustbg} alt="rustbg" />
      </StyledMain>
      <StyledGrid>
        <StyledNav>
          <Nav />
        </StyledNav>
        <StyledSearchBarImg>
          <img src={search} alt="Search" />
        </StyledSearchBarImg>
        <StyledMainContent>
          <StyledGuides>
            <StyledInfo1>
              <StyledTitle>
                <h2>Getting Started in Rust</h2>
              </StyledTitle>
              <StyledImage>
                <img src={gettingstarted} alt="Getting started in Rust" />
              </StyledImage>
              <StyledDescHeader>
                <h3>Waking Up</h3>
              </StyledDescHeader>
              <StyledDescHeader>
                <p>
                  Rust is brutal and unforgiving, no tutorial, no directions,
                  just a world to explore and survive in. You will have to find
                  food, water, and shelter. When you spawn in Rust for the first
                  time, you find yourself on a beach with nothing but a rock and
                  a torch. Let’s take a look at those two tools.
                </p>
              </StyledDescHeader>
            </StyledInfo1>
            <StyledInfo2>
              <StyledTitle>
                <h3>Starter Tools</h3>
              </StyledTitle>
              {starterTools.map((s) => (
                <StyledToolCard key={s.title}>
                  <StyledToolImg>
                    <img src={s.img} alt={s.title} />
                  </StyledToolImg>
                  <StyledToolTitle>
                    <h4>{s.title}</h4>
                  </StyledToolTitle>
                  <StyledToolDesc>
                    <p>{s.description}</p>
                  </StyledToolDesc>
                </StyledToolCard>
              ))}
            </StyledInfo2>
            <StyledInfo3>
              <StyledTitle>
                <h3>Vitals</h3>
              </StyledTitle>
              <StyledImage>
                <img src={vitals} alt="Rust Vitals" />
              </StyledImage>
              <StyledDescHeader>
                <p>
                  In the bottom right corner of your screen you can see your
                  health bar, food bar and thirst bar. If the food or thirst bar
                  go below 40, you will start to lose health. If the life bar
                  goes to zero, you will die. To heal, you need to get your
                  thirst bar over 40 and your hunger bar over 100.
                </p>
              </StyledDescHeader>
            </StyledInfo3>
            <StyledInfo4>
              <StyledTitle>
                <h3>Equipment and Gathering</h3>
              </StyledTitle>
              <StyledTitle>
                <p>
                  As you can see, your equipment is not really overwhelming yet.
                  To get better tools, start collecting wood and stone. There
                  are two ways to do this:
                </p>
              </StyledTitle>
              <StyledTitle>
                <p style={{ marginLeft: "15px" }}>
                  1. You can pick up small quantities (50) of wood, stone,
                  sulfur ore and metal ore from the ground.
                </p>
              </StyledTitle>
              <StyledImageGrid>
                <StyledImage>
                  <img src={pwood} alt="Wood" />
                </StyledImage>
                <StyledImage>
                  <img src={prock} alt="Rock" />
                </StyledImage>
                <StyledImage>
                  <img src={psulf} alt="Sulfur" />
                </StyledImage>
                <StyledImage>
                  <img src={pmetal} alt="Metal" />
                </StyledImage>
              </StyledImageGrid>
              <StyledTitle>
                <p style={{ marginLeft: "15px" }}>
                  2. You can chop down trees, stone nodes and ore nodes with
                  your rock. As you might notice, a red X will appear on the
                  tree after you hit it the first time. If you hit that, you
                  will get done faster. It’s the same for nodes, just not with
                  an X. Instead, you will see a sparkling spot.
                </p>
              </StyledTitle>
              <StyledImageGrid2>
                <StyledImage>
                  <img src={treechop} alt="wood" />
                </StyledImage>
                <StyledImage>
                  <img src={stonechop} alt="stone" />
                </StyledImage>
              </StyledImageGrid2>
              <StyledTitle>
                <p>
                  You will also need cloth, which you can obtain by picking up
                  hemp plants.
                </p>
              </StyledTitle>
              <StyledImage>
                <img src={hemp} alt="Hemp" />
              </StyledImage>
              <StyledTitle>
                <p>
                  As you will notice, farming stuff with the rock is not really
                  a matter of seconds. Your primary goal should therefore be to
                  get better, more specialized weapons and tools, such as:
                </p>
              </StyledTitle>
              <StyledToolsGrid>
                <StyledToolCard>
                  <StyledToolImg>
                    <img src={stonehatchet} alt="Stone Hatchet" />
                  </StyledToolImg>
                  <StyledToolTitle>
                    <h4>Stone Hatchet</h4>
                  </StyledToolTitle>
                  <StyledToolDesc>
                    Crafting Cost: 200 wood, 100 stone The stone hatchet chops
                    down trees a lot faster than the rock. It is also better at
                    chopping up dead animals (or people).
                  </StyledToolDesc>
                </StyledToolCard>
                <StyledToolCard>
                  <StyledToolImg>
                    <img src={stonepick} alt="Stone Pickaxe" />
                  </StyledToolImg>
                  <StyledToolTitle>
                    <h4>Stone Pickaxe</h4>
                  </StyledToolTitle>
                  <StyledToolDesc>
                    Crafting Cost: 200 wood, 100 stone The stone pickaxe is good
                    for farming stone, metal ore and sulfur ore. It’s also a
                    better weapon than the rock.
                  </StyledToolDesc>
                </StyledToolCard>
                <StyledTitle>
                  <p>
                    Rust is a brutal game, so you will need something to defend
                    yourself. There are two main weapons at the start:
                  </p>
                </StyledTitle>
                <StyledToolCard>
                  <StyledToolImg>
                    <img src={woodspear} alt="Wooden Spear" />
                  </StyledToolImg>
                  <StyledToolTitle>
                    <h4>Wooden Spear</h4>
                  </StyledToolTitle>
                  <StyledToolDesc>
                    <p>
                      Crafting Cost: 300 wood You can either throw this spear or
                      use it to poke holes into something. Be careful when
                      throwing though, since whatever you threw it at might
                      decide to run away with it or even throw it back at you.
                    </p>
                  </StyledToolDesc>
                </StyledToolCard>
                <StyledTitle>
                  <p>
                    PRO TIP: Usually, attacking an animal with a melee weapon
                    isn’t the best idea. There is a trick though: If you manage
                    to make an animal follow you into shallow water, it will
                    become very slow. Since the poking range of the spear is
                    greater than the attack range of all animals in Rust, you
                    can safely kill it without getting hurt.{" "}
                  </p>
                </StyledTitle>
                <StyledToolCard>
                  <StyledToolImg>
                    <img src={bow} alt="Hunting Bow" />
                  </StyledToolImg>
                  <StyledToolTitle>
                    <h4>Hunting Bow</h4>
                  </StyledToolTitle>
                  <StyledToolDesc>
                    <p>
                      Crafting Cost: 200 wood, 50 cloth (+ 25 wood, 10 stone per
                      2 wooden arrows) You have to get good with this weapon. It
                      is THE main weapon for the first day in Rust. It shoots
                      arrows at short to medium distance. You can kill most
                      animals with 3-4 shots; only bears are quite dangerous
                      because they take 8 hits before going down. They are also
                      very aggressive and will try to kill you, so try to get to
                      a safe place (a high rock, shallow water or any kind of
                      building block) before shooting at it.
                    </p>
                  </StyledToolDesc>
                </StyledToolCard>
                <StyledTitle>
                  <p>
                    As soon as you have killed your first animals/people, chop
                    them up using your tools (or your rock if you don’t have any
                    other tools yet). Try to get at least 30 bone fragments. You
                    can also crush human skulls to get 20 bone fragments by
                    selecting them in your inventory and then pressing “Crush
                    skull”.
                  </p>
                </StyledTitle>
                <StyledToolCard>
                  <StyledToolImg>
                    <img src={boneknife} alt="Bone knife" />
                  </StyledToolImg>
                  <StyledToolTitle>
                    <h4>Bone knife</h4>
                  </StyledToolTitle>
                  <StyledToolDesc>
                    <p>
                      Crafting Cost: 30 bone fragments The bone knife is a great
                      tool for chopping up dead bodies. It gives you maximum
                      resources. Always try to get it as soon as possible, since
                      chopping up bodies with stone tools or your rock will
                      waste some of the bodies resources.
                    </p>
                  </StyledToolDesc>
                </StyledToolCard>
                <StyledTitle>
                  <p>
                    By killing animals you will also obtain some other
                    resources, namely:
                  </p>
                </StyledTitle>
                <StyledTitle>
                  <ul>
                    <li>Leather: Used to craft clothes</li>
                    <li>Animal fat: Used to craft Low grade fuel</li>
                    <li>
                      Cloth: Used for crafting bows, sleeping bags and clothes
                    </li>
                    <li>
                      Bone fragments: Used for crafting bone knives, bone clubs
                      or bone armor
                    </li>
                  </ul>
                </StyledTitle>
              </StyledToolsGrid>
            </StyledInfo4>
            <StyledInfo5>
              <StyledTitle>
                <h3>Bulding</h3>
              </StyledTitle>
              <StyledImage>
                <img src={building} alt="Building in Rust" />
              </StyledImage>
              <StyledTitle>
                <p>
                  Now that you have your basic equipment, it’s time to settle
                  down.
                </p>
              </StyledTitle>
              <StyledTitle>
                <h4>Base location</h4>
              </StyledTitle>
              <StyledTitle>
                <p>
                  For your first base, you are looking for an area with a lot of
                  resources, mainly wood. If there are no trees, go somewhere
                  else, because you will need a lot of wood. You will also need
                  stone, so don’t forget about that either. But there are some
                  other things you should have in mind as well:
                </p>
              </StyledTitle>
              <StyledTitle>
                <p style={{ marginLeft: "15px" }}>
                  Climate: If you are planning to build in the snow biome, have
                  in mind that it is quite cold there during the day and
                  frickin’ freezing during the night. To stay alive during that
                  time you will either need to stand next to a fire or wear a
                  lot of clothes.
                </p>
              </StyledTitle>
              <StyledTitle>
                <p style={{ marginLeft: "15px" }}>
                  Roads: Settling next to a road enables you to farm barrels and
                  loot crates on the street. That will be very helpful when you
                  are trying to find new stuff and progress in the game. It will
                  also attract other people though, so my advice would be to
                  build at a spot that is close to the road but not visible from
                  there.
                </p>
              </StyledTitle>
              <StyledTitle>
                <p style={{ marginLeft: "15px" }}>
                  Ocean: Same as with roads, you can farm barrels and crates on
                  the ocean. You will need a boat and low grade fuel for that.
                </p>
              </StyledTitle>
              <StyledTitle>
                <p style={{ marginLeft: "15px" }}>
                  Monuments: Those are relics of past glory on the island.
                  Examples would be the Power Plant, Launch site or Oxum’s gas
                  station. You can find them on your map. They provide you with
                  a lot of loot but also with potentially unwanted attention
                  since Monuments are natural hotspots in Rust. Some of them
                  might also be irradiated, so if you are not sufficiently
                  clothed and you hear the ticking of a Geiger-Counter, turn
                  around, or you will die from radiation. The main thing that
                  monuments have to offer though is a Recycler. It enables you
                  to grind down items and components to gather raw materials
                  such as scrap, metal fragments and cloth. This is VERY
                  important, especially later in the game when you need scrap to
                  research stuff.
                </p>
              </StyledTitle>
              <StyledTitle>
                <p>
                  Now that you have decided on a location, you will need the
                  following.
                </p>
              </StyledTitle>
              <StyledToolCard>
                <StyledToolImg>
                  <img src={sleepingbag} alt="Sleeping Bag" />
                </StyledToolImg>
                <StyledToolTitle>
                  <h4>Sleeping Bag</h4>
                </StyledToolTitle>
                <StyledToolDesc>
                  <p>
                    Crafting Cost: 30 cloth. By placing a sleeping bag you set
                    your respawn location. When you die, you can choose in which
                    sleeping bag you want to wake up, or if you want to respawn
                    in a random location. Upon placing, you will have to wait 5
                    minutes to be able to respawn there. This so called “bag
                    timer” resets every time you spawn in it. If two sleeping
                    bags are too close (20m or less), BOTH sleeping bags will
                    rest their timer when you spawn in one of them. So always
                    try to keep a healthy distance between them. Place this
                    sleeping bag somewhere around the spot you want to build at.
                    Nothing is more annoying than farming up materials for your
                    base, getting killed by a bear and then having to run across
                    the whole map to get it back. Or to find you have already
                    been looted.
                  </p>
                </StyledToolDesc>
              </StyledToolCard>
              <StyledTitle>
                <p>
                  Proceed to farm materials for the base. Your first base will
                  probably be a 2x1 or a 2x2 (meaning 2x2 square foundations or
                  2x1 square foundations). It’s very important that it includes
                  a triangle airlock at the entrance to prevent people from
                  getting into your base when they kill you at the entrance.{" "}
                </p>
              </StyledTitle>
              <StyledTitle>
                <p>
                  3k wood and around 5k stone should be enough for the start.
                  While farming you can already start to craft:{" "}
                </p>
              </StyledTitle>
              <StyledTitle>
                <ul>
                  <li>1 Tool Cupboard</li>
                  <li>3 key locks</li>
                  <li>2 doors</li>
                  <li>1 building plan and </li>
                  <li>1 hammer.</li>
                </ul>
              </StyledTitle>
              <StyledToolCard>
                <StyledToolImg>
                  <img src={toolcup} alt="Tool Cupboard" />
                </StyledToolImg>
                <StyledToolTitle>
                  <h4>Tool Cupboard</h4>
                </StyledToolTitle>
                <StyledToolDesc>
                  <p>
                    Crafting Cost: 1000 wood. You place it inside your base and
                    authorize on it. Only people who do that will be able to
                    add/change things on your base. It also holds the resources
                    necessary to upkeep the base. It will show you what
                    materials it needs to keep the base from decaying. Securing
                    it is very important, so I advise to secure it with a lock.
                  </p>
                </StyledToolDesc>
              </StyledToolCard>
              <StyledToolCard>
                <StyledToolImg>
                  <img src={lock} alt="Key/Code Lock" />
                </StyledToolImg>
                <StyledToolTitle>
                  <h4>Key Lock or Code Lock</h4>
                </StyledToolTitle>
                <StyledToolDesc>
                  <p>
                    Crafting cost: 100 wood/100 metal fragments. If you are
                    playing solo, the key lock is the way to go. You just put it
                    onto your TC, doors or boxes, lock it and you are done.
                    DON’T CRAFT A KEY! It is not necessary, but very dangerous
                    since anyone who kills you will gain access to your goods.
                    If you are playing with other people, try to get 100 metal
                    fragments as soon as possible, place the code lock and lock
                    it with a suitable code. Once you have entered the code, you
                    don’t ever have to put it in again.
                  </p>
                </StyledToolDesc>
              </StyledToolCard>
              <StyledToolCard>
                <StyledToolImg>
                  <img src={bp} alt="Building Plan" />
                </StyledToolImg>
                <StyledToolTitle>
                  <h4>Building Plan</h4>
                </StyledToolTitle>
                <StyledToolDesc>
                  <p>
                    Crafting Cost: 20 wood. Used to build structures out of
                    twig, which is very fragile. You should upgrade it right
                    away with Hammer.
                  </p>
                </StyledToolDesc>
              </StyledToolCard>
              <StyledToolCard>
                <StyledToolImg>
                  <img src={hammer} alt="Hammer" />
                </StyledToolImg>
                <StyledToolTitle>
                  <h4>Hammer</h4>
                </StyledToolTitle>
                <StyledToolDesc>
                  <p>Crafting Cost: 100 wood. You can use it to:</p>
                  <br />
                  <p>
                    Upgrade building parts by looking at them, holding right
                    click and selecting the future grade
                  </p>
                  <br />
                  <p>
                    Rotate building parts that have been placed in the last 10
                    minutes by holding right click and selecting “Rotate”. This
                    is very important since all building blocks have a soft and
                    a hard side. It’s much easier to break them from the soft
                    side, so make sure the strong side is facing outwards. (Only
                    relevant for walls, door frames, etc., since you can’t place
                    a foundation or ceiling the wrong way round.)
                  </p>
                  <br />
                  <p>
                    Repair damaged building parts >30 seconds after they have
                    been damaged.
                  </p>
                  <br />
                  <p>
                    Destroy building parts that have been placed in the last 10
                    minutes by holding right click and selecting “Destroy”. Only
                    works if you already have a TC
                  </p>
                  <br />
                  <p>Pick up items like furnaces, boxes etc.</p>
                </StyledToolDesc>
              </StyledToolCard>
              <StyledImageGrid2>
                <StyledImage>
                  <img src={rightwall} alt="Correct wall placement" />
                </StyledImage>
                <StyledImage>
                  <img src={leftwall} alt="Softsided Wall" />
                </StyledImage>
              </StyledImageGrid2>
              <StyledTitle>
                <p>
                  Now go to the spot where you would like to build, equip your
                  building plan and build your home by holding right-click,
                  selecting what you want to build and then placing it. Note
                  that you cannot build too close to monuments or other bases.
                  Make sure to include an airlock. That means a triangle
                  foundation with two door frames and a wall. If you open one of
                  the doors you automatically block the other doorway, which
                  prevents people from jumping in.{" "}
                </p>
              </StyledTitle>
              <StyledImage>
                <img src={basedone} alt="Airlock" />
              </StyledImage>
              <StyledTitle>
                <p>
                  As soon as you are done (don’t forget the ceiling!), take out
                  your hammer and upgrade everything to stone (or at least
                  wood). Place the TC, Authorize and lock it. Place the doors
                  and lock them as well. If you can, find another 30 cloth and
                  place a sleeping bag inside as well.
                </p>
              </StyledTitle>
            </StyledInfo5>
            <StyledInfo6>
              <StyledTitle>
                <h3>Congrats!</h3>
              </StyledTitle>
              <StyledTitle>
                <p>
                  You have a base! Your next steps will be to to kill some
                  animals, craft >50 lowgrade fuel and craft a furnace. Use that
                  to smelt metal and get metal doors (This will make your base
                  fireproof.) Also try to collect 50 scrap and make a Workbench
                  Level 1. This will get you from the stone to the metal age,
                  which will be handled in another guide. Until then: Have fun
                  and try to stay alive!
                </p>
              </StyledTitle>
            </StyledInfo6>
          </StyledGuides>
        </StyledMainContent>
        <StyledBottomNav>
          <BottomNav />
        </StyledBottomNav>
      </StyledGrid>
    </>
  );
};

const StyledToolCard = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 5fr;
  column-gap: 1%;
  row-gap: 1%;
  overflow: hidden;
  @media (max-width: 400px) {
    grid-template-rows: auto;
    grid-template-columns: 1fr;
  }
`;
const StyledToolImg = styled(motion.div)`
  height: 100%;
  width: 100%;
  grid-row: 1/3;
  grid-column: 1/2;
  align-self: start;
  justify-self: center;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    max-height: 10vh;
    object-fit: contain;
  }
`;
const StyledToolTitle = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 2/3;
  align-self: center;
  justify-self: start;
`;
const StyledToolDesc = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 2/3;
  align-self: center;
  justify-self: start;
`;

const StyledMain = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  img {
    object-fit: cover;
  }
  z-index: 1;
`;
const StyledGrid = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;

  display: grid;
  grid-template-columns: 0.1fr 2fr 0.1fr;
  grid-template-rows: 1fr 2fr 5fr 1fr;
  row-gap: 2vh;
  opacity: 0.85;

  h2,
  h3,
  h4 {
    font-family: "Rust";
    font-weight: 100;
  }
`;

const StyledMainContent = styled(motion.div)`
  grid-row: 2/4;
  grid-column: 2/3;
  height: 100%;
  width: 100%;
  background-color: gainsboro;
  display: grid;
  grid-template-rows: 1fr;

  overflow-x: scroll;
  h2,
  h4 {
    font-family: "Rust";
  }
  z-index: 25;
  position: absolute;
`;
const StyledGuides = styled(motion.div)`
  grid-row: 1/3;
  height: 100%;
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  /* overflow-x: scroll; */
`;
const StyledInfo1 = styled(motion.div)`
  height: 40vh;
  width: 100%;
  display: grid;
  /* grid-template-rows: 0.5fr 2fr 0.5fr 0.5fr; */
  grid-template-rows: auto;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr; */
    /* grid-template-rows: auto; */
    grid-template-rows: auto;
    height: 60vh;
  }
  @media (max-width: 550px) {
    height: 65vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: 0.15fr 0.5fr 0.5fr 2.5fr; */
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2.5fr; */
  }
  @media (max-width: 420px) {
    grid-template-rows: auto;
    height: 70vh;
    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 380px) {
    height: 70vh;
    grid-template-rows: auto;
  }
  @media (max-width: 365px) {
    height: 80vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 90vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 90vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;

const StyledTitle = styled(motion.div)`
  /* grid-row: 1/2; */
  align-self: center;
  justify-self: start;
  ul {
    li {
      display: list-item;
    }
  }
  ul {
    list-style-type: circle;
  }
`;

const StyledImage = styled(motion.div)`
  /* width: 100%;
  height: 100%; */
  align-self: center;
  /* grid-row: 2/3; */
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    max-height: 20vh;
    object-fit: cover;
  }
  /* @media (min-width: 1300px) {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  } */
`;

const StyledDescHeader = styled(motion.div)`
  align-self: center;
  justify-self: start;
`;

const StyledInfo2 = styled(motion.div)`
  height: 60vh;
  width: 100%;
  display: grid;
  /* grid-template-rows: 0.5fr 2fr 2fr 2fr; */
  grid-template-rows: auto;
  row-gap: 1%;
  column-gap: 1%;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr; */
    /* grid-template-rows: auto; */
    grid-template-rows: auto;
    height: 60vh;
  }
  @media (max-width: 550px) {
    height: 90vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: 0.15fr 0.5fr 0.5fr 2.5fr; */
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2.5fr; */
  }
  @media (max-width: 420px) {
    grid-template-rows: auto;
    height: 120vh;
    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 380px) {
    height: 135vh;
    grid-template-rows: auto;
  }
  @media (max-width: 365px) {
    height: 150vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 210vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 200vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;

const StyledInfo3 = styled(motion.div)`
  height: 40vh;
  width: 100%;
  display: grid;
  /* grid-template-rows: 0.5fr 2fr 1.5fr; */
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr; */
    /* grid-template-rows: auto; */
    grid-template-rows: auto;
    height: 50vh;
  }
  @media (max-width: 550px) {
    height: 52vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: 0.15fr 0.5fr 0.5fr 2.5fr; */
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2.5fr; */
  }
  @media (max-width: 420px) {
    grid-template-rows: auto;
    height: 55vh;
    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 380px) {
    height: 58vh;
    grid-template-rows: auto;
  }
  @media (max-width: 365px) {
    height: 60vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 75vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 70vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;

const StyledImageGrid = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2%;
  column-gap: 0.5%;
  @media (max-width: 400px) {
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;

const StyledImageGrid2 = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2%;
  column-gap: 0.5%;
  @media (max-width: 400px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;

const StyledInfo4 = styled(motion.div)`
  height: 230vh;
  width: 100%;
  display: grid;
  /* grid-template-rows: 0.5fr 0.5fr 0.5fr 2fr 1fr 1fr 0.3fr 2fr 1fr 10fr; */
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;

  @media (max-width: 768px) {
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr; */
    /* grid-template-rows: auto; */
    grid-template-rows: auto;
    height: 250vh;
  }
  @media (max-width: 550px) {
    height: 300vh;
    grid-template-rows: auto;
    /* padding-bottom: 1%; */
    /* grid-template-rows: auto; */
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: 0.15fr 0.5fr 0.5fr 2.5fr; */
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2.5fr; */
  }
  @media (max-width: 420px) {
    grid-template-rows: auto;
    height: 350vh;
    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 380px) {
    height: 390vh;
    grid-template-rows: auto;
  }
  @media (max-width: 365px) {
    height: 460vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 550vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 590vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;

const StyledInfo5 = styled(motion.div)`
  height: 350vh;
  width: 100%;
  display: grid;
  /* grid-template-rows: 0.5fr 2fr 0.5fr 0.5fr 5fr 2fr 2fr 1fr 3.5fr 0.5fr 3.5fr 2fr 0.8fr 2fr 2.2fr 2.4fr 1.5fr 2.5fr 1.5fr 0.8fr 1.4fr 0.5fr 2.2fr 1.5fr 2fr; */
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr; */
    /* grid-template-rows: auto; */
    grid-template-rows: auto;
    height: 350vh;
  }
  @media (max-width: 550px) {
    height: 500vh;
    grid-template-rows: auto;
    /* padding-bottom: 1%; */
    /* grid-template-rows: auto; */
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: 0.15fr 0.5fr 0.5fr 2.5fr; */
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2.5fr; */
  }
  @media (max-width: 420px) {
    grid-template-rows: auto;
    height: 600vh;
    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 380px) {
    height: 730vh;
    grid-template-rows: auto;
  }
  @media (max-width: 365px) {
    height: 800vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 950vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 1000vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;

const StyledInfo6 = styled(motion.div)`
  height: 15vh;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  @media (max-width: 768px) {
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2fr;
    grid-template-columns: 1fr; */
    /* grid-template-rows: auto; */
    grid-template-rows: auto;
    height: 25vh;
  }
  @media (max-width: 550px) {
    height: 35vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: 0.7fr 0.7fr 7fr; */
    /* grid-template-rows: 0.5fr 0.5fr 7fr; */
    /* grid-template-rows: 0.15fr 0.5fr 0.5fr 2.5fr; */
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 2.5fr; */
  }
  @media (max-width: 420px) {
    grid-template-rows: auto;
    height: 40vh;
    /* padding-bottom: 0%;
    grid-template-rows: 0.7fr 0.7fr 7fr; */
  }
  @media (max-width: 380px) {
    height: 45vh;
    grid-template-rows: auto;
  }
  @media (max-width: 365px) {
    height: 50vh;
    /* grid-template-rows: 0.1fr 0.5fr 0.6fr 3fr; */
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 330px) {
    height: 65vh;
    grid-template-rows: auto;
    /* grid-template-rows: auto; */
    /* grid-template-rows: auto; */
  }
  @media (max-width: 290px) {
    height: 70vh;
    grid-template-rows: auto;
    /* grid-template-rows: 0.4fr 0.4fr 7fr; */
  }
`;

const StyledToolsGrid = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 0.4fr 1fr 1fr 1.4fr 1fr 1fr 0.3fr 1fr;
  grid-template-rows: auto;
  row-gap: 1%;
`;

const StyledBottomNav = styled(motion.div)`
  grid-row: 4/5;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;
const StyledNav = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
`;

const StyledSearchBarImg = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 2/3;
  align-self: center;
  justify-self: end;
  z-index: 1 !important;
  pointer-events: none;
  position: absolute;
  img {
    z-index: 1 !important;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    visibility: hidden;
  }
`;

export default GettingStarted;
