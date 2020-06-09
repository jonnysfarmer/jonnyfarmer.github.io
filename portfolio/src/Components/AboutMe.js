import React, { useState } from 'react'

import { Hidden, ThemeProvider, Divider, Button, Typography, Container, CssBaseline, Link, Box } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import { theme } from '../styles/styles'

import Headshot from '../styles/Images/Headshot.jpg'


const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(12),
    minHeight: '100%',

  },
  backgroundColor: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'

  },
  title: {
    textAlign: 'center',
    fontWeight: '400'

  },
  image: {
    width: '60%',
    height: '60%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  buttonMargin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}))


const randomFacts = ['I don’t eat cheese. I’m not vegan, I just don\'t like the taste', 'When I was growing up I wanted to be a vet',
  'I’ve had a motorcycle license since I was 17 but it took me until 30 to pass my car test', 'I love whisky. Japanese is my favourite, anything peaty from Scotland, is a close second',
  'I’m a big fan of Manga and am currently reading One Piece, Tower of God and Solo Leveling', 'My first pet was a gecko called Dexter',
  'As a Brixton local, I have eaten at almost every restaurant in Brixton Market']



const About = () => {

  const [random, setRandom] = useState('')

  const classes = useStyles()

  const RandomFact = (e) => {
    e.preventDefault()

    const RandomNum = Math.floor(Math.random() * 7)
    setRandom(randomFacts[RandomNum])

  }



  return (
    <div className={classes.backgroundColor}>
      <Box height='100vh' >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container component="main" maxWidth="sm" className={classes.paper} >

            <Typography component="h1" variant="h4" color='primary'>
              About Me
            </Typography>
            <img src={Headshot} alt='headshot' className={classes.image} ></img>
            <Typography component='h3' variant='subtitle1' color='textSecondary'>
              I’m the proud father of two energetic little boy's.
              When I’m not chasing my son around the playground, you’ll find me brewing beer at the London Beer Lab or
               playing squash at the local rec centre.
             <br></br>
              <br></br>
              After a decade in industry, I am excited to undertake a complete career change from headhunter (I owned an Executive Search Firm with 10 staff and turnover exceeding £1,000,000) to software developer.  I am now working at We Got POP, transforming the entertainment industry.
             <br></br>
              <br></br>
              Ever the problem solver, as evidenced by master’s degree in Mechanical Engineering, I enjoy software development on both a practical and creative level.
            <br></br>
              <br></br>
              Want to more about me? Have a look below...
  
            </Typography>
            <Button
              type="submit"
              size='medium'
              variant="contained"
              color="secondary"
              onClick={(e) => RandomFact(e)}
              className={classes.buttonMargin}
            >
              Random Jonny Fact Generator
          </Button>
            <Typography component='h3' variant='subtitle1' color='secondary' align='center'>
              {random}
            </Typography>

          </Container>
        </ThemeProvider>
      </Box >
    </div>

  )


}

export default About