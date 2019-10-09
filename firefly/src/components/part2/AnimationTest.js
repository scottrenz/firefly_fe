import React from "react";

import FFanim from "../../assets/animations/FFanim";

const AnimationTest = () => {
  return (
    <div className="animations">
      {/* <FireflyHover /> */}
      <FFanim height={250} width={250} accessory="lambdahat" color={352} />
    </div>
  );
};

export default AnimationTest;
