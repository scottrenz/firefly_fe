import { makeStyles } from "@material-ui/core";

const accountStyles = makeStyles(theme => ({
  container: {
    ...theme.paper,
    display: "flex",
    padding: " 2% 3%",
     // For mobiles and smaller
     ["@media (max-width:500px)"]: {
      flexDirection:'column',
      marginBottom:'15%',
  },
  },
  paper: {
    padding: "20px 20px",
    textAlign: "left",
    color: theme.palette.text.secondary,
    borderRadius: " 20px"
    // marginBottom: "32px",
  },
  mainHeader: {
    ...theme.headerPadding,
    textAlign: "center"
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  editButtons: {
    display: "flex",
    marginTop: "4rem",
    justifyContent: "space-between"
  },
  root: {
    flexGrow: "1",
    fontFamily: "'Nunito', sans-serif",
    backgroundColor: "#f6f5ff",
    // height: "100vh",
    // width: "100vw",
     // For mobiles and smaller
     ["@media (max-width:500px)"]: {
      height: '100%',
  },
  },

  left: {
    width: "100%"
  },
  leftContainerOne: {
    marginRight: "5%",
    marginBottom: "10px"
  },
  leftContainerTwo: {
    marginRight: "5%",
    marginBottom: "54px"
  },
  leftContainer: {
    height: "131px",
    marginRight: "5%"
  },
  header: {
    textAlign: "center",
    color: "#5b4eff",
    fontSize: "34px",
    letterSpacing: "7px",
    fontWeight: "900",
    textTransform: "uppercase",
    marginBottom: "5%"
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: "21px",
    paddingBottom: "21px",
    color: "black"
  },
  sectionHeaderRight: {
    fontWeight: "bold",
    fontSize: "21px",
    paddingBottom: "18px",
    color: "black"
  },
  infoContainer: {
    display: "flex",
    marginBottom: "20px"
  },
  infoLabel: {
    fontSize: "14px",
    paddingTop: "5px",
    width: "140%"
  },
  userInfo: {
    padding: "0",
    fontSize: "18px",
    fontWeight: "600"
  },
  rightCards: {
    width: "60%",
    borderLeft: "1px solid #b6e699",
    paddingLeft: "2%",
     // For mobiles and smaller
     ["@media (max-width:500px)"]: {
     display:'flex',
     flexDirection:'column-reverse',
     width:'100%',
  },
  },
  fireflyContainer: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
    overflowX: "hidden",
    overflowY: "scroll",
    height: "366px",
    width: "100%"
  },
  profileCardContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    width: "100%"
  },
  tempCCInfo: {
    background: "#E3E5E8"
  },
  tempInfo: {
    marginLeft: "25px",
    fontSize: "18px",
    fontWeight: "600"
  },
  fireflyIcon: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: "45%"
  },
  style1: {
    borderTop: "1px solid #b6e699",
    width: "100%"
  },
  edit: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&::before": {
      content: "''",
      padding: "1rem 2rem",
      fontSize: "1.4rem",
      visibility: "hidden"
    }
  },
  iconButton: {
    ...theme.smallIconButton,
    marginBottom: "3px",
    padding: "1rem 1.2rem",
    fontSize: "1.4rem",
    "&:active": {
      margin: "6px 0px -3px 0px"
    }
  },
  textInput: {
    ...theme.input,
    width: "100%"
  },
  button: {
    ...theme.primaryButton,
    margin: "0 auto",
    width: "80%",
    padding: ".7rem 1rem",
    "&:active": {
      margin: "3px auto 0px",
      boxShadow: "none"
    },
    "&.back": {
      ...theme.secondaryButton,
      boxShadow: "none",
    }
  },
  researchSection: {
    display: "flex"
  },
  research: { textDecoration: "underline", color: "#4aa810" },
  checkboxContainer: {
    marginRight: "7%"
  },
  checkboxLabel: {
    position: "relative",
    margin: "auto",
    cursor: "pointer",
    fontSize: "18px",
    lineHeight: "24px",
    height: "18px",
    width: "18px",
    clear: "both",
    "& input": {
      position: "absolute",
      opacity: "0",
      cursor: "pointer",
      "&:checked ~ $checkboxCustom": {
        backgroundColor: "#4aa810",
        borderRadius: "5px",
        " -webkit-transform": "rotate(0deg) scale(1)",
        " -ms-transform": "rotate(0deg) scale(1)",
        transform: "rotate(0deg) scale(1)",
        opacity: "1",
        border: "2px solid #4aa810"
      },
      "&:checked ~ $checkboxCustom::after": {
        " -webkit-transform": "rotate(45deg) scale(1)",
        " -ms-transform": "rotate(45deg) scale(1)",
        transform: "rotate(45deg) scale(1)",
        opacity: "1",
        left: "6px",
        top: "2px",
        width: "4px",
        height: "10px",
        border: "solid white",
        borderWidth: "0 2px 2px 0",
        backgroundColor: "transparent",
        borderRadius: "0"
      }
    }
  },
  checkboxCustom: {
    position: "absolute",
    top: "0px",
    left: "0px",
    height: "18px",
    width: "18px",
    backgroundColor: "transparent",
    borderRadius: "5px",
    transition: "all 0.3s ease-out",
    " -webkit-transition": "all 0.3s ease-out",
    " -moz-transition": "all 0.3s ease-out",
    " -ms-transition": "all 0.3s ease-out",
    " -o-transition": "all 0.3s ease-out",
    border: "2px solid #4aa810",
    "&::after": {
      position: "absolute",
      content: "''",
      left: "12px",
      top: "12px",
      height: "0px",
      width: "0px",
      borderRadius: "5px",
      border: "solid white",
      borderWidth: "0 3px 3px 0",
      " -webkit-transform": "rotate(0deg) scale(0)",
      " -ms-transform": "rotate(0deg) scale(0)",
      transform: "rotate(0deg) scale(0)",
      opacity: "1",
      transition: "all 0.3s ease-out",
      " -webkit-transition": "all 0.3s ease-out",
      " -moz-transition": "all 0.3s ease-out",
      " -ms-transition": "all 0.3s ease-out",
      " -o-transition": "all 0.3s ease-out"
    }
  }
}));

export default accountStyles;
