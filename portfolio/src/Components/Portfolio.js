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
  return ["Remember your meds", "Giftlist", "Park My Bike", 'Project X - Beer', 'PAC-MAN'];
}
const projects = [
  {
    name: 'Remember your meds',
    github: 'www',
    deploy: 'https://gift-list-1-jf.herokuapp.com/',
    description: 'TBC',
    
    
  },
  {
    name: 'Giftlist',
    github: 'https://github.com/jonnysfarmer/gift-list',
    deploy: 'https://gift-list-1-jf.herokuapp.com/',
    description: 'A full stack app. Designed data structure and flow, created backend and our API, consumed Etsy’s API, developed the frontend to allow users to register, login, create, and manage lists of Gifts, including suggesting and saving ideas from Etsy (and in future other stores)',

  },
  {
    name: 'Coins', 
    github: 'https://github.com/jonnysfarmer/coin-project',
    deploy: 'NA',
    description: 'an ongoing full-stack personal project using React, Node.js, MongoDB, Express.js.   The project currently shows the top 30 cryptocurrencies, with the ability to show additional information and news on each specific coin.  You can then Register / Log in to create your own portfolios '
  },
  {
    name: 'Park My Bike',
    github: 'https://github.com/jonnysfarmer/park-my-bike',
    deploy: 'https://jonnysfarmer.github.io/park-my-bike/',
    description: 'A mobile first React front end  web app.  Identified multiple APIs to show bike parking locations near the users inputted postcode, with directions from your current location / stated location' 
  },
  {
    name: 'Project X - Beer',
    github: 'https://github.com/jonnysfarmer/project-x' ,
    deploy: 'https://jonnysfarmer.github.io/project-x/',
    description: 'A front end React website, using an unofficial Brew Dog API allowing you to display drinking / tasting notes on each of their beers, as well as brewing information '
  },
  {
    name: 'PAC-Man',
    github: 'https://github.com/jonnysfarmer/project-1 ',
    deploy: 'https://jonnysfarmer.github.io/project-1/',
    description: 'A web based browser game using a grid structure written in Javascript.   Create PAC-MAN, hunting Ghosts, movment and collision logic with win conditions.'
  }

]

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



  return (
    <div className={classes.root}>
      <Box height='100vh' >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container component="main" maxWidth="md">
          <Stepper orientation="vertical" nonLinear activeStep={activeStep}>
            
            {projects.map((ele, index) => (
              <Step key={ele} color='secondary'>
                <StepButton onClick={handleStep(index)} color='secondary'>{ele.name}</StepButton>
                <StepContent>
                  <Typography>{ele.description}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                  </Button>
                  {activeStep < steps.length -1 &&
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        Next
                  </Button>}
                  {/* //     : 
                  //     <Button onClick={handleReset} 
                  //     variant="contained"
                  //       color="secondary"
                  //     className={classes.button}>
                  //     Back to first project
                  // </Button> } */}
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
