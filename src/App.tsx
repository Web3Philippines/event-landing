import React from "react";
import logo from "./logo.svg";
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

function App() {
  return (
    <main className="h-screen w-screen bg-purple-heart">
      <nav className="box-border flex w-screen items-center justify-between bg-black-pearl p-5">
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

      <header className="h-6/12 w-screen bg-draper"></header>

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
