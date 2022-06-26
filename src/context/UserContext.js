import React from "react";

// logos
import SpotrixLogo from "../assets/spotrix.svg";
import IreliaLogo from "../assets/irelia.svg";
import ElixirNoteLogo from "../assets/elixirnote.svg";
import DarksealLogo from "../assets/darkseal.svg";
import WitdbLogo from "../assets/witdb.svg";
import HurricanedbLogo from "../assets/hurricanedb.svg";
import MortalmeshLogo from "../assets/mortalmesh.svg";
import DuskbladesqlLogo from "../assets/duskbladesql.svg";
import SheenflowLogo from "../assets/sheenflow.svg";
import StealthwardLogo from "../assets/stealward.svg";

import SpotrixGround from "../images/spotrix-ground.svg";
import IreliaGround from "../images/irelia-ground.svg";
import ElixirNoteGround from "../images/elixirnote-ground.svg";

export const UserRoleContext = React.createContext(undefined);

const AppLogo = {
  spotrix: SpotrixLogo,
  irelia: IreliaLogo,
  elixirnote: ElixirNoteLogo,
  darkseal: DarksealLogo,
  witdb: WitdbLogo,
  hurricanedb: HurricanedbLogo,
  mortalmesh: MortalmeshLogo,
  duskbladesql: DuskbladesqlLogo,
  sheenflow: SheenflowLogo,
  stealthward: StealthwardLogo,
};


const Tools = [
  {
    category: "Data Discovery",
    apps: [
      {name: "Darkseal", href: "#/app/darkseal", link: "", doc: "", pic: "", state: 1},
    ],
  },
  {
    category: "Query Engine",
    apps: [
      {name: "WitDB", href: "#/app/witDB", link: "", doc: "", pic: "", state: 1},
      {name: "HurricaneDB", href: "#/app/hurricaneDB", link: "", doc: "", pic: "", state: 1},
    ],
  },
  {
    category: "Data Storage",
    apps: [
      {name: "MortalMesh", href: "#/app/mortalmesh", link: "", doc: "", pic: "", state: 2},
    ],
  },
  {
    category: "Process Engine",
    apps: [
      {name: "DuskbladeSQL", href: "#/app/duskbladeSQL", link: "", doc: "", pic: "", state: 1},
    ],
  },
  {
    category: "Data Flow",
    apps: [
      {name: "Sheenflow", href: "#/app/sheenflow", link: "", doc: "", pic: "", state: 1},
    ],
  },
  {
    category: "Data Observability",
    apps: [
      {name: "Stealthward", href: "#/app/stealthward", link: "", doc: "", pic: "", state: 1},
    ],
  },
];

const Apps = [
  {
    category: "BI Products",
    apps: [
      {name: "Spotrix", href: "#/app/spotrix", link: "https://github.com/Spotrix/spotrix", doc: "", pic: SpotrixGround, state: 1, desc: "Easy for users to visualize data"},
      {name: "Irelia", href: "#/app/irelia", link: "https://github.com/ElixirNote/irelia", doc: "", pic: IreliaGround, state: 1, desc: "Find true power in your tables"},
      {name: "ElixirNote", href: "#/app/elixirnote", link: "https://github.com/ElixirNote/elixirnote", doc: "", pic: ElixirNoteGround, state: 1, desc: "Agile data science notebook for teams"},
    ],
  },
];


export { Tools, Apps, AppLogo };
