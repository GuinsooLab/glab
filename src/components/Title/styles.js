import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    flexDirection: "column",
  },
  featureTitle: {
    color: "white",
    fontWeight: 800,
    fontSize: 38,
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  featureTip: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100vw",
    color: theme.palette.text.hint,
    fontSize: 18,
    marginBottom: theme.spacing(8)
  },
  tip: {
    width: 600,
  },
}));
