import { makeStyles } from "@material-ui/core/styles";

const addChildStyles = makeStyles(theme => ({
  paper: {
    // ...theme.paper,
    display: "flex",
    flexDirection: "column",
    width: "99%",
    marginBottom: "1rem"
  },
  hidden: {
    visibility: "hidden",
    alignSelf: "flex-end",
    fontSize: "2rem",
    marginTop: "2rem",
    marginRight: "2rem"
  },
  hiddenError: {
    visibility: "hidden"
  },
  close: {
    alignSelf: "flex-end",
    color: "#5b4eff",
    fontSize: "2rem",
    marginTop: "2rem",
    marginRight: "2rem"
  },
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    // For mobiles and smaller
    ["@media (max-width:500px)"]: {
      display: "flex",
      flexDirection: "column",
      alignItems: 'center',
      width:'100%',

  },
    
  },
  firefly: {
    width: "40%",
    marginTop: "-5%",// For mobiles and smaller
    ["@media (max-width:500px)"]: {
      width:'60%',
      marginTop:'-15%',
      marginBottom:'-5%'
  },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    justifyContent: "center",
    // For mobiles and smaller
    ["@media (max-width:500px)"]: {
      width:'80%',
      margin: '0 auto',
  },
  },
  input: {
    ...theme.input,
    width: "90%",
    marginTop: "1rem",
    // For mobiles and smaller
    ["@media (max-width:500px)"]: {
      alignItems: 'center',
      width:'100%',
      marginBottom: '0',
      margin:'0 auto',
  },
  },
  name: {
    // For mobiles and smaller
    ["@media (max-width:500px)"]: {
      alignItems: 'center',
      width:'100%',
      marginBottom: '0',
  },
  }

}));

export default addChildStyles;
