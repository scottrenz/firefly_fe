import { makeStyles } from "@material-ui/core/styles";

const chooseProfileStyles = makeStyles(theme => ({
  header: {
    ...theme.headerMargin,
    marginBottom: "2%"
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 4.7%",
    backgroundColor: "#f6f5ff",
    // height: "100vh"
  },
  sizingContainer: {
    ...theme.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "85%",
    margin: "0 10%"
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // alignItems: "center",
    overflowY: "scroll",
    width: "100%",
    height: "450px",
    margin: "2%",
    maxHeight: "70vh",
    "&::-webkit-scrollbar": {
      width: "1%"
    },
    // "&::-webkit-scrollbar-track": {
    //   boxShadow: "inset 0 0 5px grey",
    //   borderRadius: "10px",
    // },
    "&::-webkit-scrollbar-thumb": {
      background: "#b6e699",
      borderRadius: "10px"
    },
    //This after stuff is for flex spacing when there's only two in the line
    "&::after": {
      content: "''",
      width: "25%",
      margin: "1%",
      marginTop: "-10%",
      padding: "2% 1%",
      visibility: "hidden",
      zIndex: "-1000"
    }
    // boxSizing: "border-box",
    // background: "#e3e5e8",
    // backgroundRepeat: "repeat",
    // border: "2px solid #abb0ba",
    // boxShadow: "1px 3px 2px #8f96a3z",
    // borderRadius: "1rem",
  },
  card: {
    ...theme.clickable,
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #ABB0BA",
    borderRadius: "10px",
    boxShadow: "0px 3px #8F96A3",
    width: "25%",
    height: "50%",
    margin: "2% 2.9%",
    padding: "2% 1%",
    "&:active": {
      margin: "2.1% 2.9% 1.9%",
      boxShadow: "none"
    }
  },
  backButtonContainer: {
    display: "flex",
    marginTop: "5%",
    marginLeft: "2%"
  },
  backButtonStyle: {
    ...theme.secondaryButton,
    padding: "0.4rem 8rem",
    width: "100%",
    marginBottom: "15%",
    lineHeight: "0",
    "&:active": {
      marginBottom: "15%"
    }
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2%",
    paddingTop: "2%",
    maxWidth: "100%"
  },
  name: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%"
  },
  flysize: {
    width: "80%"
  }
}));

export default chooseProfileStyles;
