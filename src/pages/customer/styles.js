import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    height: "85vh",
    width: "100vw",
    backgroundColor: "#000",
    color: "#fff",
  },
  bottomPart: {
    height: "24vh",
    width: "83.3vw",
    backgroundColor: "#f2f2f3",
    position: "absolute",
    bottom: "3vh",
  },
  leftPart: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "85vh",
    flexDirection: "column",
  },
  rightPart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "85vh",
    backgroundImage: 'url(' + require('../../images/hero-bg-pattern.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  capital: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    fontSize: 42,
    fontWeight: "bolder",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  content: {
    fontSize: 18,
    color: theme.palette.text.secondary,
    width: 450,
  },
  bottomContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "24vh",
    color: "#000",
    fontWeight: "bolder",
  }
}));