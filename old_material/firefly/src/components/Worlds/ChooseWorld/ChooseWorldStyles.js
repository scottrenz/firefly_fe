import { makeStyles } from "@material-ui/core/styles";

const chooseWorldStyles = makeStyles(theme => ({
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    fontFamily: "'Nunito', sans-serif",
    padding: "0",
    backgroundColor: "#f6f5ff",
    // height: "100vh",
    // marginBottom: "50px"
  },
  worldName: {
    fontSize: "3rem"
  },
  title: {
    ...theme.headerMargin,
    fontSize: "34px",
    fontWeight: "900",
    letterSpacing: "7px",
    lineHeight: "46px",
    color: "#5b4eff",
  },
  worldContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "800px",
    // For iPad Pro and larger
    ["@media (min-width:1100px)"]: {
      width: "1000px"
    }
  },
  ///////// World Card Styling //////
  worldCard: {
    width: "370px",
    height: "226px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    marginBottom: "50px",
    border: " 2px solid #abb0ba",
    backgroundColor: " #ffff",
    boxShadow: "0px 3px #8f96a3",
    "&:active": {
      boxShadow: "none",
      margin: "3px 0px 47px 0px"
    },
    // For iPad Pro and larger
    ["@media (min-width:1100px)"]: {
      width: "440px",
      height: "276px"
    },
    h4: {
      fontSize: "22px",
      color: "#152F04",
      fontWeight: "bold"
    }
  },
  worldCardImg: {
    width: "50%"
  },
  buttonContainer: {
    marginTop: "-20px",
    width: "100%"
    // display: "block"
  },
  backButton: {
    ...theme.secondaryButton,
    width: "25%",
    padding: "1rem 0.7rem",
  },
  links: {
    textDecoration: "none",
    color: "#152F04"
  }
}));

export default chooseWorldStyles;
