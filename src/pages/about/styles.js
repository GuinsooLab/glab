import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    marginTop: theme.spacing(20),
    color: theme.palette.text.secondary,
  },
  card: {
    height: 300,
  },
  img: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    "& > img": {
      width: "100vw",
    },
  },
  avatar: {
    backgroundColor: theme.palette.primary.dark,
  },
}));