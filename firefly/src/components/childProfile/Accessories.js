import React, { useState } from "react";
import Icon from "../../assets/icons";

const svgNames = [
    "NoAccessory",
    "LambdaHatSM",
    "NerdGlassesSM",
    "PinkHeadphoneSM",
    "SunGlassesSM",
];

const pickerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // minHeight: "100%",
    margin: "0% 8%"
};

const iconStyles = {
    margin: "0 2%",
}

const arrowWidth = {
    width: "7%",
    cursor: "pointer"
}

const Accessories = props => {
    // curSVGindex: 0,
    const [curIndex, setCurIndex] = useState(props.accessory);

    const previous = () => {
        const lastIndex = svgNames.length - 1;
        const shouldResetIndex = curIndex === 0;
        const index = shouldResetIndex ? lastIndex : curIndex - 1;

        setCurIndex(index);
        props.accessoryChange(index);
    };

    const next = () => {
        const lastIndex = svgNames.length - 1;
        const shouldResetIndex = curIndex === lastIndex;
        const index = shouldResetIndex ? 0 : curIndex + 1;

        setCurIndex(index);
        props.accessoryChange(index);
    };

    return (
        <div className="carousel" style={pickerStyles}>
            <div style={arrowWidth}>
                <Arrow direction="left" clickFunction={previous} name="LeftArrow" />
            </div>
            <div style={iconStyles}>
                <SvgImage iconName={svgNames[curIndex]} />
            </div>
            <div style={arrowWidth}>
                <Arrow direction="right" clickFunction={next} name="RightArrow" />
            </div>
        </div>
    );
};

const Arrow = ({ direction, clickFunction, name }) => (
    <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
        <Icon name={name} height="60px" />
    </div>
);

const SvgImage = ({ iconName }) => {
    const styles = {
        height: "65px",
    };

    return <Icon name={iconName} className="svg-icon" style={styles} />;
};

export default Accessories;
