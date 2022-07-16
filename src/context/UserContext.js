import React from "react";

// logos
import SpotrixLogo from "../assets/spotrix.svg";
import IreliaLogo from "../assets/irelia.svg";
import ElixirNoteLogo from "../assets/elixirnote.svg";
import DarksealLogo from "../assets/darkseal.svg";
import WitdbLogo from "../assets/witdb.svg";
import HurricanedbLogo from "../assets/hurricanedb.svg";
import MortalmeshLogo from "../assets/mortalmesh.svg";
import AnnoStoreLogo from "../assets/annaStore.svg";
import DuskbladesqlLogo from "../assets/duskbladesql.svg";
import SheenflowLogo from "../assets/sheenflow.svg";
import StealthwardLogo from "../assets/stealthward.svg";
import SpotrixGround from "../images/spotrix-ground.svg";
import IreliaGround from "../images/irelia-ground.svg";
import ElixirNoteGround from "../images/elixirnote-ground.svg";
import DarksealGround from "../images/darkseal-ground.svg";
import HuricanedbGround from "../images/huricanedb-ground.svg";
import WitdbGround from "../images/witdb-ground.svg";
import MortalmeshGround from "../images/mortalmesh-ground.svg";
import AnnaStoreGround from "../images/annastore-ground.svg";
import DuskbaldeSQLGround from "../images/duskbladesql-ground.svg";
import SheenflowGround from "../images/sheenflow-ground.svg";
import StealthwardGround from "../images/stealthward-ground.svg";

export const UserRoleContext = React.createContext(undefined);

const AppLogo = {
  spotrix: SpotrixLogo,
  irelia: IreliaLogo,
  elixirnote: ElixirNoteLogo,
  darkseal: DarksealLogo,
  witdb: WitdbLogo,
  hurricanedb: HurricanedbLogo,
  mortalmesh: MortalmeshLogo,
  annastore: AnnoStoreLogo,
  duskbladesql: DuskbladesqlLogo,
  sheenflow: SheenflowLogo,
  stealthward: StealthwardLogo,
};


const Tools = [
  {
    category: "Data Discovery",
    apps: [
      {
        name: "Darkseal",
        href: "#/app/darkseal",
        link: "https://github.com/GuinsooLab/darkseal",
        doc: "https://ciusji.gitbook.io/guinsoolab/products/data-discovery",
        pic: DarksealGround,
        logo: DarksealLogo,
        state: 1,
      },
    ],
  },
  {
    category: "Query Engine",
    apps: [
      {
        name: "WitDB",
        href: "#/app/witDB",
        link: "https://github.com/GuinsooLab/witdb",
        doc: "https://ciusji.gitbook.io/guinsoolab/products/query-engine/witdb",
        pic: WitdbGround,
        logo: WitdbLogo,
        state: 1,
      },
      {
        name: "HurricaneDB",
        href: "#/app/hurricaneDB",
        link: "https://github.com/GuinsooLab/hurricanedb",
        doc: "https://ciusji.gitbook.io/guinsoolab/products/query-engine/hurricanedb",
        pic: HuricanedbGround,
        logo: HurricanedbLogo,
        state: 1,
      },
    ],
  },
  {
    category: "Data Storage",
    apps: [
      {
        name: "MortalMesh",
        href: "#/app/mortalmesh",
        link: "https://github.com/GuinsooLab/mortalmesh",
        doc: "https://ciusji.gitbook.io/guinsoolab/products/data-storage/mortalmesh",
        pic: MortalmeshGround,
        logo: MortalmeshLogo,
        state: 2,
      },
      {
        name: "AnnaStore",
        href: "#/app/annaStore",
        link: "https://github.com/GuinsooLab/annastore",
        doc: "https://ciusji.gitbook.io/guinsoolab/products/data-storage/annastore",
        pic: AnnaStoreGround,
        logo: AnnoStoreLogo,
        state: 2,
      },
    ],
  },
  {
    category: "Process Engine",
    apps: [
      {
        name: "DuskbladeSQL",
        href: "#/app/duskbladeSQL",
        link: "https://github.com/GuinsooLab/duskbladesql",
        doc: "https://ciusji.gitbook.io/guinsoolab/products/process-engine",
        pic: DuskbaldeSQLGround,
        logo: DuskbladesqlLogo,
        state: 1,
      },
    ],
  },
  {
    category: "Data Flow",
    apps: [
      {
        name: "Sheenflow",
        href: "#/app/sheenflow",
        link: "https://github.com/GuinsooLab/sheenflow",
        doc: "https://ciusji.gitbook.io/guinsoolab/products/data-flow",
        pic: SheenflowGround,
        logo: SheenflowLogo,
        state: 1,
      },
    ],
  },
  {
    category: "Data Observability",
    apps: [
      {
        name: "Stealthward",
        href: "#/app/stealthward",
        link: "https://github.com/GuinsooLab/stealthward",
        doc: "https://ciusji.gitbook.io/guinsoolab/products/data-observability",
        pic: StealthwardGround,
        logo: StealthwardLogo,
        state: 1,
      },
    ],
  },
];

const Apps = [
  {
    category: "BI Products",
    apps: [
      {
        name: "Spotrix",
        href: "#/app/spotrix",
        link: "https://github.com/Spotrix/spotrix",
        doc: "",
        pic: SpotrixGround,
        state: 1,
        desc: "Easy for users to visualize data",
      },
      {
        name: "Irelia",
        href: "#/app/irelia",
        link: "https://github.com/ElixirNote/irelia",
        doc: "",
        pic: IreliaGround,
        state: 1,
        desc: "Find true power in your tables",
      },
      {
        name: "ElixirNote",
        href: "#/app/elixirnote",
        link: "https://github.com/ElixirNote/elixirnote",
        doc: "",
        pic: ElixirNoteGround,
        state: 1,
        desc: "Agile data science notebook for teams",
      },
    ],
  },
];


export { Tools, Apps, AppLogo };
