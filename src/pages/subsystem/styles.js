import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    backgroundColor: "#000",
    width: "100vw",
    height: "100vh",
  },
  mainBody: {
    paddingTop: 86,
    display: "flex",
    height: "90vh",
    alignItems: "center",
    color: theme.palette.primary.main,
  },
  footerBody: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  footerHero: {
    "& svg": {
      width: "83.3vw",
      height: "15vh",
    },
  },
  subsystemName: {
    color: "#fff",
    fontWeight: "bolder",
    fontSize: 22,
    paddingLeft: theme.spacing(1),
  },
  subsystemLink: {
    color: "#fff",
    fontSize: 16,
    paddingRight: theme.spacing(4),
    cursor: "pointer",
  },
  subsystemHeader: {
    height: "64px",
    display: "flex",
    alignItems: "center",
  },
  paperLeft: {
    height: "70vh",
    display: "flex",
    alignItems: "center",
  },
  pageRight: {
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  smallLogo: {
    height: 23,
  },
  logoSlogan1: {
    fontSize: 42,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    color: theme.palette.text.secondary,
    width: "600px",
  },
  logoSlogan2: {
    fontSize: 42,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    color: "#ffffff",
    width: "600px",
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    height: 2,
    width: 40,
  },
  logoBody: {
    fontSize: 16,
    fontWeight: 450,
    color: theme.palette.text.hint,
  },
  buttonInfoToMore: {
    fontSize: 16,
    borderColor: theme.palette.text.hint,
    color: "#000",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: 0,
    textTransform: "Capitalize",
    fontWeight: "bolder",
  },
  buttonInfoToDemo: {
    color: "#fff",
    textTransform: "Capitalize",
    fontWeight: "bolder",
  },
  mainTitle: {
    display: "flex",
    color: theme.palette.text.primary,
    justifyContent: "center",
  },
}));