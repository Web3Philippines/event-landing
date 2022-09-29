import { FC } from "react";

//--------------------------------------------
// Global Components

//--------------------------------------------
// Domain Specific Components

//--------------------------------------------
// Modules

//--------------------------------------------
// Global Variables/Constants
const HR_LENGTH = 100; // in px
const HEIGHT = 50; // in px
const START = 18; // in 24:00 format

/*
 * @dev duration is in hours
 */
type Segment = {
  name: string;
  time: string;
  assigned: string;
};

const PROGRAMME: Segment[] = [
  {
    name: "Ingress",
    time: "6:00PM - 6:30PM",
    assigned: "",
  },
  {
    name: "Introduction",
    time: "6:30PM - 6:40PM",
    assigned: "Wrex the Hero Host",
  },
  {
    name: "What is Web3?",
    time: "6:40PM - 7:00PM",
    assigned: "Paul Soliman",
  },
  {
    name: "Short Break",
    time: "7:00PM - 7:10PM",
    assigned: "",
  },
  {
    name: "Team Activity and Food",
    time: "7:10PM - 8:10PM",
    assigned: "Team Leaders",
  },
  {
    name: "Short Break",
    time: "8:10PM - 8:20PM",
    assigned: "",
  },
  {
    name: "Build in Web3 with thirdweb",
    time: "8:20PM - 8:40PM",
    assigned: "Waren Gonzaga",
  },
  {
    name: "Team Presentations",
    time: "8:40PM - 9:40PM",
    assigned: "",
  },
  {
    name: "Web3 Philippines",
    time: "9:40PM - 10:00",
    assigned: "Kristian Quirapas",
  },
  {
    name: "Merch Distribution and Taking Photos",
    time: "10:00PM - 10:15PM",
    assigned: "Host",
  },
  {
    name: "Egress",
    time: "10:15PM - 10:30PM",
    assigned: "",
  },
];

const Schedule: FC = () => {
  return (
    <main className="grid w-full max-w-[900px] grid-cols-1 p-10 md:grid-cols-[1fr_3fr]">
      {PROGRAMME.map((e, idx) => (
        <>
          <span
            className={`block w-full pt-2 text-center font-satoshi md:py-2 ${
              idx % 2 === 0 ? "bg-glass" : ""
            }`}
          >
            {e.time}
          </span>
          <div
            className={`block grid w-full grid-cols-1 pb-2 text-center font-satoshi text-base font-bold md:py-2 ${
              idx % 2 === 0 ? "bg-glass" : ""
            }`}
          >
            <span>{e.name}</span>
            <span className="text-sm font-normal">{e.assigned}</span>
          </div>
        </>
      ))}
    </main>
  );
};

//--------------------------------------------
// Exports
export default Schedule;
