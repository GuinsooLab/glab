import { fade, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#000000",
    color: theme.palette.text.hint,
    paddingTop: theme.spacing(3),
  },
  logo: {
    display: "flex",
    marginTop: theme.spacing(3),
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
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
  footerBody2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(3),
  },
  title2: {
    fontSize: 16,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.hint,
    fontWeight: 800,
  },
  title22: {
    fontSize: 16,
    color: theme.palette.text.hint,
    fontWeight: 400,
  },
  body2: {
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    marginBottom: theme.spacing(1),
    "&:hover": {
      color: "white",
      cursor: "pointer",
    },
    "& img": {
      width: 18,
      height: 18,
    }
  },
  body22: {
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    marginBottom: theme.spacing(1),
    "&:hover": {
      color: "white",
      cursor: "pointer",
    },
    "& svg": {
      width: 18,
      height: 18,
    }
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
    backgroundColor: theme.palette.text.secondary,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 4,
    "&:hover, &:focus": {
      backgroundColor: "white",
      // color: theme.palette.primary.main,
      color: "#000000",
      fontWeight: 600,
    }
  },
  button: {
    width: 120,
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: "#ffffff",
    color: "#000000",
    textTransform: "Capitalize",
    "&:hover": {
      cursor: "not-allowed",
      fontWeight: 600,
      backgroundColor: "#ffffff",
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
    direction: "column",
    paddingLeft: theme.spacing(1),
    fontSize: 12,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
  },
  footerItem: {
    color: theme.palette.text.secondary,
    "& span": {
      "&:hover": {
        cursor: "pointer",
      },
      color: theme.palette.primary.main,
    }
  },
  submitButton: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  }
}));