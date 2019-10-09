import { makeStyles } from "@material-ui/core";

const myFireflyStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    // justifyContent: "center",
    padding: "0 4.7%",
    backgroundColor: "#f6f5ff",
    // height: "100vh"
  },
  header: {
    ...theme.headerMargin,
    color: "#5B4EFF",
    fontSize: "34px",
    letterSpacing: "7px",
    fontWeight: "900",
    textTransform: "uppercase",
    fontFamily: "'Nunito', sans-serif"
  },
  mainBody: {
    display: "flex",
    width: "100%",
    height: "75vh",
    border: "0",
    boxShadow: "0px 20px 30px - 20px rgba(0, 0, 0, 0.3)",
    borderRadius: "20px",
    backgroundColor: "#FFF"
  },
  leftParent: {
    ...theme.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  leftContainer: {
    ...theme.paper,
    width: "60%",
    height: "78%",
    boxShadow: "none"
  },
  fireflyContainer: {
    width: "264px",
    margin: "0 auto",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  firefly: {
    width: "62%"
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "space-between",
    width: "47%",
    height: "80%"
  },
  rightCards: {
    ...theme.secondaryButton,
    width: "100%",
    height: "45%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #382EB8",
    borderRadius: "10px",
    boxShadow: "0px 3px #382EB8"
  },
  rightCardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rightCardsText: {
    color: "#FFF",
    fontSize: "18px",
    fontWeight: "800",
    letterSpacing: "1.5px"
  },
  rightCardsImg: {
    width: "15%"
  },
  buttonContainer: {
    width: "65%",
    display: "flex",
    justifyContent: "space-between"
  },
  chooseFirefly: {
    ...theme.secondaryButton,
    width: "100%",
    padding: ".7rem 0"
  },
  pushRight: {
    width: "60%",
    margin: "5% auto",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  edit: {
    display: "flex",
    width: "22px",
    height: "21px",
    color: "#4AA810",
    marginLeft: "3px",
    alignItems: "center",
    justifyContent: "center"
  },
  editContainer: {
    ...theme.smallIconButton,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "44px",
    height: "44px"
  },
  usernameContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginRight: "-44px"
  },
  username: {
    textAlign: "center",
    color: "#152F04",
    fontWeight: "bold",
    fontSize: "21px",
    letterSpacing: "-0.28px",
    lineHeight: "28px"
  }
}));

export default myFireflyStyles;
