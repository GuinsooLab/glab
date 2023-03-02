import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    background: "#000",
  },
  bg: {
    height: "100vh",
    width: "100vw",
    // backgroundImage: 'url(' + require('../../images/gradientBlobs.svg') + ')',
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // opacity: 0.4,
    // transform: "rotate(180deg)",
    // zIndex: -1,
  },
  fg: {
    position: "absolute",
    top: 90,
    bottom: 30,
    left: 0,
    right: 0,
  },
  leftPart: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    height: "calc(100vh - 200px)",
    width: "100vw",
  },
  rightPart: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "column",
    height: "calc(100vh - 120px)",
  },
  capital: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: theme.spacing(1),
    marginBottom: 4,
    color: theme.palette.text.hint,
  },
  title: {
    fontSize: 64,
    fontWeight: 500,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    color: "#fff",
  },
  content: {
    fontSize: 15,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));