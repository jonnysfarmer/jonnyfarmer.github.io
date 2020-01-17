import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import StepButton from "@material-ui/core/StepButton";
import { Hidden, ThemeProvider, Divider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import { theme } from '../styles/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(8)
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return "An ad group contains one or more ads which target a shared set of keywords.";
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return "Unknown step";
  }
}

export default function Portfolio() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleStep = step => () => {
    console.log('hello')
    setActiveStep(step);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Box height='100vh' >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container component="main" maxWidth="md">
          <Stepper orientation="vertical" nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} color='secondary'>
                <StepButton onClick={handleStep(index)} color='secondary'>123{label}</StepButton>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                  </Button>
                  {activeStep < steps.length -1 ? 
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        Next
                      </Button>
                      : 
                      <Button onClick={handleReset} 
                      variant="contained"
                        color="secondary"
                      className={classes.button}>
                      Back to first project
                  </Button> }
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          </Container>
        </ThemeProvider>
      </Box>
    </div>
  );
}
