import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    position: "relative",
  },
  solutionPage: {
    display: "flex",
    position: "relative",
    top: window.outerHeight.toString(),
    left: "0",
    width: "100vw",
    height: "50vh",
    color: "white",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
  },
  emptyPage: {
    display: "flex",
    position: "relative",
    top: window.outerHeight.toString(),
    left: "0",
    width: "100vw",
    height: "26vh",
    // backgroundImage: 'url(' + require('../../images/holodata-empty-feature.svg') + ')',
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
  },
}));
