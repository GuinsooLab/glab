import React from "react";

// Logos
import SpotrixLogo from "../assets/spotrix.svg";
import IreliaLogo from "../assets/irelia.svg";
import ElixirNoteLogo from "../assets/elixirnote.svg";
import MorganaLogo from "../assets/morgana.svg";
import TaricLogo from "../assets/taric.svg";
import JhinLogo from "../assets/jhin.svg";
import LeonaLogo from "../assets/leona.svg";

// Products
import DarksealLogo from "../assets/darkseal.svg";
import WitdbLogo from "../assets/witdb.svg";
import HurricanedbLogo from "../assets/hurricanedb.svg";
import MortalmeshLogo from "../assets/mortalmesh.svg";
import AnnoStoreLogo from "../assets/annaStore.svg";
import DuskbladesqlLogo from "../assets/duskbladesql.svg";
import SheenflowLogo from "../assets/sheenflow.svg";
import StealthwardLogo from "../assets/stealthward.svg";


export const UserRoleContext = React.createContext(undefined);

const AppLogo = {
  spotrix: SpotrixLogo,
  irelia: IreliaLogo,
  elixirnote: ElixirNoteLogo,
  taric: TaricLogo,
  jhin: JhinLogo,

  morgana: MorganaLogo,

  leona: LeonaLogo,

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
    category: "DATA DISCOVERY",
    apps: [
      {
        name: "Darkseal",
        href: "#/app/darkseal",
        link: "https://github.com/GuinsooLab/darkseal",
        doc: "https://ciusji.gitbook.io/darkseal",
        logo: DarksealLogo,
        state: 1,
        mainColor: "#346DDB",
        desc: "A Single place to Discover, Collaborate, and Get your data right."
      },
    ],
  },
  {
    category: "QUERY ENGINE",
    apps: [
      {
        name: "WitDB",
        href: "#/app/witDB",
        link: "https://github.com/GuinsooLab/witdb",
        doc: "https://ciusji.gitbook.io/witdb",
        logo: WitdbLogo,
        state: 1,
        mainColor: "#3EFC92",
        desc: "A fast distributed SQL query engine."
      },
      {
        name: "HurricaneDB",
        href: "#/app/hurricaneDB",
        link: "https://github.com/GuinsooLab/hurricanedb",
        doc: "https://ciusji.gitbook.io/hurricanedb",
        logo: HurricanedbLogo,
        state: 1,
        mainColor: "#D48FB6",
        desc: "A real-time distributed OLAP engine."
      },
    ],
  },
  {
    category: "DATA STORAGE",
    apps: [
      {
        name: "MortalMesh",
        href: "#/app/mortalmesh",
        link: "https://github.com/GuinsooLab/mortalmesh",
        doc: "https://ciusji.gitbook.io/mortalmesh",
        logo: MortalmeshLogo,
        state: 2,
        mainColor: "#2D8DFE",
        desc: "An framework for building a lakehouse architecture."
      },
      {
        name: "AnnaStore",
        href: "#/app/annaStore",
        link: "https://github.com/GuinsooLab/annastore",
        doc: "https://ciusji.gitbook.io/annastore",
        logo: AnnoStoreLogo,
        state: 1,
        mainColor: "#346DDB",
        desc: "High performance OSS storage platform."
      },
    ],
  },
  {
    category: "PROCESS ENGINE",
    apps: [
      {
        name: "DuskbladeSQL",
        href: "#/app/duskbladeSQL",
        link: "https://github.com/GuinsooLab/duskbladesql",
        doc: "https://ciusji.gitbook.io/duskbladesql",
        logo: DuskbladesqlLogo,
        state: 1,
        mainColor: "#6D56FD",
        desc: "A streaming database for real-time applications."
      },
    ],
  },
  {
    category: "DATA FLOW",
    apps: [
      {
        name: "Sheenflow",
        href: "#/app/sheenflow",
        link: "https://github.com/GuinsooLab/sheenflow",
        doc: "https://ciusji.gitbook.io/sheenflow",
        logo: SheenflowLogo,
        state: 1,
        mainColor: "#8323EF",
        desc: "A next-generation orchestration platform for data assets."
      },
    ],
  },
  {
    category: "DATA OBSERVABILITY",
    apps: [
      {
        name: "Stealthward",
        href: "#/app/stealthward",
        link: "https://github.com/GuinsooLab/stealthward",
        doc: "https://ciusji.gitbook.io/stealthward",
        logo: StealthwardLogo,
        state: 2,
        mainColor: "#6C55FD",
        desc: "dbt native framework built to observe modern data stack."
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
        href: "https://ciusji.gitbook.io/spotrix/",
        link: "https://github.com/Spotrix/spotrix",
        doc: "https://ciusji.gitbook.io/spotrix/",
        state: 1,
      },
      {
        name: "Irelia",
        href: "https://ciusji.gitbook.io/irelia/",
        link: "https://github.com/ElixirNote/irelia",
        doc: "https://ciusji.gitbook.io/irelia/",
        state: 1,
      },
      {
        name: "ElixirNote",
        href: "https://ciusji.gitbook.io/elixirnote/",
        link: "https://github.com/ElixirNote/elixirnote",
        doc: "https://ciusji.gitbook.io/elixirnote/",
        state: 1,
      },
      {
        name: "Taric",
        href: "https://ciusji.gitbook.io/taric/",
        link: "https://github.com/Taricx/taric",
        doc: "https://ciusji.gitbook.io/taric/",
        state: 1,
      },
      {
        name: "Jhin",
        href: "https://ciusji.gitbook.io/jhinboard/",
        link: "https://github.com/JhinBoard/jhin",
        doc: "https://ciusji.gitbook.io/jhinboard/",
        state: 1,
      },
    ],
  },
];

const Security = [
  {
    category: "Security",
    apps: [
      {
        name: "Morgana",
        href: "https://ciusji.gitbook.io/morgana/",
        link: "https://github.com/MorganaToken/morgana-core",
        doc: "https://ciusji.gitbook.io/morgana/",
        logo: "",
        state: 1,
        desc: "",
      },
    ]
  }];

const Monitor = [
  {
    category: "Monitor",
    apps: [
      {
        name: "Leona",
        href: "https://ciusji.gitbook.io/leona",
        link: "https://github.com/LeonaLog/leona",
        doc: "https://ciusji.gitbook.io/leona",
        state: 1,
      },
    ]
  }];


export { Tools, Apps, AppLogo, Security, Monitor };
