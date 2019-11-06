import React from "react";
import Routers from "../src/routes/Routers";
import './styles/index.scss';

import StripeParent from './components/stripe/StripeParent'

function App() {
  return (
    <>
      <Routers />
      {/* <StripeParent /> */}
    </>
  );
}

export default App;
