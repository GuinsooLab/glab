import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => {
  return ({
    appBar: {
      width: "100vw",
      height: 64,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: "#ffffff",
      color: "white",
    },
    toolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    logo: {
      marginLeft: theme.spacing(10),
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      height: 40,
    },
    grow: {
      flexGrow: 1,
    },
    titleSpace: {
      marginLeft: theme.spacing(10),
    },
    subTitle: {
      width: 120,
      color: theme.palette.text.primary,
      fontSize: 14,
      fontWeight: 600,
      "&:hover": {
        cursor: "pointer",
        fontWeight: 800,
      },
      display: "flex",
      alignItems: "center",
    },
    gap: {
      marginRight: theme.spacing(10),
    },
    headerMenu: {
      position: "absolute",
      left: 0,
      top: 64,
      width: "100vw",
      backgroundColor: "#ffffff",
      padding: theme.spacing(2),
      borderRadius: 0,
    },
    productTitle: {
      display: "flex",
      alignItems: "center",
      color: "#000000",
      fontSize: 12,
      "&:hover": {
        cursor: "pointer",
      },
      "& img": {
        width: 18,
        height: 18,
      }
    },
    productDesc: {
      color: theme.palette.text.secondary,
      fontSize: 12,
    },
    toolName: {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: theme.palette.text.primary,
      fontSize: 14,

      "&:hover": {
        cursor: "pointer",
      },
      "& img": {
        width: 18,
        height: 18,
      },
      "& span": {
        backgroundColor: "#000000",
        color: "#ffffff",
        fontSize: 12,
        fontWeight: 400,
      }
    },
    toolNameX: {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: theme.palette.text.hint,
      fontSize: 12,
      fontWeight: 600,
      "&:hover": {
        cursor: "not-allowed",
      },
      "& img": {
        width: 18,
        height: 18,
      }
    },
    mainTitle: {
      color: "#000000",
      fontSize: 16,
      fontWeight: 800,
      marginBottom: theme.spacing(3),
    },
    visitButton: {
      "& span": {
        textTransform: "Capitalize",
      },
      backgroundColor: "#000000",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "#ffffff",
        color: "#000000",
      }
    },
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    platformTag: {
      fontSize: 12,
      color: theme.palette.text.secondary,
    },
    solutionPart: {
      minHeight: "30vh",
      display: "flex",
    },
    solutionName: {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: theme.palette.text.primary,
      fontWeight: 600,
      "&:hover": {
        cursor: "not-allowed",
      },
    },
    solutionButton: {
      textTransform: "Capitalize",
      paddingLeft: 0,
      "&:hover": {
        "& svg": {
          marginLeft: theme.spacing(1),
        }
      }
    }
  });
});
