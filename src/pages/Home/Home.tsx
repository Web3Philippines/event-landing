import { FC } from "react";
import { Link } from "react-router-dom";

//--------------------------------------------
// Global Components
import Navbar from "components/Navbar";
import Schedule from "components/Schedule";

//--------------------------------------------
// Domain Specific Components

//--------------------------------------------
// Modules

//--------------------------------------------
// Global Variables/Constants

const INCLUDES = [
  {
    name: "IRL Event",
    imgPath: "event.svg",
  },
  {
    name: "Web3 Philippines Merch",
    imgPath: "merch.svg",
  },
  {
    name: "Open Mic",
    imgPath: "microphone.svg",
  },
  {
    name: "Activities",
    imgPath: "group.svg",
  },
];

const SPEAKERS = [
  {
    name: "Waren Gonzaga",
    imgPath: "warengonzaga.png",
    positions: [
      "Co-Founder - Web3 Philippines",
      "Core - Polygon Guild Manila",
      "Core - Open Source Software PH",
      "Community Manager - thirdweb",
      "President - Algo Filipino",
    ],
  },
  {
    name: "Paul Soliman",
    imgPath: "paulsoliman.png",
    positions: [
      "Microsoft MVP for BizApps",
      "CEO - Hacktiv",
      "Chairman & CTO - BayaniChain",
      "CTO - Raven",
      "CTO - Likha",
    ],
  },
  {
    name: "Kristian Quirapas",
    imgPath: "kristianquirapas.png",
    positions: [
      "Co-Founder - Web3 Philippines",
      "Developer Advocate - thirdweb",
      "Fullstack Blockchain Developer - Ethereum, Solana, NEAR",
    ],
  },
];

const Home: FC = () => {
  return (
    <main>
      <Navbar />
      <header className="flex h-screen w-screen items-center justify-center bg-header bg-cover p-10 font-satoshi">
        <div className="flex flex-col items-center text-white">
          <p className="text-center text-xl font-bold tracking-[12px] md:text-3xl">
            WEB3 PHILIPPINES
          </p>
          <h1 className="my-8 text-center font-futura text-4xl font-bold md:text-6xl">
            Ka-BATAK: What is Web3?
          </h1>
          <p className="mb-8 max-w-[900px] text-center font-satoshi text-base text-base font-bold tracking-widest md:text-lg">
            Join us in building the grassroots of Web3 in the Philippines by
            learning all about Web3 from the greatest Filipino minds in the
            space.
          </p>
          <a
            href="https://www.eventbrite.sg/e/ka-batak-what-is-web3-tickets-419372663927"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mb-2 rounded-full border-2 border-white py-2 px-6 text-center text-base font-bold hover:cursor-pointer hover:bg-white hover:text-purple-heart md:text-2xl">
              Get Waitlisted
            </div>
          </a>
          <p className="text-base font-bold opacity-80 hover:opacity-100">
            Slots: Fully Booked
          </p>
        </div>
      </header>

      <section
        id="sponsors"
        className="bg-sponsors-bg flex w-screen flex-col items-center p-10 md:p-20"
      >
        <h1 className="pb-4 text-center font-futura text-xl text-black md:text-3xl">
          Special thanks to our sponsors!
        </h1>
        <div className="grid max-w-[900px] grid-cols-1 gap-8 md:grid-cols-[1fr_2fr_1fr]">
          <aside className="flex w-full items-center justify-center">
            <a
              href="https://www.likhanft.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-full" src="sponsors/likha.png" alt="Likha" />
            </a>
          </aside>
          <aside className="order-first flex w-full items-center justify-center md:order-none">
            <a
              href="https://thirdweb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full"
                src="sponsors/thirdweb.png"
                alt="thirdweb"
              />
            </a>
          </aside>
          <aside className="flex w-full items-center justify-center">
            <a
              href="https://www.linkedin.com/company/yoyo-holdings-pte-ltd-/?originalSubdomain=ph"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full"
                src="sponsors/yoyo.png"
                alt="YOYO Holdings"
              />
            </a>
          </aside>
        </div>
      </section>

      <section
        id="sponsors"
        className="bg-sponsors-bg flex w-screen flex-col items-center p-10 md:p-20"
      >
        <h1 className="pb-4 text-center font-futura text-xl text-black md:text-3xl">
          Also to our community partners!
        </h1>
        <div className="grid max-w-[900px] grid-cols-1 gap-8 md:grid-cols-2">
          <aside className="flex w-full items-center justify-center">
            <a
              href="https://www.bitskwela.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full max-w-[200px]"
                src="partners/bitskwela.png"
                alt="Bitskwela"
              />
            </a>
          </aside>

          <aside className="flex w-full items-center justify-center">
            <a
              href="https://bitpinas.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full max-w-[200px]"
                src="partners/bitpinas.png"
                alt="Bitpinas"
              />
            </a>
          </aside>
        </div>
      </section>

      <section className="h-[500px] w-screen bg-draper-one bg-cover bg-center text-white">
        <div className="flex h-full w-full flex-col items-center justify-center bg-dim p-10">
          <h2 className="mb-4 text-center font-satoshi text-xl font-bold tracking-widest md:text-2xl">
            Sept 30, 2022 @ 6-10PM PHT
          </h2>
          <h1 className="text-center font-futura text-3xl font-bold tracking-wide md:text-5xl">
            Draper Startup House Manila
          </h1>
        </div>
      </section>

      <section className="flex flex-col items-center bg-purple-circles bg-[length:100%_100%] py-28 px-10">
        <div className="w-screen max-w-[900px] p-10">
          <h1 className="mb-16 w-full text-center font-futura text-xl text-black md:text-3xl">
            What to expect out of Web3 Philippines meetup event?
          </h1>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {INCLUDES.map((e, idx) => (
              <div key={idx} className="flex h-full w-full justify-center">
                <div className="flex h-full w-9/12 flex-col items-center rounded-2xl border-2 border-purple-heart p-4">
                  <img src={e.imgPath} alt={e.name} />
                  <p className="text-center font-satoshi text-base text-purple-heart">
                    {e.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 w-screen max-w-[900px]">
          <h1 className="mb-16 w-full text-center font-futura text-xl text-black md:text-3xl">
            Event Speakers
          </h1>
          {SPEAKERS.map((e, idx) => (
            <div key={idx}>
              <div className="grid w-full grid-cols-1 px-10 text-center md:grid-cols-2 md:text-left">
                <aside className="order-first flex items-center justify-center md:order-none">
                  <img src={e.imgPath} alt={e.name} />
                </aside>

                <aside
                  className={`mb-10 flex flex-col justify-center ${
                    idx % 2 === 1 ? "order-first" : ""
                  }`}
                >
                  <h1 className="mb-2 border-b-2 border-purple-heart font-futura text-lg text-purple-heart md:text-2xl">
                    {e.name}
                  </h1>
                  {e.positions.map((p, pIdx) => (
                    <p key={pIdx} className="font-satoshi text-base font-bold">
                      {p}
                    </p>
                  ))}
                </aside>
              </div>
            </div>
          ))}
        </div>
        <p className="my-32 max-w-[400px] rounded-2xl border-4 border-purple-heart p-4 text-center font-satoshi text-xl font-bold text-purple-heart">
          If you're ready to learn about Web3 join us in our first meetup event.
        </p>
      </section>

      <section className="w-screen bg-gradient-to-b from-purple-heart to-blue-ribbon py-10 text-white">
        <h1
          id="programme"
          className="w-full text-center font-futura text-3xl text-white"
        >
          Programme
        </h1>
        <div className="flex w-full justify-center">
          <Schedule />
        </div>
      </section>

      <section className="h-[500px] w-screen bg-draper-two bg-cover bg-center text-white">
        <div className="flex h-full w-full flex-col items-center justify-center bg-dim p-10">
          <h2 className="mb-4 text-center font-satoshi text-xl font-bold tracking-widest md:text-2xl">
            Sept 30, 2022 @ 6-10PM PHT
          </h2>
          <h1 className="text-center font-futura text-3xl font-bold tracking-wide md:text-5xl">
            Draper Startup House Manila
          </h1>
        </div>
      </section>

      <footer className="grid w-screen grid-cols-1 bg-black-pearl p-10 text-white md:grid-cols-[1fr_4fr]">
        <aside className="flex w-full justify-center md:block">
          <img
            className="h-auto w-full max-w-[200px]"
            src="logo-text-large-white.png"
            alt="Web3 Philippines Logo"
          />
        </aside>

        <aside className="grid grid-cols-1 md:grid-cols-2">
          <div className="my-10 grid grid-cols-1 text-center">
            <h1 className="font-satoshi text-xl font-bold">Menu</h1>
            <Link to="/">
              <p className="my-2 font-satoshi text-base">Home</p>
            </Link>
            <a href="#programme">
              <p className="my-2 font-satoshi text-base">Programme</p>
            </a>
            <a href="#sponsors">
              <p className="my-2 font-satoshi text-base">Sponsors</p>
            </a>
          </div>

          <div className="my-10 grid grid-cols-1 text-center">
            <h1 className="font-satoshi text-xl font-bold">Socials</h1>

            <a
              href="https://web3philippines.org/discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="my-2 font-satoshi text-base">Discord</p>
            </a>
            <a
              href="https://facebook.com/groups/web3philippines"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="my-2 font-satoshi text-base">Facebook</p>
            </a>
            <a
              href="https://twitter.com/web3phl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="my-2 font-satoshi text-base">Twitter</p>
            </a>
          </div>
        </aside>
      </footer>
    </main>
  );
};

//--------------------------------------------
// Exports
export default Home;
