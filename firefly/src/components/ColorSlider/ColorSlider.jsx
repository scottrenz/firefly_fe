import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

export default function ColorSlider(props) {
  const [sliderValue, setSliderValue] = useState();

  useEffect(() => {
    setSliderValue(props.value);
  }, [props])

  const useStyles = makeStyles({
    root: {
      color: `hsl(${sliderValue},100%,50%)`,
      width: '100%',
    },
    track: {
      height: 11,
      borderRadius: 5,
      background: 'rgb(255,255,255)',
      opacity: 0,
    },
    rail: {
      height: 11,
      borderRadius: 5,
      background: `linear-gradient(to right, hsl(0,70%,50%),
            hsl(${(360) / 5},100%,50%),
            hsl(${(360 * 2) / 5},100%,50%),
            hsl(${(360 * 3) / 5},100%,50%),
            hsl(${(360 * 4) / 5},100%,50%),
            hsl(${360},100%,50%))`,
      opacity: '1',
    },
    thumb: {
      height: 27,
      width: 27,
      backgroundColor: '#EEE',
      border: '4px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&:active': {
        boxShadow: 'inherit',
      },
    },
    active: {
      height: 48,
      width: 48,
      marginTop: -18,
      marginLeft: -24,
      border: '8px solid currentColor',
    },
  })

  const classes = useStyles();

  const change = (event, newValue) => {
    const d = new Date();
    if (d.getTime() % 3 === 0) {
      props.updateColor(newValue);
    }
  }

  const commitChange = (event, newValue) => {
    setSliderValue(newValue);
    props.updateColor(newValue);
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div>
        {sliderValue > -1 ?
          <Slider step={1} classes={classes} value={sliderValue} max={360} onChange={change} onChangeCommitted={commitChange} aria-label="Color slider" />
          :
          <h2>loading...</h2>
        }
      </div>
    </div>
  );
}
