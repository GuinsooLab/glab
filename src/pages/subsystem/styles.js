import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    backgroundColor: "#000000",
  },
  mainBody: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.main,
  },
  mainPart: {
    height: "100%",
    width: "100%",
  },
  paperLeft: {
    height: "90vh",
    paddingTop: "18%",
    position: "absolute",
    zIndex: 999,
  },
  pageRight: {
    height: "100vh",
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "flex-end",
  },
  smallLogo: {
    height: 23,
  },
  logoSlogan1: {
    fontSize: 32,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
    color: "#ffffff",
  },
  logoSlogan2: {
    fontSize: 68,
    fontWeight: 600,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    color: "#ffffff",
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
    marginTop: theme.spacing(10),
    borderColor: theme.palette.text.hint,
    color: theme.palette.text.hint,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: 4,
    "&:hover": {
      color: "#ffffff",
      borderColor: "#ffffff",
    },
    textTransform: "Capitalize",
  },
  mainTitle: {
    display: "flex",
    color: theme.palette.text.primary,
    justifyContent: "center",
  },
  featurePart: {
    display: "flex",
    color: theme.palette.text.primary,
    backgroundColor: "#ffffff",
    width: "100vw",
    height: "80vh",
    "& div": {
      height: "100%",
    },
    "& button": {
      width: 160,
      marginTop: theme.spacing(5),
      textTransform: "Capitalize",
    }
  },
  featureInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "80vh",
    "& img": {
      boxShadow: "2px 2px 2px rgba(0,0,0,.1)",
    },
    "&:hover": {
      "& svg": {
        marginLeft: theme.spacing(1),
      }
    }
  }
}));