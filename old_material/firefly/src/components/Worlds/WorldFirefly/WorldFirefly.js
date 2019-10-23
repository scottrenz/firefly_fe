import React, { useState } from "react";

import FireflyContainer from "./FireflyContainer";

const WorldFirefly = (props) => {
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(false);

  return <FireflyContainer playing={props.playing} hideSourceOnDrag={hideSourceOnDrag} />;
};

export default WorldFirefly;
