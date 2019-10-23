import { makeStyles } from "@material-ui/core/styles";
import background from "./FireflyWorldBackground.svg";

const chooseWorldStyles = makeStyles(theme => ({
  page: {
    // ...theme.headerMargin,
    backgroundImage: `url(${background})`,
    backgroundPosition: "0px 0px",
    // width: "100vw",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden"
  },
  body: {},
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    fontFamily: "'Nunito', sans-serif"
  },
  fireflyContainer: {
    // border: "dashed yellow 2px",
    marginTop: "2%",
    width: 1000,
    height: 600,
    position: "relative"
  },
  fireflyItem: {
    width: "100px",
    height: "100px"
  },
  tempFirefly: {
    paddingRight: "700px"
  },
  tempFirefly2: {
    paddingLeft: "500px"
  }
}));

export default chooseWorldStyles;
