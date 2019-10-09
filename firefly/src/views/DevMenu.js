//this is for using during development so we can quickly move between different components and see what we are doing

import React, { useContext, useEffect } from "react";

import ChildProfileStore, {
    childContext,
    SET_LOADED,
} from "../context/ChildProfiles/ChildProfileStore";

//material

//routing
import { Route, Redirect, Switch } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import MyFireflyPage from "../components/childProfile/MyFireflyPage";
import CustomizeFireflyPage from "../components/childProfile/CustomizeFireflyPage";
import LoggedOutStartPage from "../components/StartPages/LoggedOutStartPage";
import ChooseProfilePage from "../components/ChildProfiles/ChooseProfilePage";
import SignUpPage from "../components/SignInAndSignUp/SignUpPage";
import SignInPage from "../components/SignInAndSignUp/SignInPage";
import MultiStepRegistration from "../components/Registration/MultiStepRegistration";

import MyAccountPage from "../components/MyAccount/MyAccountPage";
import EditProfilePage from "../components/CreateAndEditProfiles/EditProfilePage";
import AddANewProfilePage from "../components/CreateAndEditProfiles/AddANewProfilePage";
import StartGame from "../components/StartPages/LoggedInStartPage";
import CodeView from "../components/part2/CodeView";
import ChooseWorld from "../components/Worlds/ChooseWorld/ChooseWorld";
import FireflyWorld from "../components/Worlds/FireflyWorld/FireflyWorld";
import Tutorial from "../components/tutorial/MultiStep";

import BackendTester from "../components/backendTester/BackendTester";

import AnimationTest from "../components/part2/AnimationTest";

import Game from "../components/game/Game";

import { Loader } from "../utils/Loaders/loaders";

import { makeStyles } from "@material-ui/core";

export default function DevMenu(props) {
    const [context, dispatch] = useContext(childContext);

    useEffect(() => {
        if (
            (context.loaded && props.logged && !context.user) ||
            (context.loaded && props.logged && !context.user.information)
        ) {
            dispatch({ type: SET_LOADED, payload: false });
            props.setIsLoading(true);
        }
    }, [props.logged]);

    const classes = makeStyles(theme => ({
        app: {
            zIndex: "-1000",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up("lg")]: {
                zIndex: "-1000",
                width: "1024px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
            },
        },
    }))();

    return (
        <div className={classes.app}>
            {JSON.parse(process.env.REACT_APP_DEV_MENU) ? (
                <div className={classes.bigWrapper}>
                    <Menu />
                </div>
            ) : null}
            <Switch>
                <Route exact path="/loader" component={Loader} />
                <PublicRoute
                    logged={props.logged}
                    exact
                    path="/"
                    component={LoggedOutStartPage}
                />
                <PublicRoute
                    logged={props.logged}
                    path="/signup"
                    component={SignUpPage}
                />
                <PublicRoute
                    logged={props.logged}
                    path="/signin"
                    component={SignInPage}
                />
                <PrivateRoute
                    logged={props.logged}
                    path="/myfirefly"
                    component={MyFireflyPage}
                />
                <PrivateRoute
                    logged={props.logged}
                    path="/customize"
                    component={CustomizeFireflyPage}
                />
                <PrivateRoute
                    logged={props.logged}
                    path="/registration"
                    component={MultiStepRegistration}
                />
                <PrivateRoute
                    logged={props.logged}
                    exact
                    path="/choose-profile"
                    component={ChooseProfilePage}
                />
                <PrivateRoute
                    logged={props.logged}
                    exact
                    path="/account"
                    component={MyAccountPage}
                />
                <PrivateRoute
                    logged={props.logged}
                    exact
                    path="/editprofile"
                    component={EditProfilePage}
                />
                <PrivateRoute
                    logged={props.logged}
                    exact
                    path="/addprofile"
                    component={AddANewProfilePage}
                />
                <PrivateRoute
                    logged={props.logged}
                    path="/startgame"
                    component={StartGame}
                />
                <Route
                    logged={props.logged}
                    path="/codeview"
                    component={CodeView}
                />
                <Route
                    logged={props.logged}
                    path="/animations"
                    component={AnimationTest}
                />
                <Route logged={props.logged} path="/game" component={Game} />
                <PrivateRoute
                    logged={props.logged}
                    exact
                    path="/backend-tester"
                    component={BackendTester}
                />
                <PrivateRoute
                    logged={props.logged}
                    path="/chooseworld"
                    component={ChooseWorld}
                />
                <PrivateRoute
                    logged={props.logged}
                    path="/fireflyworld"
                    component={FireflyWorld}
                />
                <PrivateRoute
                    logged={props.logged}
                    path="/tutorial"
                    component={Tutorial}
                />
            </Switch>
        </div>
    );
}

function PrivateRoute({ component: Component, logged, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                logged === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: "/", state: { from: props.location } }}
                    />
                )
            }
        />
    );
}

function PublicRoute({ component: Component, logged, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                logged === false ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/startgame" />
                )
            }
        />
    );
}
