import React, { useState } from 'react';

//material
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StepConnector } from '@material-ui/core';
import LensIcon from '@material-ui/icons/Lens';

import CustomStepper from './CustomStepper';

const StepperTest = () => {

    const classes = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '80vh',
        },
    }))();

    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState(['', '', ''])

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    function handleReset() {
        setActiveStep(0);
    }

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    return (
        <div className={classes.root}>
            <CustomStepper activeStep={activeStep}/>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                >
                    Back
                </Button>
                <Button variant="contained" color="secondary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
        </div>
    )
}

export default StepperTest
