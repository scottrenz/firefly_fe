import { makeStyles } from "@material-ui/core/styles";

const createProfileClasses = makeStyles(theme => ({
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    width: "100%",
    fontFamily: "'Nunito', sans-serif",
    padding: "0",
    backgroundColor: "#f6f5ff",
    // height: "100vh"
  },
  sizingContainer: {
    ...theme.paper,
    width: "85%",
    // height: "100%",
    
  },
  header: {
    ...theme.headerMargin,
  },
  cardContainer: {
    height: "445px",
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  card: {
    "&.left": {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      padding: "0 5%",
    },
    "&.right": {
      padding: "3%",
      width: "500px"
    }
  },
  firefly: {
    display: "flex",
    width: "100%",
  },
  accessory: {
    display: "flex",
    flexDirection: "column",
    height: "86px",
    marginBottom: "60px"
  },
  lightColor: {
    marginTop: "20%"
  },
  h3: {
    margin: "3%",
    marginBottom: "5px",
  },
  input: {
    ...theme.input,
    fontSize: "18px",
    margin: "3%",
    marginBottom: "57px",
    width: "90%",
    "&:focus": {
      outline: "none"
    }
  },
  sliderContainer: {
    height: "77px"
  },
  slider: {
    margin: "0 4%",
    height: "22px"
  },
  buttonContainer: {
    display: "flex",
    margin: "5% 0",
    justifyContent: "center",
    alignItems: "center"
  },

  a: {
    width: "200px",
    "text-decoration": "none",
    marginRight: "60px",
  },

  button: {
    display: "flex",
    justifyContent: "center",
    fontSize: "16px",
    fontFamily: "'Nunito', sans-serif",
    borderRadius: "10px",
    boxShadow: "0px 3px #8F96A3",
    width: "200px",
    height: "44px",
    padding: "8px 0",
    "text-decoration": "none",
    letterSpacing: "1px",

    "&.back": {
      ...theme.secondButton,
      width: "100%",
      background: "#fff",
      color: "#4aa810",
      
      "&:active": {
        boxShadow: "none",
        marginTop: "3px",
        marginBottom: "-3px",
      }
    },
    "&.save": {
      ...theme.primaryButton,
      width: "100%",
      background: "#4aa810",
      color: "#e2f5d6",
      border: "none",
      boxShadow: "0px 3px #3E8C0D",
      "&:active": {
        boxShadow: "none",
        marginTop: "3px",
        marginBottom: "-3px"
      }
    },
    "&:hover": {
      cursor: "pointer"
    }
  }
}));

export default createProfileClasses;
