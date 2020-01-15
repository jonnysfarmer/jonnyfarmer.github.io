import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { useHistory } from 'react-router-dom'
import grey from '@material-ui/core/colors/grey'
import Grid from '@material-ui/core/Grid'
import Typist from 'react-typist'










import Box from '@material-ui/core/Box'
// import { fontWeight } from '@material-ui/system'

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',

  },
  backgroundColor: {
    // background: 'linear-gradient(45deg, #00B950 35%, #38ef7d 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'

  },
  title: {
    textAlign: 'center',
    color: grey[50],
    fontWeight: '400'

  },
  copyright: {
    color: grey[800]
  },
  submit: {
    margin: theme.spacing(5, 0, 2),
    color: grey[800],
    backgroundColor: grey[50],
    '&:hover': {
      backgroundColor: theme.palette.success.dark
    }
  },
  submitgrey: {
    margin: theme.spacing(5, 0, 2),
    color: grey[800],
    border: '2px solid',
    '&:hover': {
      backgroundColor: theme.palette.text.secondary
    }
  },
  avatar: {
    color: grey[800],
    marginBottom: 0
  }
}))






const About = () => {

  const classes = useStyles()
  const history = useHistory()

  

  return (
    <div className={classes.backgroundColor}>
      <Box height='100vh' >

        <CssBaseline />
        <Container component="main" maxWidth="sm" className={classes.paper} >
          
            <Typography component="h1" variant="h2" className={classes.avatar} >
              About
              
            </Typography>
            <Typography component="h2" variant="h4" className={classes.avatar} >
            <Typist cursor={{ hideWhenDone: true }}>
              Junior software developer
            </Typist>
            </Typography>
    

        </Container>
      </Box >
    </div>

  )


}

export default About