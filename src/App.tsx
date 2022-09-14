import "./App.css";

const LINKS = [
  {
    name: "Discord",
    imgPath: "discord.svg",
    url: "https://web3philippines.org/",
  },
  {
    name: "Facebook",
    imgPath: "facebook.svg",
    url: "https://www.facebook.com/groups/web3philippines",
  },
  {
    name: "Twitter",
    imgPath: "twitter.svg",
    url: "https://twitter.com/web3phl",
  },
  {
    name: "Github",
    imgPath: "github.svg",
    url: "https://github.com/web3phl",
  },
];

const ICONS = [
  {
    description: "IRL Event",
    imgPath: "icons/calendar.svg",
  },
  {
    description: "Merch",
    imgPath: "icons/shirt.svg",
  },
  {
    description: "Open Mic",
    imgPath: "icons/microphone.svg",
  },
  {
    description: "Activities",
    imgPath: "icons/people.svg",
  },
];

function App() {
  return (
    <main className="h-screen w-screen bg-purple-heart">
      <nav className="fixed top-0 box-border flex w-screen items-center justify-between bg-black-pearl p-5">
        <img
          className="h-12 items-center"
          src="logo-text-large-white.png"
          alt="Web3 Philippines Logo"
        />
        <span className="flex flex-row">
          {LINKS.map((e, idx) => (
            <a key={idx} href={e.url} target="_blank" rel="noreferrer noopener">
              <img className="mx-1" src={e.imgPath} alt={e.name} />
            </a>
          ))}
        </span>
      </nav>

      <header className="w-screen bg-draper bg-cover bg-center bg-no-repeat">
        <div className="mt-10 grid min-h-screen grid-cols-1 bg-black-pearl/80 py-20 px-10 lg:mt-0 lg:grid-cols-2 lg:p-24">
          <aside className="flex h-full flex-col justify-center p-5">
            <h1 className="mb-5 text-center font-futura text-4xl text-white md:text-5xl">
              Ka-BATAK: What is Web3?
            </h1>
            <span className="bg-purple-heart py-2 px-5 text-center font-satoshi text-lg text-white md:text-xl">
              A Web3 Philippines Meetup
            </span>
            <p className="mt-5 mb-20 font-satoshi text-base text-white">
              Join us in building the grassroots of Web3 in the Philippines by
              learning all about Web3 from the greatest Filipino minds in the
              space. Sign up now!
            </p>
            <a
              href="https://www.eventbrite.sg/e/ka-batak-what-is-web3-tickets-419372663927"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="rounded-2xl bg-purple-heart py-2 px-5 text-center font-futura text-base text-white hover:cursor-pointer hover:bg-black-pearl">
                Reserve Your Spot
              </div>
            </a>
          </aside>
          <aside className="border-box flex items-center p-5"></aside>
        </div>
      </header>

      <section
        id="info"
        className="grid w-screen grid-cols-1 p-20 sm:grid-cols-2 lg:grid-cols-4"
      >
        {ICONS.map((e, idx) => (
          <div className="my-2 flex flex-col items-center" key={idx}>
            <img src={e.imgPath} alt={e.description} />
            <p className="text-center font-satoshi text-xl text-purple-heart">
              {e.description}
            </p>
          </div>
        ))}
      </section>

      <section id="draper" className="grid grid-cols-1 py-20 lg:grid-cols-2">
        <aside className="flex items-center justify-center">
          <img className="w-4/5" src="draper.png" alt="Draper Startup House" />
        </aside>
        <aside className="flex items-center justify-center py-10">
          <h1 className="w-4/5 font-futura text-5xl leading-tight text-black-pearl">
            Know nothing about Web3?
            <br />{" "}
            <span className="text-purple-heart">This event is for YOU</span>.
          </h1>
        </aside>
      </section>

      <section className="flex w-full flex-col items-center bg-purple-heart px-10 py-20">
        <h1 className="w-4/5 text-center font-futura text-5xl text-white lg:w-2/5">
          LIMITED SLOTS ONLY{" "}
          <span className="text-black-pearl">so what are YOU waiting for?</span>
        </h1>
        <a
          className="my-10"
          href="https://www.eventbrite.sg/e/ka-batak-what-is-web3-tickets-419372663927"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="rounded-2xl bg-black-pearl py-2 px-5 text-center font-futura text-3xl text-white hover:cursor-pointer hover:text-purple-heart ">
            Register and learn from the BEST!
          </div>
        </a>
      </section>

      <footer className="box-border flex w-screen items-center justify-between bg-black-pearl p-5">
        <img
          className="h-12 items-center"
          src="logo-text-large-white.png"
          alt="Web3 Philippines Logo"
        />
        <a
          href="https://web3philippines.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <p className="font-satoshi text-white">web3philippines.org</p>
        </a>
      </footer>
    </main>
  );
}

export default App;
