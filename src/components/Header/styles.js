import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => {
  return ({
    appBar: {
      width: "100vw",
      // paddingTop: theme.spacing(1),
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: "#ffffff",
      height: 64,
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
    subTitle: {
      width: 120,
      color: theme.palette.text.primary,
      fontSize: 14,
      fontWeight: 600,
      "&:hover": {
        cursor: "pointer",
        color: "#000000",
      },
      display: "flex",
      alignItems: "center",
    },
    gap: {
      marginLeft: "12%",
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
      color: "#000000",
      fontSize: 14,
      fontWeight: 500,
      "&:hover": {
        cursor: "pointer",
      }
    },
    productDesc: {
      color: theme.palette.text.secondary,
      fontSize: 12,
    },
    mainTitle: {
      color: "white",
      fontSize: 16,
      fontWeight: 800,
      marginBottom: theme.spacing(3),
    },
    visitButton: {
      marginTop: theme.spacing(5),
      color: "#ffffff",
      "&:hover": {
        fontWeight: 600,
      }
    },
    gridCover: {
      padding: theme.spacing(2),
    },
    gridContent: {
      backgroundColor: "#262626",
      paddingBottom: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  });
});
