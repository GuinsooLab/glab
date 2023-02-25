import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    color: "#000",
  },
  bg: {
    height: "100vh",
    width: "100vw",
    backgroundImage: 'url(' + require('../../images/gradientBlobs.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: 0.4,
    transform: "rotate(180deg)",
    zIndex: -1,
  },
  fg: {
    position: "absolute",
    top: 90,
    bottom: 30,
    left: 0,
    right: 0,
  },
  mainPart: {
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "calc(100vh - 120px)",
    width: "100vw",
  },
  capital: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    fontSize: 40,
    fontWeight: "bolder",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.main,
  },
  content: {
    fontSize: 15,
    color: theme.palette.text.primary,
    textAlign: "center",
  },
}));