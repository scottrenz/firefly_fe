import React from "react";
import Icon from "../../assets/icons";

const ProfileFly = ({ color, accessory }) => {
  return (
    <div>
      <Icon
        name="Firefly"
        width={"100%"}
        height={"100%"}
        viewBox={"0 0 1024 1024"}
        accessory={accessory}
        lighttopFill={`hsl(${color},100%,30%)`}
        lightmidFill={`hsl(${color},100%,40%)`}
        lightbottomFill={`hsl(${color},100%,55%)`}
        shineStroke={`hsl(${color},100%,55%)`}
      />
    </div>
  );
};

export default ProfileFly;
