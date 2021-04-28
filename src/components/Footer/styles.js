import { fade, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    backgroundColor: "#2d303a",
    color: fade("#fff", 0.9),
    paddingTop: theme.spacing(3),
  },
  logo: {
    marginTop: theme.spacing(6),
    display: "flex",
    width: "100%",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    height: 34,
  },
  logoBody: {
    marginTop: theme.spacing(3),
    display: "flex",
    width: "100%",
    justifyContent: "center",
    color: theme.palette.text.hint,
    "&:hover": {
      color: "white",
      fontWeight: 600,
    },
  },
  footerPos: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  footerPos2: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    textAlign: "center",
  },
  footerBody1: {
    display: "flex",
    marginTop: theme.spacing(3),
    flexDirection: "column",
  },
  footerBody: {
    display: "flex",
    marginTop: theme.spacing(3),
    flexDirection: "column",
  },
  title2: {
    fontSize: 16,
    marginBottom: theme.spacing(2),
    color: "white",
    fontWeight: 800,
  },
  body2: {
    fontSize: 14,
    marginBottom: theme.spacing(1),
    "&:hover": {
      color: "white",
      fontWeight: 600,
    },
  },
  body3: {
    fontSize: 14,
    marginBottom: theme.spacing(1),
  },
  title3: {
    fontSize: 16,
    fontWeight: 800,
    marginBottom: theme.spacing(1),
  },
  title4: {
    marginTop: theme.spacing(0.5),
  },
  title5: {
    marginTop: theme.spacing(0.5),
    fontSize: 18,
  },
  dividerPos: {
    display: "flex",
    width: "100%",
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
  popDivider: {
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.text.hint,
  },
  appDivider: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    backgroundColor: fade(theme.palette.text.hint, 0.2),
  },
  appTopList: {
    padding: 0,
  },
  input: {
    marginTop: theme.spacing(2),
    backgroundColor: "white",
    padding: theme.spacing(1),
    borderRadius: 4,
  },
  button: {
    width: 150,
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: "white",
    textTransform: "Capitalize",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      fontWeight: 800,
    },
  },
  items: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    color: theme.palette.text.hint,
    marginBottom: theme.spacing(5),
  },
  copyright: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    color: theme.palette.text.hint,
    marginBottom: theme.spacing(5),
  },
}));