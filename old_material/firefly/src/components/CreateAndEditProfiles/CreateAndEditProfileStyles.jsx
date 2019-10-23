import { makeStyles } from "@material-ui/core";

const createProfileStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    fontFamily: "'Nunito', sans-serif",
    backgroundColor: "#f6f5ff",
    // height: "100vh"
  },
  sizingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
    ...theme.paper
  },
  header: {
    ...theme.headerMargin
  },
  cardContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  card: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    padding: "4% 4% 7%"
  },
  firefly: {
    width: "40%",
    margin: "2% 5% 2% 4%"
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "70%",
    alignItems: "center",
    justifyContent: "center"
  },
  firstName: {
    marginBottom: "10%",
    width: "100%"
  },
  lastName: {
    width: "100%"
  },
  nameHeader: {
    margin: 0,
    padding: 0,
    textTransform: "uppercase",
    marginBottom: "3px",
    marginLeft: "1%"
  },
  field: {
    ...theme.input,
    width: "70%",
    paddingRight: "20%"
  },
  buttonContainer: {
    display: "flex",
    marginTop: "10px",
    marginBottom: "25px",
    height: "5%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  cancel: {
    ...theme.secondaryButton,
    width: "25%",
    padding: ".5rem 0",
    marginRight: "40px",
    "&:active": {
      margin: "3px 40px -3px 0px"
    }
  },
  save: {
    ...theme.primaryButton,
    width: "25%",
    padding: ".5rem 0"
  },
  delete: {
    ...theme.smallIconButton,
    color: "#c7cbd1",
    padding: ".8rem 1rem",
    fontSize: "2rem",
    margin: "2% 0 -2% 2%",
    "&:active": {
      boxShadow: "none",
      margin: "2.2% 0 -2.2% 2%"
    },
    "&:hover": {
      cursor: "pointer"
    },
    "&:focus": {
      outline: "none"
    }
  },
  dialogPaper: {
    maxWidth: "80%",
    borderRadius: "20px",
    padding: "2% 1%"
  },
  dialogTitle: {
    color: "#5b4eff",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: "700",
    fontSize: "28px"
  },
  dialogAction: {
    justifyContent: "space-between"
  },
  dialogButtonContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  dialogButtons: {
    fontWeight: "700",
    fontFamily: "'Nunito', sans-serif",
    borderRadius: "7px",
    border: "2px solid #ABB0BA",
    boxShadow: "0px 2px #8F96A3",
    width: "25%",
    padding: "8px 0",
    letterSpacing: "1px",
    fontSize: "16px",
    "&.cancel": {
      background: "#fff",
      color: "#4aa810",
      "&:active": {
        boxShadow: "none",
        marginTop: "3px",
        marginBottom: "-3px"
      },
      "&:hover": {
        cursor: "pointer"
      }
    },
    "&.remove": {
      background: "#dc143c",
      color: "#fff",
      border: "none",
      boxShadow: "0px 3px #A30F2D",
      "&:active": {
        boxShadow: "none",
        marginTop: "3px",
        marginBottom: "-3px"
      },
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  deleteButtonContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    marginTop: "2%",
    marginLeft: "3%"
  }
}));

export default createProfileStyles;
