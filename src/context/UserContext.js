import React from "react";

// kayle feature pics
import KayleGalleryPic from "../images/kayle/gallery.png";
import KayleSlackDashPic from "../images/kayle/slack_dash.png";
import KayleExplorePic from "../images/kayle/explore.png";
import KayleSqlLabPic from "../images/kayle/sql_lab.png";

// tristana feature videos
import InsightsVideo from "../video/insights.mp4";
import CloudDataVideo from "../video/clouddata.mp4";
import DeveloperVideo from "../video/developer.mp4";
import BacklogVideo from "../video/backlog.mp4";

// kennen feature pics
import KennenSQL from "../images/kennen/productivity-sql.png";
import KennenViz from "../images/kennen/productivity-visualizations.png";
import KennenRep from "../images/kennen/productivity-reproducibility.png";
import KennenAuto from "../images/kennen/productivity-autocomplete.png";

// darkseal feature pics
import DarksealStack from "../images/darkseal/data_stack.png";
import DarksealTrusted from "../images/darkseal/trusted_data.png";
import DarksealUnderstand from "../images/darkseal/understand_data.png";
import DarksealRelation from "../images/darkseal/relation_data.png";

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
      {name: "Spotrix", href: "#/app/spotrix", link: "https://github.com/Spotrix/spotrix", doc: "", pic: "", state: 1, desc: "Easy for users to visualize data"},
      {name: "Irelia", href: "#/app/irelia", link: "https://github.com/ElixirNote/irelia", doc: "", pic: "", state: 1, desc: "Find true power in your tables"},
      {name: "ElixirNote", href: "#/app/elixirnote", link: "https://github.com/ElixirNote/elixirnote", doc: "", pic: "", state: 1, desc: "Agile data science notebook for teams"},
    ],
  },
];

const Meta = {
  kayle: {
    overview:[
      {title: "Powerful yet easy to use", desc: "Quickly and easily integrate and explore your data, using either our simple no-code viz builder or state of the art SQL IDE."},
      {title: "Integrates with modern databases", desc: "Kayle can connect to any SQL based datasource through SQLAlchemy, including modern cloud native databases and engines at petabyte scale."},
      {title: "Modern architecture", desc: "Kayle is lightweight and highly scalable, leveraging the power of your existing data infrastructure without requiring yet another ingestion layer."},
      {title: "Rich visualizations and dashboards", desc: "Kayle ships with a wide array of beautiful visualizations. Our visualization plug-in architecture makes it easy to build custom visualizations that drop directly into Kayle."},
    ],
    features: [
      {id: 1, title: "Large Gallery of Visualizations", desc: "This is a description text", pic: KayleGalleryPic, link: "https://confluence.idgcapital.com/display/KAYLE/kayle"},
      {id: 2, title: "Beautiful & Dynamic Dashboards", desc: "This is a description text", pic: KayleSlackDashPic, link: "https://confluence.idgcapital.com/display/KAYLE/kayle"},
      {id: 3, title: "No-Code Chart Builder", desc: "This is a description text", pic: KayleExplorePic, link: "https://confluence.idgcapital.com/display/KAYLE/kayle"},
      {id: 4, title: "Powerful SQL Editor", desc: "This is a description text", pic: KayleSqlLabPic, link: "https://confluence.idgcapital.com/display/KAYLE/kayle"},
    ],
    document: {
      intro: "https://confluence.idgcapital.com/display/KAYLE/kayle",
      quickstart: "https://confluence.idgcapital.com/display/KAYLE/kayle",
      faq: "https://confluence.idgcapital.com/display/KAYLE/kayle",
      others: "https://confluence.idgcapital.com/display/KAYLE/kayle",
    }
  },
  tristana: {
    overview:[
      {title: "Morden BI & Analytics", desc: "Serve up real-time dashboards for more in-depth, consistent analysis. Access to trustworthy data enables teams to collect fresh results for more precise reporting."},
      {title: "Integrated Insights", desc: "Enhance the tools you're already using by infusing new, relevant data. Unify and empower your teams to make more efficient, data-informed decisions."},
      {title: "Data-Driver Workflows", desc: "Invigorate your workflows with fresh, reliable data. Tristana gives teams unified access to the answers thy need to driver successful outcomes."},
      {title: "Custom Applications", desc: "Create custom apps that deliver data experiences as unique as your business. Tristana's embedded analytics solutions, from retail to healthcare, give your customers tha data they need to get the job done."},
    ],
    features: [
      {id: 1, title: "Instant insights for all", desc: "Stop waiting for custom reports from data experts and instantly answer ad-hoc data questions on the fly", pic: InsightsVideo, link: "https://confluence.idgcapital.com/display/TRISTANA/tristana", flag: 1},
      {id: 2, title: "Unleash the value of your cloud data", desc: "Maximize the value of your cloud data warehouse and accelerate speed-to-insight for everyone across your business", pic: CloudDataVideo, link: "https://confluence.idgcapital.com/display/TRISTANA/tristana", flag: 1},
      {id: 3, title: "Build Interactive Data Apps", desc: "Drive adoption by embedding search and insight-driven actions into your apps using our low-code developer-friendly platform", pic: DeveloperVideo, link: "https://confluence.idgcapital.com/display/TRISTANA/tristana", flag: 1},
      {id: 4, title: "Bye-bye backlog", desc: "Empower non-technical people to answer their own data questions, while you build a single source of truth with security and governance at scale", pic: BacklogVideo, link: "https://confluence.idgcapital.com/display/TRISTANA/tristana", flag: 1},
    ],
    document: {
      intro: "https://confluence.idgcapital.com/display/TRISTANA/tristana",
      quickstart: "https://confluence.idgcapital.com/display/TRISTANA/tristana",
      faq: "https://confluence.idgcapital.com/display/TRISTANA/tristana",
      others: "https://confluence.idgcapital.com/display/TRISTANA/tristana",
    }
  },
  kennen: {
    overview:[
      {title: "Move faster with collaboration", desc: "We built Kennen because analysts and data scientists don’t work alone. Click on a link to jump into any project and see in real-time ..."},
      {title: "Making you more productive", desc: "We created Kennen to help you save time. Whether you work in a team or by yourself, Kennen helps you clean your data, write complex queries ..."},
      {title: "Integrates with everything", desc: "Kennen integrates flawlessly with all your existing infrastructure and processes, Use Python, R, Julia, TensorFlow, PyTorch, or any ..."},
      {title: "Enterprise-grade security", desc: "Secure by default, Kennen follows industry best practices, including fine-grained access controls, SSO support and on-premise deployments."},
    ],
    features: [
      {id: 1, title: "From Python to SQL and back", desc: "Don’t jump between multiple apps. Query data from wherever it’s stored, including Snowflake, BigQuery and Redshift. Switch between SQL and Python in order to transform, clean, and export your data.", pic: KennenSQL, link: "https://confluence.idgcapital.com/display/KENNEN/kennen"},
      {id: 2, title: "Visualize data in seconds", desc: "Rapidly generate interactive charts to discover patterns in your data. No need to fuss with visualization libraries. Simply pick the data you want to plot.", pic: KennenViz, link: "https://confluence.idgcapital.com/display/KENNEN/kennen"},
      {id: 3, title: "Reproducible results", desc: "No more broken pip installs or mismatched requirements. Ensure reproducibility across your team by re-using the same environments throughout your projects.", pic: KennenRep, link: "https://confluence.idgcapital.com/display/KENNEN/kennen"},
      {id: 4, title: "Write faster with autocomplete", desc: "Develop faster with intelligent autocomplete and linting tools. Kennen points out bugs before they break long training jobs, just like you are used to from a local IDE such as VSCode, PyCharm or Sublime Text.", pic: KennenAuto, link: "https://confluence.idgcapital.com/display/KENNEN/kennen"},
    ],
    document: {
      intro: "https://confluence.idgcapital.com/display/KENNEN/kennen",
      quickstart: "https://confluence.idgcapital.com/display/KENNEN/kennen",
      faq: "https://confluence.idgcapital.com/display/KENNEN/kennen",
      others: "https://confluence.idgcapital.com/display/KENNEN/kennen",
    }
  },
  darkseal: {
    overview:[
      {title: "Data Governance for Growth", desc: "Darkseal’s active data governance puts people first, so folks have access to the data they need, with guidance in-workflow on how to use it."},
      {title: "Self-Service Analytics Utopia", desc: "Onboard analysts faster. Share queries to collaborate across teams. Welcome more folks to the data and empower quick data-driven decisions at scale."},
      {title: "Migrate What Matters", desc: "Facing down migration? Seize the chance to lead your business to new heights. A catalog-supported cloud data migration keeps your best data secure yet accessible to key users."},
      {title: "Search & Discovery", desc: "Enjoy a single system of reference for all the data & data users across your organization. Understand data quality, context, and usage patterns at a glance."},
    ],
    features: [
      {id: 1, title: "Modern Data Stack", desc: "Darkseal's extensible metadata platform enables data discovery, data observability and federated governance that helps you tame this complexity.", pic: DarksealStack, link: "https://confluence.idgcapital.com/display/DARKSEAL/darkseal"},
      {id: 2, title: "Discover Trusted Data", desc: "Browse and search over a continuously updated catalog of datasets, dashboards, charts, ML models, and more.", pic: DarksealTrusted, link: "https://confluence.idgcapital.com/display/DARKSEAL/darkseal"},
      {id: 3, title: "Understand Data in Context", desc: "Darkseal is the one-stop shop for documentation, schemas, ownership, lineage, pipelines and usage information. Data quality and data preview information coming soon.", pic: DarksealUnderstand, link: "https://confluence.idgcapital.com/display/DARKSEAL/darkseal"},
      {id: 4, title: "Metadata Represents as a Graph model", desc: "Darkseal's metadata service currently uses a Neo4j proxy to interact with Neo4j graph db and serves frontend service's metadata.", pic: DarksealRelation, link: "https://confluence.idgcapital.com/display/DARKSEAL/darkseal"},
    ],
    document: {
      intro: "https://confluence.idgcapital.com/display/DARKSEAL/darkseal",
      quickstart: "https://confluence.idgcapital.com/display/DARKSEAL/darkseal",
      faq: "https://confluence.idgcapital.com/display/DARKSEAL/darkseal",
      others: "https://confluence.idgcapital.com/display/DARKSEAL/darkseal",
    }
  },
  witdb: {
    overview:[
      {title: "Powerful yet easy to use", desc: "Quickly and easily integrate and explore your data, using either our simple no-code viz builder or state of the art SQL IDE."},
      {title: "Integrates with modern databases", desc: "Kayle can connect to any SQL based datasource through SQLAlchemy, including modern cloud native databases and engines at petabyte scale."},
      {title: "Modern architecture", desc: "Kayle is lightweight and highly scalable, leveraging the power of your existing data infrastructure without requiring yet another ingestion layer."},
      {title: "Rich visualizations and dashboards", desc: "Kayle ships with a wide array of beautiful visualizations. Our visualization plug-in architecture makes it easy to build custom visualizations that drop directly into Kayle."},
    ],
    features: [
      {id: 1, title: "Large Gallery of Visualizations", desc: "This is a description text", pic: KayleGalleryPic, link: "https://confluence.idgcapital.com/display/WITDB/witdb"},
      {id: 2, title: "Beautiful & Dynamic Dashboards", desc: "This is a description text", pic: KayleSlackDashPic, link: "https://confluence.idgcapital.com/display/WITDB/witdb"},
      {id: 3, title: "No-Code Chart Builder", desc: "This is a description text", pic: KayleExplorePic, link: "https://confluence.idgcapital.com/display/WITDB/witdb"},
      {id: 4, title: "Powerful SQL Editor", desc: "This is a description text", pic: KayleSqlLabPic, link: "https://confluence.idgcapital.com/display/WITDB/witdb"},
    ],
    document: {
      intro: "https://confluence.idgcapital.com/display/WITDB/witdb",
      quickstart: "https://confluence.idgcapital.com/display/WITDB/witdb",
      faq: "https://confluence.idgcapital.com/display/WITDB/witdb",
      others: "https://confluence.idgcapital.com/display/WITDB/witdb",
    }
  },
  hurricanedb: {
    overview:[
      {title: "Powerful yet easy to use", desc: "Quickly and easily integrate and explore your data, using either our simple no-code viz builder or state of the art SQL IDE."},
      {title: "Integrates with modern databases", desc: "Kayle can connect to any SQL based datasource through SQLAlchemy, including modern cloud native databases and engines at petabyte scale."},
      {title: "Modern architecture", desc: "Kayle is lightweight and highly scalable, leveraging the power of your existing data infrastructure without requiring yet another ingestion layer."},
      {title: "Rich visualizations and dashboards", desc: "Kayle ships with a wide array of beautiful visualizations. Our visualization plug-in architecture makes it easy to build custom visualizations that drop directly into Kayle."},
    ],
    features: [
      {id: 1, title: "Large Gallery of Visualizations", desc: "This is a description text", pic: KayleGalleryPic, link: "https://confluence.idgcapital.com/display/KAYLE/kayle"},
      {id: 2, title: "Beautiful & Dynamic Dashboards", desc: "This is a description text", pic: KayleSlackDashPic, link: "https://confluence.idgcapital.com/display/KAYLE/kayle"},
      {id: 3, title: "No-Code Chart Builder", desc: "This is a description text", pic: KayleExplorePic, link: "https://confluence.idgcapital.com/display/KAYLE/kayle"},
      {id: 4, title: "Powerful SQL Editor", desc: "This is a description text", pic: KayleSqlLabPic, link: "https://confluence.idgcapital.com/display/KAYLE/kayle"},
    ],
    document: {
      intro: "https://confluence.idgcapital.com/display/HURRICANEDB/hurricanedb",
      quickstart: "https://confluence.idgcapital.com/display/HURRICANEDB/hurricanedb",
      faq: "https://confluence.idgcapital.com/display/HURRICANEDB/hurricanedb",
      others: "https://confluence.idgcapital.com/display/HURRICANEDB/hurricanedb",
    }
  },
  mortalmesh: {
    overview:[
      {title: "Powerful yet easy to use", desc: "Quickly and easily integrate and explore your data, using either our simple no-code viz builder or state of the art SQL IDE."},
      {title: "Integrates with modern databases", desc: "Kayle can connect to any SQL based datasource through SQLAlchemy, including modern cloud native databases and engines at petabyte scale."},
      {title: "Modern architecture", desc: "Kayle is lightweight and highly scalable, leveraging the power of your existing data infrastructure without requiring yet another ingestion layer."},
      {title: "Rich visualizations and dashboards", desc: "Kayle ships with a wide array of beautiful visualizations. Our visualization plug-in architecture makes it easy to build custom visualizations that drop directly into Kayle."},
    ],
    features: [
      {id: 1, title: "Large Gallery of Visualizations", desc: "This is a description text", pic: KayleGalleryPic, link: "https://confluence.idgcapital.com/display/MORTALMESH/mortalmesh"},
      {id: 2, title: "Beautiful & Dynamic Dashboards", desc: "This is a description text", pic: KayleSlackDashPic, link: "https://confluence.idgcapital.com/display/MORTALMESH/mortalmesh"},
      {id: 3, title: "No-Code Chart Builder", desc: "This is a description text", pic: KayleExplorePic, link: "https://confluence.idgcapital.com/display/MORTALMESH/mortalmesh"},
      {id: 4, title: "Powerful SQL Editor", desc: "This is a description text", pic: KayleSqlLabPic, link: "https://confluence.idgcapital.com/display/MORTALMESH/mortalmesh"},
    ],
    document: {
      intro: "https://confluence.idgcapital.com/display/MORTALMESH/mortalmesh",
      quickstart: "https://confluence.idgcapital.com/MORTALMESH/mortalmesh",
      faq: "https://confluence.idgcapital.com/display/MORTALMESH/mortalmesh",
      others: "https://confluence.idgcapital.com/display/MORTALMESH/mortalmesh",
    }
  },
  duskbladesql: {
    overview:[
      {title: "Powerful yet easy to use", desc: "Quickly and easily integrate and explore your data, using either our simple no-code viz builder or state of the art SQL IDE."},
      {title: "Integrates with modern databases", desc: "Kayle can connect to any SQL based datasource through SQLAlchemy, including modern cloud native databases and engines at petabyte scale."},
      {title: "Modern architecture", desc: "Kayle is lightweight and highly scalable, leveraging the power of your existing data infrastructure without requiring yet another ingestion layer."},
      {title: "Rich visualizations and dashboards", desc: "Kayle ships with a wide array of beautiful visualizations. Our visualization plug-in architecture makes it easy to build custom visualizations that drop directly into Kayle."},
    ],
    features: [
      {id: 1, title: "Large Gallery of Visualizations", desc: "This is a description text", pic: KayleGalleryPic, link: "https://confluence.idgcapital.com/display/DUSKBLADESQL/duskbladesql"},
      {id: 2, title: "Beautiful & Dynamic Dashboards", desc: "This is a description text", pic: KayleSlackDashPic, link: "https://confluence.idgcapital.com/display/DUSKBLADESQL/duskbladesql"},
      {id: 3, title: "No-Code Chart Builder", desc: "This is a description text", pic: KayleExplorePic, link: "https://confluence.idgcapital.com/display/DUSKBLADESQL/duskbladesql"},
      {id: 4, title: "Powerful SQL Editor", desc: "This is a description text", pic: KayleSqlLabPic, link: "https://confluence.idgcapital.com/display/DUSKBLADESQL/duskbladesql"},
    ],
    document: {
      intro: "https://confluence.idgcapital.com/display/DUSKBLADESQL/duskbladesql",
      quickstart: "https://confluence.idgcapital.com/display/DUSKBLADESQL/duskbladesql",
      faq: "https://confluence.idgcapital.com/display/DUSKBLADESQL/duskbladesql",
      others: "https://confluence.idgcapital.com/display/DUSKBLADESQL/duskbladesql",
    }
  },
  sheenflow: {
    overview:[
      {title: "Powerful yet easy to use", desc: "Quickly and easily integrate and explore your data, using either our simple no-code viz builder or state of the art SQL IDE."},
      {title: "Integrates with modern databases", desc: "Kayle can connect to any SQL based datasource through SQLAlchemy, including modern cloud native databases and engines at petabyte scale."},
      {title: "Modern architecture", desc: "Kayle is lightweight and highly scalable, leveraging the power of your existing data infrastructure without requiring yet another ingestion layer."},
      {title: "Rich visualizations and dashboards", desc: "Kayle ships with a wide array of beautiful visualizations. Our visualization plug-in architecture makes it easy to build custom visualizations that drop directly into Kayle."},
    ],
    features: [
      {id: 1, title: "Large Gallery of Visualizations", desc: "This is a description text", pic: KayleGalleryPic, link: "https://confluence.idgcapital.com/display/SHEENFLOW/sheenflow"},
      {id: 2, title: "Beautiful & Dynamic Dashboards", desc: "This is a description text", pic: KayleSlackDashPic, link: "https://confluence.idgcapital.com/display/SHEENFLOW/sheenflow"},
      {id: 3, title: "No-Code Chart Builder", desc: "This is a description text", pic: KayleExplorePic, link: "https://confluence.idgcapital.com/display/SHEENFLOW/sheenflow"},
      {id: 4, title: "Powerful SQL Editor", desc: "This is a description text", pic: KayleSqlLabPic, link: "https://confluence.idgcapital.com/display/SHEENFLOW/sheenflow"},
    ],
    document: {
      intro: "https://confluence.idgcapital.com/display/SHEENFLOW/sheenflow",
      quickstart: "https://confluence.idgcapital.com/display/SHEENFLOW/sheenflow",
      faq: "https://confluence.idgcapital.com/display/SHEENFLOW/sheenflow",
      others: "https://confluence.idgcapital.com/display/SHEENFLOW/sheenflow",
    }
  },
  stealthward: {
    overview:[
      {title: "Powerful yet easy to use", desc: "Quickly and easily integrate and explore your data, using either our simple no-code viz builder or state of the art SQL IDE."},
      {title: "Integrates with modern databases", desc: "Kayle can connect to any SQL based datasource through SQLAlchemy, including modern cloud native databases and engines at petabyte scale."},
      {title: "Modern architecture", desc: "Kayle is lightweight and highly scalable, leveraging the power of your existing data infrastructure without requiring yet another ingestion layer."},
      {title: "Rich visualizations and dashboards", desc: "Kayle ships with a wide array of beautiful visualizations. Our visualization plug-in architecture makes it easy to build custom visualizations that drop directly into Kayle."},
    ],
    features: [
      {id: 1, title: "Large Gallery of Visualizations", desc: "This is a description text", pic: KayleGalleryPic, link: "https://confluence.idgcapital.com/display/STEALTHWARD/stealthward"},
      {id: 2, title: "Beautiful & Dynamic Dashboards", desc: "This is a description text", pic: KayleSlackDashPic, link: "https://confluence.idgcapital.com/display/STEALTHWARD/stealthward"},
      {id: 3, title: "No-Code Chart Builder", desc: "This is a description text", pic: KayleExplorePic, link: "https://confluence.idgcapital.com/display/STEALTHWARD/stealthward"},
      {id: 4, title: "Powerful SQL Editor", desc: "This is a description text", pic: KayleSqlLabPic, link: "https://confluence.idgcapital.com/display/STEALTHWARD/stealthward"},
    ],
    document: {
      intro: "https://confluence.idgcapital.com/display/STEALTHWARD/stealthward",
      quickstart: "https://confluence.idgcapital.com/display/STEALTHWARD/stealthward",
      faq: "https://confluence.idgcapital.com/display/STEALTHWARD/stealthward",
      others: "https://confluence.idgcapital.com/display/STEALTHWARD/stealthward",
    }
  },
}

export { Tools, Apps, Meta, AppLogo };
