import React, { useReducer } from "react";

export const childContext = React.createContext();

const initialState = {
  selected: {
    id: "0",
  },
  loaded: false,
  hasProfiles: false,
};

export const UPDATE_SELECTED = "UPDATE_SELECTED";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const REMOVE_PROFILE = "REMOVE_PROFILE";
export const ADD_PROFILE = "ADD_PROFILE";
export const UPDATE_USER = "UPDATE_USER";
export const SET_LOADED = "SET_LOADED";
export const SET_HAS_PROFILES = "SET_HAS_PROFILES";
export const GET_AND_LOAD = "GET_AND_LOAD";
export const SIGN_OUT = "SIGN_OUT"

function reducer(state, action) {
  switch (action.type) {
    case SIGN_OUT:
      return { ...initialState };
    case GET_AND_LOAD:
      if (action.payload.profiles) {
        return { 
          ...state,
          user: action.payload,
          hasProfiles: true,
          loaded: true, 
          selected: {
            id: action.payload.profiles[0].id
          }
        }
      } else {
        return { ...state, user: action.payload, loaded: true }
      }
    case SET_HAS_PROFILES:
      return { ...state, hasProfiles: true };
    case SET_LOADED: {
      return { ...state, loaded: action.payload }
    }
    case UPDATE_USER: {
      return { ...state, user: action.payload }
    }
    case UPDATE_SELECTED:
      return { ...state, selected: { id: action.payload } };
    case UPDATE_PROFILE: {
      const newArr = state.user.profiles.map(profile => {
        if (profile.id === action.payload.id) {
          return action.payload;
        } else {
          return profile;
        }
      });
      const newUser = { ...state.user, profiles: newArr }
      return { ...state, user: newUser };
    }
    case REMOVE_PROFILE:
      const newArr = state.user.profiles.filter(profile => {
        if (profile.id === action.payload.id) {
          return false;
        } else {
          return true;
        }
      });
      if (newArr[0]) {
        return {
          ...state,
          user: {
            ...state.user,
            profiles: newArr
          },
          selected: { id: newArr[0].id },
        };
      } else {
        return {
          ...state,
          user: {
            ...state.user,
            profiles: newArr
          },
          selected: {
            id: 0
          },
          hasProfiles: false
        }
      }
    case ADD_PROFILE: {
      if (state.user.profiles) {
        return {
          ...state,
          user: {
            ...state.user,
            profiles: [
              ...state.user.profiles,
              action.payload
            ]
          },
          selected: {
            id: action.payload.id
          }
        }
      } else {
        // console.log(action.payload)
        return {
          ...state,
          user: {
            ...state.user,
            profiles: [action.payload]
          },
          selected: {
            id: action.payload.id
          }
        }
      }
    }
    default:
      throw Error("reducer error");
  }
}

export default function ChildProfileStore(props) {
  const stateHook = useReducer(reducer, initialState);

  return (
    <childContext.Provider value={stateHook}>
      {props.children}
    </childContext.Provider>
  );
}