import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => {
  return ({
    appBar: {
      width: "100vw",
      paddingTop: theme.spacing(1),
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: "#000000",
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
      color: theme.palette.text.secondary,
      fontSize: 14,
      "&:hover": {
        cursor: "pointer",
        color: theme.palette.text.hint,
      },
      display: "flex",
      alignItems: "center",
    },
    gap: {
      marginRight: theme.spacing(10),
    },
    headerMenu: {
      position: "absolute",
      marginLeft: "15%",
      marginRight: "15%",
      top: theme.spacing(7),
      width: "70%",
      backgroundColor: "#161616",
      padding: theme.spacing(2),
    },
    productTitle: {
      color: theme.palette.text.hint,
      fontSize: 14,
      fontWeight: 500,
      "&:hover": {
        cursor: "pointer",
        color: "white",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: theme.palette.primary.main,
        width: "50%"
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
      color: theme.palette.text.hint,
      "&:hover": {
        color: "white",
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
      backgroundColor: theme.palette.text.primary,
    },
  });
});
