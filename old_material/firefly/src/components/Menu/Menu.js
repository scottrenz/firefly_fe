import React, { useState } from "react";
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

const items = [
  {
    path: "/",
    text: "LoggedOutStartPage"
  },
  {
    path: "/myfirefly",
    text: "MyFireflyPage"
  },
  {
    path: "/customize",
    text: "CustomizeFireflyPage"
  },

  {
    path: "/signin",
    text: "SignInPage"
  },
  {
    path: "/signup",
    text: "SignUpPage"
  },
  {
    path: "/registration",
    text: "MultiStepRegistration"
  },
  {
    path: "/choose-profile",
    text: "ChooseProfilePage"
  },
  {
    path: "/account",
    text: "MyAccountPage"
  },
  {
    path: "/tutorial",
    text: "Tutorial"
  },
  {
    path: "/addprofile",
    text: "AddANewProfilePage"
  },
  {
    path: "/editprofile",
    text: "EditProfilePage"
  },
  {
    path: "/startgame",
    text: "StartGame"
  },
  {
    path: "/codeview",
    text: "CodeView"
  },
  {
    path: "/backend-tester",
    text: "Backend Tester"
  },
  {
    path: "/loader",
    text: "Loader"
  },
  {
    path: "/game",
    text: "Game"
  },
  {
    path: "/chooseworld",
    text: "Choose World"
  },
  {
    path: "/fireflyworld",
    text: "Firefly World"
  }
];

function Menu() {
  //Controls open state
  const [open, setOpen] = useState(false);

  //Styling
  const classes = makeStyles(theme => ({
    button: {
      position: "absolute",
      background: "#5b4eff",
      top: "5%",
      right: "5%",
      color: "white",
      "&:hover, &:focus": {
        background: "#d0ccff",
        opacity: "1"
      }
    },
    root: {
      display: "flex"
    },
    list: {
      width: "300px",
      background: "#5b4eff",
      color: "white"
    },
    listItem: {
      "&:hover, &:focus": {
        background: "rgba(208,204,255,.25)"
      }
    },
    drawer: {
      root: {
        background: "#5b4eff"
      }
    },
    drawerDiv: {
      height: "100%",
      background: "#5b4eff"
    },
    collapse: {
      marginLeft: "10%"
    },
    toolbar: theme.mixins.toolbar
  }))();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="Open Drawer"
        edge="start"
        onClick={toggleDrawer}
        className={classes.button}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        classes={{ root: classes.drawer.root }}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <div className={classes.drawerDiv}>
          <List className={classes.list}>
            {items.map(item => (
              <ListItem
                className={classes.listItem}
                button
                onClick={toggleDrawer}
                component={Link}
                to={item.path}
                key={item.path}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Menu;
