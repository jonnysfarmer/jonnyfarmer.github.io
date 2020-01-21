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
import Icon from '@material-ui/core/Icon'
import Tooltip from '@material-ui/core/Tooltip'
import { Hidden, ThemeProvider, Divider } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'


import { theme } from '../styles/styles'


import { loadCSS } from 'fg-loadcss';



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
    // backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'

  },
  spacing: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    color: theme.palette.secondary.main,
    justifyContent: 'center',
    display: 'flex'
  },
  titlemargin: {
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  textspacing: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }



}))






const Home = () => {

  const classes = useStyles()
  const history = useHistory()


  React.useEffect(() => {
    loadCSS(
      'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css',
    )
  }, [])



  return (
    <div className={classes.backgroundColor}>
      <Box height='100vh' >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container component="main" maxWidth="sm" className={classes.paper} >
            <Box className={classes.titlemargin}>
              <Typography component="h1" variant="h4"
                align='center'
                color='primary' >
                <Typist cursor={{ hideWhenDone: true }} >
                  Hi, I'm Jonny Farmer
              </Typist>

              </Typography>
              <Typography component="h2" variant="h6"
                className={classes.textspacing}
                align='center'
                color='textSecondary' >

                A passionate junior software engineer, with full stack project experience
                looking for opportunities to work with interesting technologies as a junior developer

            </Typography>
              <Divider variant='middle' />
            </Box>
            <Fade in={true} timeout={2000}>
              <Box>
                <Typography component="h2" variant="h6"
                  align='center'
                  color='primary'
                >
                  Technology Stack
            </Typography>
                <div className={classes.spacing}>
                  <Grid container spacing={1}>
                    <Grid item >
                      <Tooltip title="HTML 5" enterTouchDelay='300'>
                        <Icon style={{ fontSize: 40 }} className='devicon-html5-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="CSS 3" enterTouchDelay='300'>
                        <Icon style={{ fontSize: 40 }} className='devicon-css3-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="Javascript" enterTouchDelay='300'>
                        <Icon style={{ fontSize: 40 }} className='devicon-javascript-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="React" enterTouchDelay='300'>
                        <Icon style={{ fontSize: 40 }} className='devicon-react-original' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="Python" enterTouchDelay='300'>
                        <Icon style={{ fontSize: 40 }} className='devicon-python-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Hidden smDown>
                      <Grid item >
                        <Tooltip title="Node.js" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-nodejs-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Express" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-express-original' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Babel" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-babel-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="MongoDB" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-mongodb-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                    </Hidden>
                  </Grid>
                </div>
                <Hidden mdUp>
                  <div className={classes.spacing}>
                    <Grid container spacing={1} alignItems='center'>
                      <Grid item >
                        <Tooltip title="Babel" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-babel-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="MongoDB" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-mongodb-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Git" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-git-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Github" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-github-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Heroku" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-heroku-original' color='secondary' />
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </div>
                </Hidden>
                <div className={classes.spacing}>
                  <Grid container spacing={1}>
                    <Hidden smDown>
                      <Grid item >
                        <Tooltip title="Git" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-git-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Github" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-github-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Heroku" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-heroku-original' color='secondary' />
                        </Tooltip>
                      </Grid>

                      <Grid item >
                        <Tooltip title="Sass" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-sass-original' color='secondary' />
                        </Tooltip>
                      </Grid>
                    </Hidden>
                    <Grid item >
                      <Tooltip title="Mocha" enterTouchDelay='300'>
                        <Icon style={{ fontSize: 40 }} className='devicon-mocha-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="Postgresql" enterTouchDelay='300'>
                        <Icon style={{ fontSize: 40 }} className='devicon-postgresql-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="Trello" enterTouchDelay='300'>
                        <Icon style={{ fontSize: 40 }} className='devicon-trello-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="Django" enterTouchDelay='300'>
                        <Icon style={{ fontSize: 40 }} className='devicon-django-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="Visual Studio" enterTouchDelay='300'>
                        <Icon style={{ fontSize: 40 }} className='devicon-visualstudio-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                  </Grid>
                </div>
                <Hidden mdUp >
                  <div className={classes.spacing}>
                    <Grid container spacing={1} alignItems='center'>
                    <Grid item ></Grid>
                    <Grid item ></Grid>
                    <Grid item ></Grid>
                    <Grid item ></Grid>
                    <Grid item ></Grid>
                    <Grid item ></Grid>
                      <Grid item alignItems='center'>
                        <Tooltip title="Node.js" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-nodejs-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Express" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-express-original' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Sass" enterTouchDelay='300'>
                          <Icon style={{ fontSize: 40 }} className='devicon-sass-original' color='secondary' />
                        </Tooltip>
                      </Grid>

                    </Grid>

                  </div>
                </Hidden>
              </Box>
            </Fade>


          </Container>
        </ThemeProvider>
      </Box >
    </div>

  )


}

export default Home