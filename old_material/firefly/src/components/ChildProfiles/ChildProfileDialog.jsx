import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

//context
import { childContext, UPDATE_COLOR, UPDATE_SELECTED } from '../../context/ChildProfiles/ChildProfileStore'

//material ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    paper: {
        background: '#e2f5d6',
    }
});

export default function ChildProfileDialog() {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [childProfileState, dispatch] = useContext(childContext);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose(value) {
        setOpen(false);
        dispatch({type: UPDATE_SELECTED, payload: value});
    }

    return (
        <div>
            {/* <Typography variant="subtitle1">Selected: {selectedValue.name}</Typography> */}
                <h1> Selected Kid: {childProfileState.user.profiles.find((profile) => {
                    return childProfileState.selected.id === profile.id;
                }).name}</h1>
            {/* {childProfileState.profiles.map((profile) => {
                return (
                    <>
                        <h1 style={{ color: profile.color }}>{profile.name}</h1>
                        <Button variant="contained" color="secondary" onClick={() => {
                            dispatch({
                                type: 'UPDATE_COLOR', payload: {
                                    ...profile,
                                    color: 'blue',
                                }
                            })
                        }
                        }>
                            UPDATE COLOR
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => {
                            dispatch({ type: 'UPDATE_SELECTED', payload: profile.id })
                        }
                        }>
                            UPDATE SELECTED
                        </Button>
                    </>
                )
            })} */}
            <br />
            <Button variant="contained" color="primary" onClick={(handleClickOpen)}>
                Open Dialog
            </Button>
            <Dialog classes={classes} open={open} onClose={() => handleClose(childProfileState.selected.id)} aria-labelledby="simple-dialog-title">
                <DialogTitle id="simple-dialog-title">Choose Profile</DialogTitle>
                <List>
                    {childProfileState.profiles.map(profile => (
                        <ListItem button onClick={() => handleClose(profile.id)} key={profile.name}>
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={profile.name} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        </div>
    );
}