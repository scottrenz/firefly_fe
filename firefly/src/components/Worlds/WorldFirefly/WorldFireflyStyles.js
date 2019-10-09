import { makeStyles } from "@material-ui/core/styles";

const WorldFireflyStyles = makeStyles({
  container: {
    // border: " solid pink 2px",
    position: "absolute",
    // marginLeft: "200px",
    width: "170px"
  },
  draggableFirefly: {
    position: 'absolute',
    // background:'white',
    padding:'0.5rem 1rem',
    cursor: "default",
    "&.open": {
      zIndex: "1000",
    }
  },
  fireflyWrapper: {
    "&.move" : {
      cursor: 'move',
      border: "2px dashed #f9dc28",
      borderRadius: "20px",
      padding: "3%",
    }
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
    height: "35px",
    zIndex: "1",
    filter: "drop-shadow(1px 1px 1px #494d4f)"
  },
  hidden: {
    height: "35px",
    visibility: "hidden"
  },
  move: {
    fontSize: "26px",
    color: "#f9dc28",
    marginTop: "19px",
  },
  pen: {
    fontSize: "26px",
    color: "#f9dc28",
    marginTop: "-10px"
  },
  trash: {
    fontSize: "26px",
    color: "#f9dc28",
    marginTop: "19px"
  },

  dialogPaper: {
    maxWidth: "80%",
    borderRadius: "20px",
    padding: "2% 1%",
    width: "598px",
    height: "325px"
  },
  dialogContainer: {
    fontFamily: "'Nunito', sans-serif"
  },
  dialogTop: {
    display: "flex"
  },
  dialogText: {
    width: "100%",
    fontSize: "34px",
    letterSpacing: "7px",
    color: "#5B4EFF",
    fontWeight: "900",
    textAlign: "center",
    paddingTop: "110px"
  },
  dialogButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  dialogButtons: {
    borderRadius: "10px",
    border: "2px solid #ABB0BA",
    boxShadow: "0px 2px #8F96A3",
    width: "44px",
    height: "44px",
    letterSpacing: "1px",
    fontSize: "20px",
    paddingTop: "4px",

    "&.cancel": {
      color: "#727C8C",
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
      color: "#4BA810",
      "&:active": {
        boxShadow: "none",
        marginTop: "3px",
        marginBottom: "-3px"
      },
      "&:hover": {
        cursor: "pointer"
      }
    }
  }
});

export default WorldFireflyStyles;
