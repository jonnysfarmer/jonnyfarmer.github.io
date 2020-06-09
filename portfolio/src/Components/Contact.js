import React from 'react'

import { Grid, ThemeProvider, Link, Typography, Container, CssBaseline, Box } from '@material-ui/core'

import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'


import { makeStyles } from '@material-ui/core/styles'
import { theme } from '../styles/styles'



const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',

  },
  background: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'

  },
  margin: {
    marginLeft: theme.spacing(1)
  },
  titleMargin: {
    marginBottom: theme.spacing(2)
  }

}))



const Contact = () => {

  const classes = useStyles()


  

  return (
    <div className={classes.background}>
      <Box height='100vh' >
      <ThemeProvider theme={theme}>

        <CssBaseline />
        <Container component="main" maxWidth="sm" className={classes.paper} >
          
            <Typography component="h1" variant="h4" color='primary' className={classes.titleMargin} >
              Contact Me
              
            </Typography>
            {/* <Grid container > */}
              {/* <Grid Item>
                   <EmailIcon style={{ fontSize: 30 }} color='secondary'/>
              </Grid>
              <Grid Item >
              <Typography component="h3" variant="subtitle1" color='textSecondary' className={classes.margin}>
              <Link href={'mailto:john.s.farmer@gmail[dot]com'}
              target="_top"
              color='inherit'>
                john.s.farmer@gmail[dot]com
              </Link>
              
            </Typography>
              </Grid>

            </Grid> */}
            <Grid container >
              <Grid Item>
                   <GitHubIcon style={{ fontSize: 30 }} color='secondary'/>
              </Grid>
              <Grid Item>
              <Typography component="h3" variant="subtitle1" color='textSecondary' className={classes.margin}>
              <Link href={'https://github.com/jonnysfarmer'}
              target="_blank"
              color='inherit'>
                github.com/jonnysfarmer
              </Link>
              
            </Typography>
              </Grid>

            </Grid>
            <Grid container >
              <Grid Item>
                   <LinkedInIcon style={{ fontSize: 30 }} color='secondary'/>
              </Grid>
              <Grid Item>
              <Typography component="h3" variant="subtitle1" color='textSecondary' className={classes.margin}>
              <Link href={'https://www.linkedin.com/in/jonny-farmer/'}
              target="_blank"
              color='inherit'>
              linkedin.com/in/jonny-farmer/
              </Link>
              
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