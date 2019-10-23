import React, { useState, useEffect, useContext } from "react";

import {
  childContext,
  SET_LOADED
} from "../../context/ChildProfiles/ChildProfileStore";


import { getUser, getWorld } from "../firebaseInteractions";

export default function LoadedChecker(props) {
  const [context, dispatch] = useContext(childContext);
  const [atLeast, setAtLeast] = useState(false);

  useEffect(() => {
    if (!atLeast) {
      setTimeout(() => {
        setAtLeast(true);
        //do not use will be fixed
        if (!props.logged) {
          dispatch({ type: SET_LOADED, payload: true });
        }
      }, 2000);
    }
  }, []);

  useEffect(() => {

    if (props.logged && !context.loaded) {
      getUser(dispatch)
        .then(() => {
          if (atLeast && context.loaded) {
            props.setIsLoading(false);
          }
        })
    } else if (atLeast && context.loaded) {
      props.setIsLoading(false);
    }
  }, [props.logged, atLeast, context.loaded])


  return <></>;
}
