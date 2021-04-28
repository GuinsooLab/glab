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
      backgroundColor: "white",
      color: theme.palette.primary.main,
    },
    toolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    logo: {
      marginLeft: theme.spacing(34),
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      height: 34,
    },
    subTitle: {
      marginLeft: theme.spacing(2.5),
      marginRight: theme.spacing(2.5),
      textAlign: "center",
      fontWeight: 600,
      width: "10vw",
    },
    menuTitle: {
      marginLeft: theme.spacing(2.5),
      marginRight: theme.spacing(2.5),
      fontWeight: 600,
      borderLeftColor: "inherit",
      borderLeftStyle: "solid",
      borderLeftWidth: "2px",
      paddingLeft: "6px",
    },
    hide: {
      display: "none",
    },
    grow: {
      flexGrow: 1,
    },
    inputRoot: {
      color: "inherit",
      width: "100%",
    },
    headerMenu1: {
      paddingLeft: "20vw",
      paddingRight: "20vw",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(3),
      backgroundColor: theme.palette.primary.main,
    },
    headerMenu2: {
      paddingLeft: "20vw",
      paddingRight: "20vw",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(3),
      backgroundColor: "white",
    },
    headerMenuList: {
      display: "flex",
      flexDirection: "column",
    },
    headerMenuItem: {
      "&:hover, &:focus": {
        backgroundColor: theme.palette.primary.main,
        color: "white",
      },
    },
    headerMenuApp: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      fontWeight: 600,
      "&:hover, &:focus": {
        paddingLeft: "8px",
      },
    },
    headerMenuButton: {
      marginLeft: theme.spacing(2),
      padding: theme.spacing(0.5),
    },
    headerIcon: {
      fontSize: 28,
      color: theme.palette.primary.main,
    },
    catLogo: {
      marginTop: "auto",
      marginBottom: "auto",
    },
    headerIconCollapse: {
      color: "white",
    },
    profileMenu: {
      minWidth: 220,
    },
    appMenu: {
      minWidth: 560,
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      backgroundColor: theme.palette.primary.light,
      color: "white",
      fontWeight: 600,
    },
    profileMenuUser: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(2),
    },
    profileMenuIcon: {
      marginRight: theme.spacing(2),
      color: theme.palette.text.hint,
    },
    profileMenuLink: {
      fontSize: 16,
      textDecoration: "none",
      "&:hover": {
        cursor: "pointer",
      },
    },
    dividerMargin: {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(2),
    },
    appDividerMargin: {
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(1),
    },
  });
});
