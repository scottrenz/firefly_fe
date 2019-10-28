import React, { useState } from "react";
import { Typography } from "@material-ui/core";

import setErrorStyles from "./setErrorStyles"

const Personal = ({
    setUser,
    setController,
    user
}) => {
    const classes = setErrorStyles();

    const [touched, setTouched] = useState({
        first_name: false,
        last_name: false,
        address: false,
        city: false,
        state: false,
        zipCode: false
    });

    const toggleTouched = e => {
        setTouched({
            ...touched,
            [e.target.name]: true
        });
    };

    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <label variant="h3">First Name</label>
                            <input
                                type="text"
                                name="first_name"
                                // className={classes.smallInput}
                                onChange={({ target }) => setUser({ FirstName: target.value })}
                                value={user.first_name}
                                onBlur={toggleTouched}
                            />
                            <Typography
                                variant="subtitle2"
                                className={
                                    user.first_name === "" && touched.first_name === true
                                        ? classes.error
                                        : classes.hidden
                                }
                            >
                                *Required
              </Typography>
                        </div>
                        <div className={classes.smallInputSizer}>
                            <label variant="h3">Last Name</label>
                            <input
                                name="last_name"
                                type="text"
                                className={classes.smallInput}
                                onChange={({ target }) => setUser({ FirstName: target.value })}
                                value={user.last_name}
                                onBlur={toggleTouched}
                            />
                            <Typography
                                variant="subtitle2"
                                className={
                                    user.last_name === "" && touched.last_name === true
                                        ? classes.error
                                        : classes.hidden
                                }
                            >
                                *Required
              </Typography>
                        </div>
                    </div>
                    <div className={classes.bigInputContainer}>
                        <div className={classes.bigInputSizer}>
                            <label variant="h3">Address</label>
                            <input
                                name="address"
                                className={classes.bigInput}
                                type="text"
                                value={user.address}
                                onChange={({ target }) => setUser({ FirstName: target.value })}
                                onBlur={toggleTouched}
                            />
                            <Typography
                                variant="subtitle2"
                                className={
                                    user.address === "" && touched.address === true
                                        ? classes.error
                                        : classes.hidden
                                }
                            >
                                *Required
              </Typography>
                        </div>
                    </div>
                    <div className={classes.bigInputContainer}>
                        <div className={classes.bigInputSizer}>
                            <label variant="h3">City</label>
                            <input
                                name="city"
                                className={classes.bigInput}
                                type="text"
                                value={user.city}
                                onChange={({ target }) => setUser({ FirstName: target.value })}
                                onBlur={toggleTouched}
                            />
                            <Typography
                                variant="subtitle2"
                                className={
                                    user.city === "" && touched.city === true
                                        ? classes.error
                                        : classes.hidden
                                }
                            >
                                *Required
              </Typography>
                        </div>
                    </div>
                    <div className={classes.smallInputContainer}>
                        <div className={classes.smallInputSizer}>
                            <label variant="h3">State</label>
                            <input
                                name="state"
                                className={classes.smallInput}
                                onChange={({ target }) => setUser({ FirstName: target.value })}
                                type="text"
                                value={user.state}
                                onBlur={toggleTouched}
                            />
                            <Typography
                                variant="subtitle2"
                                className={
                                    user.state === "" && touched.state === true
                                        ? classes.error
                                        : classes.hidden
                                }
                            >
                                *Required
              </Typography>
                        </div>
                        <div className={classes.smallInputSizer}>
                            <label variant="h3">Zip Code</label>
                            <input
                                name="zipCode"
                                className={classes.smallInput}
                                onChange={({ target }) => setUser({ FirstName: target.value })}
                                type="text"
                                value={user.zipCode}
                                onBlur={toggleTouched}
                            />
                            <Typography
                                variant="subtitle2"
                                className={
                                    user.zipCode === "" && touched.zipCode === true
                                        ? classes.error
                                        : classes.hidden
                                }
                            >
                                *Required
              </Typography>
                        </div>
                    </div>
                    <div className={classes.buttonContainer}>
                        <button
                            className={
                                user.first_name !== "" &&
                                    user.last_name !== "" &&
                                    user.address !== "" &&
                                    user.city !== "" &&
                                    user.state !== "" &&
                                    user.zipCode !== ""
                                    ? classes.nextButton
                                    : classes.nextButtonDisabled
                            }
                            onClick={
                                user.first_name !== "" &&
                                    user.last_name !== "" &&
                                    user.address !== "" &&
                                    user.city !== "" &&
                                    user.state !== "" &&
                                    user.zipCode !== ""
                                    ? () => {
                                        setController(1); // Write an Add function instead
                                    }
                                    : null
                            }
                        >
                            <label variant="button">Next</label>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Personal;
