import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import screen1 from "../../assets/images/screen1.png";
import screen2 from "../../assets/images/screen2.png";
import screen3 from "../../assets/images/screen3.png";
import screen4 from "../../assets/images/screen4.png";
import screen5 from "../../assets/images/screen5.png";
import screen6 from "../../assets/images/screen6.png";
import screen7 from "../../assets/images/screen7.png";

import leftarrow from "../../assets/images/BlueLeftArrow.svg";
import rightarrow from "../../assets/images/BlueRightArrow.svg";

const MultiStepTutorial = props => {
  const classes = makeStyles(theme => ({
    app: {},
    root: {
    //   height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#D0CCFF"
    },
    image: {
    //   height: "100vh",
      marginLeft: "-55px"
    },
    wrapper: {
      height: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    arrowcontainer: {
      position: "fixed",
      bottom: "11%",
      display: "flex",
      justifyContent: "space-between",
      width: "100px",
      marginLeft: "3px"
    },
    arrowNumber: {
      fontSize: "4.3rem",
      fontWeight: 600
    },
    disabled: {
      opacity: "0.5"
    },
    topBar: {
      position: "absolute",
      right: "10.7%",
      top: "4.7%",
      margin: "0px 1%",
      marginTop: "2%"
    },
    topBarButton: {
      ...theme.smallIconButton,
      display: "flex",
      color: "#4aa810",
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.8rem",
      width: "40px",
      height: "40px",
      textDecoration: "none",
      border: "none"
    }
  }))();

  const [step, setStep] = useState(0);
  const [back, setBack] = useState(0);

  const [location, setLocation] = useState({
    pathname: "/myfirefly"
  });

  useEffect(() => {
    if (props.location.firefly) {
      setLocation({
        pathname: "/game",
        firefly: props.location.firefly,
        selectedWorldId: props.location.selectedWorldId
      });
    }
  }, []);

  useEffect(() => {
    if (back === 1) {
      props.history.goBack();
    }
  }, [back]);

  switch (step) {
    default:
      return (
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <div className={classes.topBar}>
              <Link to={location} className={classes.topBarButton}>
                <i className="fas fa-times" />
              </Link>
            </div>
            <div className={classes.arrowcontainer}>
              <img src={leftarrow} className={classes.disabled} />
              <span className={classes.arrowNumber}>1</span>
              <img src={rightarrow} onClick={() => setStep(step + 1)} />
            </div>
            <img className={classes.image} src={screen1} />
          </div>
        </div>
      );
    case 1:
      return (
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <div className={classes.topBar}>
              <Link to={location} className={classes.topBarButton}>
                <i className="fas fa-times" />
              </Link>
            </div>
            <div className={classes.arrowcontainer}>
              <img src={leftarrow} onClick={() => setStep(step - 1)} />
              <span className={classes.arrowNumber}>2</span>
              <img src={rightarrow} onClick={() => setStep(step + 1)} />
            </div>
            <img className={classes.image} src={screen2} />
          </div>
        </div>
      );
    case 2:
      return (
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <div className={classes.topBar}>
              <Link to={location} className={classes.topBarButton}>
                <i className="fas fa-times" />
              </Link>
            </div>
            <div className={classes.arrowcontainer}>
              <img src={leftarrow} onClick={() => setStep(step - 1)} />
              <span className={classes.arrowNumber}>3</span>
              <img src={rightarrow} onClick={() => setStep(step + 1)} />
            </div>
            <img className={classes.image} src={screen3} />
          </div>
        </div>
      );
    case 3:
      return (
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <div className={classes.topBar}>
              <Link to={location} className={classes.topBarButton}>
                <i className="fas fa-times" />
              </Link>
            </div>
            <div className={classes.arrowcontainer}>
              <img src={leftarrow} onClick={() => setStep(step - 1)} />
              <span className={classes.arrowNumber}>4</span>
              <img src={rightarrow} onClick={() => setStep(step + 1)} />
            </div>
            <img className={classes.image} src={screen4} />
          </div>
        </div>
      );
    case 4:
      return (
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <div className={classes.topBar}>
              <Link to={location} className={classes.topBarButton}>
                <i className="fas fa-times" />
              </Link>
            </div>
            <div className={classes.arrowcontainer}>
              <img src={leftarrow} onClick={() => setStep(step - 1)} />
              <span className={classes.arrowNumber}>5</span>
              <img src={rightarrow} onClick={() => setStep(step + 1)} />
            </div>
            <img className={classes.image} src={screen5} />
          </div>
        </div>
      );
    case 5:
      return (
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <div className={classes.topBar}>
              <Link to={location} className={classes.topBarButton}>
                <i className="fas fa-times" />
              </Link>
            </div>
            <div className={classes.arrowcontainer}>
              <img src={leftarrow} onClick={() => setStep(step - 1)} />
              <span className={classes.arrowNumber}>6</span>
              <img src={rightarrow} onClick={() => setStep(step + 1)} />
            </div>
            <img className={classes.image} src={screen6} />
          </div>
        </div>
      );
    case 6:
      return (
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <div className={classes.topBar}>
              <Link to={location} className={classes.topBarButton}>
                <i className="fas fa-times" />
              </Link>
            </div>
            <div className={classes.arrowcontainer}>
              <img src={leftarrow} onClick={() => setStep(step - 1)} />
              <span className={classes.arrowNumber}>7</span>
              <img src={rightarrow} className={classes.disabled} />
            </div>
            <img className={classes.image} src={screen7} />
          </div>
        </div>
      );
  }
};

export default MultiStepTutorial;
