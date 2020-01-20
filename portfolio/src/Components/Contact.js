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
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Hidden, ThemeProvider, Divider, Icon, Tooltip, IconButton, CardMedia } from '@material-ui/core'

import { theme } from '../styles/styles'



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






const Contact = () => {

  const classes = useStyles()
  const history = useHistory()


  

  return (
    <div className={classes.backgroundColor}>
      <Box height='100vh' >
      <ThemeProvider theme={theme}>

        <CssBaseline />
        <Container component="main" maxWidth="sm" className={classes.paper} >
          
            <Typography component="h1" variant="h4" color='primary' >
              Contact Me
              
            </Typography>
            <Grid container >
              <Grid Item>
                   <EmailIcon style={{ fontSize: 30 }} color='secondary'/>
              </Grid>
              <Grid Item>
              <Typography component="h3" variant="subtitle1" color='textSecondary' >
              john.s.farmer@gmail.com
              
            </Typography>
              </Grid>

            </Grid>
            <Grid container >
              <Grid Item>
                   <GitHubIcon style={{ fontSize: 30 }} color='secondary'/>
              </Grid>
              <Grid Item>
              <Typography component="h3" variant="subtitle1" color='textSecondary' >
              github.com/jonnysfarmer
              
            </Typography>
              </Grid>

            </Grid>
            <Grid container >
              <Grid Item>
                   <LinkedInIcon style={{ fontSize: 30 }} color='secondary'/>
              </Grid>
              <Grid Item>
              <Typography component="h3" variant="subtitle1" color='textSecondary' >
              linkedin.com/in/jonny-farmer/
              
            </Typography>
              </Grid>

            </Grid>

        </Container>
        </ThemeProvider>
      </Box >
    </div>

  )


}

export default Contact