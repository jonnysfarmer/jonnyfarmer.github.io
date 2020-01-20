import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import StepButton from "@material-ui/core/StepButton";
import { Hidden, ThemeProvider, Divider, Grid, Icon, Tooltip, IconButton, CardMedia } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import LinkIcon from '@material-ui/icons/Link'
import Fade from '@material-ui/core/Fade'


import { theme } from '../styles/styles'
import { loadCSS } from 'fg-loadcss'

import giftlist from '../styles/Images/giftlist.gif'
import project1 from '../styles/Images/project1.png'
import meds from '../styles/Images/meds.gif'
import meds2 from '../styles/Images/meds.png'
import pmb from '../styles/Images/pmb.gif'
import beers from '../styles/Images/beers.gif'
import coins from '../styles/Images/coins.gif'




const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(12)
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
  },
  buttons: {
    padding: theme.spacing(1)
  },
  background: {
    backgroundColor: '#fafafa'
  },
  img: {
    maxHeight: '20rem',
    maxWidth: '100%',
    textAlign: 'center'
  },
  // centerImage:{
  //   display: 'flex',
  //   justifyContent: 'center',
  // }
}))


const projects = [
  {
    name: 'Remember your meds',
    github: 'https://github.com/jonnysfarmer/remember-your-meds',
    deploy: 'https://rememberyour-meds.herokuapp.com/',
    description: 'A full stack mobile first app.  Created backend and restful API, created a CRUD process allowing users to create prescriptions, and activate reminders to take medication, book appointments and reorder.  Created backend commands to send texts / emails to active reminders.',
    tech: [
      'devicon-react-original',
      'devicon-python-plain',
      'devicon-django-plain',
      'devicon-postgresql-plain'
    ],
    img: meds2
  },
  {
    name: 'Giftlist',
    github: 'https://github.com/jonnysfarmer/gift-list',
    deploy: 'https://gift-list-1-jf.herokuapp.com/',
    description: 'A full stack app. Designed data structure and flow, created backend and our API, consumed Etsy’s API, developed the frontend to allow users to register, login, create, and manage lists of Gifts, including suggesting and saving ideas from Etsy (and in future other stores)',
    tech: [
      'devicon-react-original',
      'devicon-nodejs-plain',
      'devicon-express-original',
      'devicon-mongodb-plain',
      'devicon-sass-original'
    ],
    img: giftlist

  },
  {
    name: 'Coins',
    github: 'https://github.com/jonnysfarmer/coin-project',
    // deploy: 'https://github.com/jonnysfarmer/coin-project',
    description: 'An ongoing full-stack personal project using React, Node.js, MongoDB, Express.js.   The project currently shows the top 30 cryptocurrencies, with the ability to show additional information and news on each specific coin.  You can then Register / Log in to create your own portfolios ',
    tech: [
      'devicon-react-original',
      'devicon-nodejs-plain',
      'devicon-express-original',
      'devicon-mongodb-plain'
    ],
    img: coins
  },
  {
    name: 'Park My Bike',
    github: 'https://github.com/jonnysfarmer/park-my-bike',
    deploy: 'https://jonnysfarmer.github.io/park-my-bike/',
    description: 'A mobile first React front end  web app.  Identified multiple APIs to show bike parking locations near the users inputted postcode, with directions from your current location / stated location',
    tech: [
      'devicon-react-original',
      'devicon-sass-original'

    ],
    img: pmb
  },
  {
    name: 'Brewdog',
    github: 'https://github.com/jonnysfarmer/project-x',
    deploy: 'https://jonnysfarmer.github.io/project-x/',
    description: 'A front end React website, using an unofficial Brew Dog API allowing you to display drinking / tasting notes on each of their beers, as well as brewing information ',
    tech: [
      'devicon-react-original',
      'devicon-css3-plain'

    ],
    img: beers
  },
  {
    name: 'PAC-Man',
    github: 'https://github.com/jonnysfarmer/project-1 ',
    deploy: 'https://jonnysfarmer.github.io/project-1/',
    description: 'A web based browser game using a grid structure written in Javascript.   Create PAC-MAN, hunting Ghosts, movment and collision logic with win conditions.',
    tech: [
      'devicon-html5-plain',
      'devicon-css3-plain',
      'devicon-javascript-plain'

    ],
    img: project1
  },

]



export default function Portfolio() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0)

  React.useEffect(() => {
    loadCSS(
      'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css',

    )
  }, [])

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  const handleStep = step => () => {
    console.log('hello')
    setActiveStep(step);
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }



  return (
    <div className={classes.root}>
      <Box height='100vh' >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container component="main" maxWidth="md">
            <Typography component="h1" variant="h4"
              align='center'
              color='primary' >
              My Work

            </Typography>
            <Fade in={true} timeout={ 1000 }>
            <Stepper orientation="vertical" nonLinear activeStep={activeStep} className={classes.background}>

              {projects.map((ele, index) => (
                <Step key={ele} color='secondary'>
                  <StepButton onClick={handleStep(index)} >
                    <Typography component="h3" variant="h6" color='inherit'>
                      {ele.name}
                    </Typography>
                  </StepButton>

                  <StepContent>

                    <Grid container spacing={0}>
                      <Grid item >
                        <Tooltip title="Link to Github" enterTouchDelay={300}>
                          <IconButton className={classes.buttons} href={ele.github}>
                            <Icon style={{ fontSize: 23 }} className='devicon-github-plain' />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      {ele.deploy && 
                      <Grid item >
                        <Tooltip title="Link to deployment" enterTouchDelay={300}>
                          <IconButton className={classes.buttons} href={ele.deploy}>
                            <LinkIcon style={{ fontSize: 23 }} />
                          </IconButton>
                        </Tooltip>
                      </Grid>}
                      {ele.tech.map((ele, i) => {
                        return (
                          <Grid item key={i}>
                            <IconButton className={classes.buttons} disabled={true}>
                              <Icon style={{ fontSize: 23 }} className={ele} color='secondary' />
                            </IconButton>
                          </Grid>
                        )
                      })}
                    </Grid>
                    <div className={classes.centerImage}>
                      <img src={ele.img} alt='project img' className={classes.img}></img>
                    </div>
                    {/* <Grid container spacing={1}>
                      {ele.tech.map((ele, i) => {
                        return (
                          <Grid item >
                            <Icon style={{ fontSize: 25 }} className={ele} color='secondary' />
                          </Grid>
                        )
                      })}

                    </Grid> */}
                    <Typography color='textSecondary'>{ele.description}</Typography>

                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                  </Button>
                        {activeStep < projects.length - 1 &&
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
            </Fade>
          </Container>
        </ThemeProvider>
      </Box>
    </div>
  );
}
