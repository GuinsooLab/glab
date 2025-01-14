import React from "react";

// Logos
import SpotrixLogo from "../assets/spotrix.svg";
import IreliaLogo from "../assets/irelia.svg";
import ElixirNoteLogo from "../assets/elixirnote.svg";
import MorganaLogo from "../assets/morganax.svg";
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
import LudenLogo from "../assets/luden.svg";


export const UserRoleContext = React.createContext(undefined);

const AppLogo = {
  megamode: SpotrixLogo,
  irelia: IreliaLogo,
  megaheap: ElixirNoteLogo,
  taric: TaricLogo,
  jhin: JhinLogo,

  megatoken: MorganaLogo,

  leona: LeonaLogo,
  luden: LudenLogo,

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
        link: "https://ciusji.gitbook.io/megarobodata/data-platform/data-discovery/darkseal",
        doc: "https://ciusji.gitbook.io/megarobodata/data-platform/data-discovery/darkseal",
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
        link: "https://ciusji.gitbook.io/megarobodata/data-platform/query-engine/witdb",
        doc: "https://ciusji.gitbook.io/megarobodata/data-platform/query-engine/witdb",
        logo: WitdbLogo,
        state: 1,
        mainColor: "#3EFC92",
        desc: "A fast distributed SQL query engine."
      },
      {
        name: "HurricaneDB",
        href: "#/app/hurricaneDB",
        link: "https://ciusji.gitbook.io/megarobodata/data-platform/query-engine/hurricanedb",
        doc: "https://ciusji.gitbook.io/megarobodata/data-platform/query-engine/hurricanedb",
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
        link: "https://ciusji.gitbook.io/megarobodata/data-platform/data-storage/mortalmesh",
        doc: "https://ciusji.gitbook.io/megarobodata/data-platform/data-storage/mortalmesh",
        logo: MortalmeshLogo,
        state: 2,
        mainColor: "#2D8DFE",
        desc: "An framework for building a lakehouse architecture."
      },
      {
        name: "AnnaStore",
        href: "#/app/annaStore",
        link: "https://ciusji.gitbook.io/megarobodata/data-platform/data-storage/annastore",
        doc: "https://ciusji.gitbook.io/megarobodata/data-platform/data-storage/annastore",
        logo: AnnoStoreLogo,
        state: 1,
        mainColor: "#33C89B",
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
        link: "https://ciusji.gitbook.io/megarobodata/data-platform/process-engine/duskbladesql",
        doc: "https://ciusji.gitbook.io/megarobodata/data-platform/process-engine/duskbladesql",
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
        link: "https://ciusji.gitbook.io/megarobodata/data-platform/data-flow/sheenflow",
        doc: "https://ciusji.gitbook.io/megarobodata/data-platform/data-flow/sheenflow",
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
        link: "https://ciusji.gitbook.io/megarobodata/data-platform/data-observability/stealthward",
        doc: "https://ciusji.gitbook.io/megarobodata/data-platform/data-observability/stealthward",
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
        name: "MegaMode",
        href: "https://ciusji.gitbook.io/megarobodata/mega-bi+ai-apps/megamode",
        link: "https://ciusji.gitbook.io/megarobodata/mega-bi+ai-apps/megamode",
        doc: "https://ciusji.gitbook.io/megarobodata/mega-bi+ai-apps/megamode",
        state: 1,
      },
      {
        name: "MegaHeap",
        href: "https://ciusji.gitbook.io/megarobodata/mega-bi+ai-apps/megaheap",
        link: "https://ciusji.gitbook.io/megarobodata/mega-bi+ai-apps/megaheap",
        doc: "https://ciusji.gitbook.io/megarobodata/mega-bi+ai-apps/megaheap",
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
        name: "MegaToken",
        href: "https://ciusji.gitbook.io/megarobodata/data-platform/data-security/megatoken",
        link: "https://ciusji.gitbook.io/megarobodata/data-platform/data-security/megatoken",
        doc: "https://ciusji.gitbook.io/megarobodata/data-platform/data-security/megatoken",
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
    ]
  }];


export { Tools, Apps, AppLogo, Security, Monitor };
