import firebase from "firebase";
import {
  GET_USER_INFO,
  GET_PROFILES_AND_AVATARS,
  SET_LOADED,
  UPDATE_SELECTED,
  GET_USER,
  SET_HAS_PROFILES,
  GET_AND_LOAD
} from "../context/ChildProfiles/ChildProfileStore";
import {
  GET_WORLDS,
  ADD_WORLD,
  ADD_FIREFLY,
  REMOVE_FIREFLY,
  UPDATE_BLOCK,
  REMOVE_WORLD,
  SET_GAME_LOADED
} from "../context/Game/GameStore";

//Add world
export const addWorld = async (child, payload, dispatch) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  db.collection("users")
    .doc(uid)
    .collection("profiles")
    .doc(child) //Haven't imported this childProfileState.selected.id
    .collection("worlds")
    .add(payload) //World that you want to save, this adds it to a new collection under the profile, just put some name in
    .then(worldDoc => {
      //This is a reference to the document you just created
      //do your dispatch in here
      // console.log("adding world to ", child);
      const newWorld = { id: worldDoc.id, ...payload }; //Creating an object to store locally in context
      dispatch({ type: ADD_WORLD, payload: newWorld }); //Dispatching to reducers so it can get saved locally in context
    });
};
// Get worlds
export const getWorld = async (child, dispatch) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  db.collection("users")
    .doc(uid)
    .collection("profiles")
    .doc(child)
    .collection("worlds")
    .get()
    .then(async snapshot => {
      const childWorlds = snapshot.docs.map(async doc => {
        const fireflies = db
          .collection("users")
          .doc(uid)
          .collection("profiles")
          .doc(child)
          .collection("worlds")
          .doc(doc.id)
          .collection("fireflies")
          .get()
          .then(docRef => {
            const firefly = docRef.docs.map(doc => {
              return doc.data();
            });
            const world = doc.data();
            return { id: doc.id, ...world, fireflies: [...firefly] };
          });
        return await fireflies;
      });
      const payload = await Promise.all(childWorlds);
      // console.log(payload);
      dispatch({ type: GET_WORLDS, payload: payload });
    }).then(() => {
      dispatch({ type: SET_GAME_LOADED });
    });
};
//remove world
export const removeWorld = async (child, payload, dispatch) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  db.collection("users")
    .doc(uid)
    .collection("profiles")
    .doc(child)
    .collection("worlds")
    .doc(payload.id)
    .collection("fireflies")
    .get()
    .then(docRef => {
      const firefly = docRef.docs.map(doc => {
        db.collection("users")
          .doc(uid)
          .collection("profiles")
          .doc(child)
          .collection("worlds")
          .doc(payload.id)
          .collection("fireflies")
          .doc(doc.id)
          .delete();
      });
    });
  db.collection("users")
    .doc(uid)
    .collection("profiles")
    .doc(child)
    .collection("worlds")
    .doc(payload.id)
    .delete();
  dispatch({ type: REMOVE_WORLD, payload: payload });
};
// export const removeProfile = async (type, payload, dispatch) => {
//   const db = firebase.firestore();
//   const uid = firebase.auth().currentUser.uid;
//   await db
//     .collection("users")
//     .doc(uid)
//     .collection("profiles")
//     .doc(payload.id)
//     .collection("avatar")
//     .doc(payload.avatar.id)
//     .delete();
//   await db
//     .collection("users")
//     .doc(uid)
//     .collection("profiles")
//     .doc(payload.id)
//     .delete();
//   dispatch({ type: type, payload: payload });
// };
//Add Firefly
export const addFirefly = async (child, world_id, dispatch) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  await db
    .collection("users")
    .doc(uid)
    .collection("profiles")
    .doc(child)
    .collection("worlds")
    .doc(world_id)
    .collection("fireflies")
    .add({
      firefly_id: "",
      x: null,
      y: null,
      codeBlocks: []
    })
    .then(async docRef => {
      const firefly = {
        x: Math.floor(Math.random()*800),
        y: Math.floor(Math.random()*400),
        codeBlocks: []
      };
      await db
        .collection("users")
        .doc(uid)
        .collection("profiles")
        .doc(child)
        .collection("worlds")
        .doc(world_id)
        .collection("fireflies")
        .doc(docRef.id)
        .set(
          {
            firefly_id: docRef.id,
            ...firefly
          },
          { merge: true }
        )
        .then(newDoc => {
          const finalPayload = {
            world_id: world_id,
            firefly: {
              ...firefly,
              firefly_id: docRef.id
            }
          };
          dispatch({ type: ADD_FIREFLY, payload: finalPayload });
        });
    });
};
export const removeFirefly = async (child, firefly_id, world_id, dispatch) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  // const {firefly_id, world_id} = requiredIds;
  // console.log(child, firefly_id, world_id);
  db.collection("users")
    .doc(uid)
    .collection("profiles")
    .doc(child)
    .collection("worlds")
    .doc(world_id)
    .collection("fireflies")
    .doc(firefly_id)
    .delete();
  dispatch({ type: REMOVE_FIREFLY, payload: { firefly_id, world_id } });
};
//Add block to Firefly
export const updateBlocks = async (
  child,
  firefly_id,
  world_id,
  payload,
  dispatch
) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  let updatedFirefly = {
    ...payload
  };
  delete updatedFirefly["id"];
  // console.log(child)
  // console.log(firefly_id)
  // console.log(world_id)
  // console.log(payload)
  db.collection("users")
    .doc(uid)
    .collection("profiles")
    .doc(child)
    .collection("worlds")
    .doc(world_id)
    .collection("fireflies")
    .doc(firefly_id)
    .set(
      {
        ...updatedFirefly
      },
      { merge: true }
    )
    .then(docRef => {
      dispatch({ type: UPDATE_BLOCK, payload: payload });
    });
};
export const addProfile = async (type, payload, dispatch) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  var uploadProfile = { ...payload };
  if (payload.avatar) {
    delete uploadProfile["avatar"];
  }
  db.collection("users")
    .doc(uid)
    .collection("profiles")
    .add(uploadProfile)
    .then(profileDoc => {
      db.collection("users")
        .doc(uid)
        .collection("profiles")
        .doc(profileDoc.id)
        .collection("avatar")
        .add({
          color: 53,
          accessory: 0,
          nickname: ""
        })
        .then(avatarDoc => {
          const newPayload = {
            ...payload,
            id: profileDoc.id,
            avatar: {
              color: 53,
              accessory: 0,
              nickname: "",
              id: avatarDoc.id
            }
          };
          dispatch({ type: type, payload: newPayload });
        });
    });
  dispatch({ type: SET_HAS_PROFILES });
};
export const updateProfile = async (type, payload, dispatch) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  var uploadProfile = { ...payload };
  delete uploadProfile["id"];
  delete uploadProfile["avatar"];
  var uploadAvatar = { ...payload.avatar };
  delete uploadAvatar["id"];
  await db
    .collection("users")
    .doc(uid)
    .collection("profiles")
    .doc(payload.id)
    .set(
      {
        ...uploadProfile
      },
      { merge: true }
    )
    .then(() => {
      db.collection("users")
        .doc(uid)
        .collection("profiles")
        .doc(payload.id)
        .collection("avatar")
        .doc(payload.avatar.id)
        .set(
          {
            ...uploadAvatar
          },
          { merge: true }
        );
    });
  dispatch({ type: type, payload: payload });
};
export const removeProfile = async (type, payload, dispatch) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  await db
    .collection("users")
    .doc(uid)
    .collection("profiles")
    .doc(payload.id)
    .collection("avatar")
    .doc(payload.avatar.id)
    .delete();
  await db
    .collection("users")
    .doc(uid)
    .collection("profiles")
    .doc(payload.id)
    .delete();
  dispatch({ type: type, payload: payload });
};
export const updateUser = async (type, payload, dispatch) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  var uploadUser = { ...payload };
  if (uploadUser.profiles) {
    delete uploadUser["profiles"];
  }
  delete uploadUser["id"];
  delete uploadUser["information"];
  var uploadInformation = { ...payload.information };
  delete uploadInformation["id"];
  await db
    .collection("users")
    .doc(uid)
    .set(
      {
        ...uploadUser
      },
      { merge: true }
    );
  await db
    .collection("users")
    .doc(uid)
    .collection("information")
    .doc(payload.information.id)
    .set(
      {
        ...uploadInformation
      },
      { merge: true }
    );
  dispatch({ type: type, payload: payload });
};
export const getUser = async dispatch => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  //get user
  var dispatchUser = {};
  await db
    .collection("users")
    .doc(uid)
    .get()
    .then(snapshot => {
      const userInfo = snapshot.data();
      dispatchUser = { ...dispatchUser, ...userInfo, id: snapshot.id };
    });
  //get information
  await db
    .collection("users")
    .doc(uid)
    .collection("information")
    .get()
    .then(snapshot => {
      const docList = snapshot.docs.map(doc => {
        const document = doc.data();
        return { ...document, id: doc.id };
      });
      dispatchUser = { ...dispatchUser, information: docList[0] };
    });
  //get profiles and avatars
  await db
    .collection("users")
    .doc(uid)
    .collection("profiles")
    .get()
    .then(snapshot => {
      const childList = snapshot.docs.map(doc => {
        const child = doc.data();
        return { ...child, id: doc.id };
      });
      return childList;
    })
    .then(childList => {
      if (childList[0]) {
        const childAndAvatar = childList.map(child => {
          const avatar = db
            .collection("users")
            .doc(uid)
            .collection("profiles")
            .doc(child.id)
            .collection("avatar")
            .get()
            .then(snapshot => {
              const document = snapshot.docs.map(doc => {
                const avatarDoc = doc.data();
                return {
                  ...avatarDoc,
                  id: doc.id
                };
              });
              return document[0];
            })
            .then(avatar => {
              if (dispatchUser.profiles) {
                dispatchUser = {
                  ...dispatchUser,
                  profiles: [
                    ...dispatchUser.profiles,
                    {
                      ...child,
                      avatar: {
                        ...avatar
                      }
                    }
                  ]
                };
              } else {
                dispatchUser = {
                  ...dispatchUser,
                  profiles: [
                    {
                      ...child,
                      avatar: {
                        ...avatar
                      }
                    }
                  ]
                };
              }
            })
            .then(() => {
              dispatch({ type: GET_AND_LOAD, payload: dispatchUser });
            });
        });
      } else {
        dispatch({ type: GET_AND_LOAD, payload: dispatchUser });
      }
    });
};
