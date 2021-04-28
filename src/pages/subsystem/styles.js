import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.main,
  },
  emptyPage: {
    display: "flex",
    position: "relative",
    top: window.outerHeight.toString(),
    left: "0",
    width: "100vw",
    height: "20vh",
  },
  helpPage: {
    display: "flex",
    position: "relative",
    top: window.outerHeight.toString(),
    left: "0",
    width: "100vw",
    height: "50vh",
    color: "white",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
  },
}));