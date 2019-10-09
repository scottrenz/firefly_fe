import { makeStyles } from "@material-ui/core/styles";

const WorldNavStyles = makeStyles(theme => ({
  navContainer: {
    display: "flex",
    width: "90%",
    // border: "white 6px solid",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "5%"
  },
  x: {
    lineHeight: "0",
    fontSize: "2rem"
  },
  iconButton: {
    ...theme.smallIconButton,
    padding: "1.2rem"
  },

  addButton: {
    ...theme.secondaryButton,
    padding: "1.6rem",
    alignItems: "center"
  },
  link: {
    textDecoration: "none",
    color: " #4aa810"
  },
  ffOutline: {
    width: "5rem",
    marginLeft: "1rem"
  },
  plus: {
    fontSize: "3rem",
    lineHeight: "0"
  },
  bigButtonContainer: {
    display: "flex",
    width: "30%",
    justifyContent: "space-between"
  }
}));

export default WorldNavStyles;
