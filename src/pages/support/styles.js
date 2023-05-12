import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    background: "#fff",
  },
  topPart: {
    width: "100vw",
    height: "60vh",
    paddingTop: "10vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomPart: {
    width: "100vw",
    height: "40vh",
    display: "flex",
    justifyContent: "center",
  },
  capital: {
    fontSize: 42,
    fontWeight: "bold",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    textAlign: "center",
    color: "#000",
  },
  content: {
    fontSize: 20,
    maxWidth: 700,
    textAlign: "center",
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(4),
  },
  textInput: {
    width: 700,
    borderRadius: null,
  }
}));