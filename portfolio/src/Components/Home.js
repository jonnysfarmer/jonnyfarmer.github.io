import React from 'react'

import { useHistory } from 'react-router-dom'
import Typist from 'react-typist'

import { Hidden, ThemeProvider, Divider, Fade, Tooltip, Icon, Grid, Typography, Container, CssBaseline } from '@material-ui/core'

import { theme } from '../styles/styles'
import { makeStyles } from '@material-ui/core/styles'
import { loadCSS } from 'fg-loadcss';



import Box from '@material-ui/core/Box'
// import { fontWeight } from '@material-ui/system'

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
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
    color: theme.palette.secondary.main


  },
  titlemargin: {
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  textspacing: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  maxWidth:{
    minWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',

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
                  I am a junior software developer at We Got POP in London

            </Typography>
              <Divider variant='middle' />
            </Box>
            <Fade in={true} timeout={2000}>
              <Box className={classes.maxWidth}>
                <Typography component="h2" variant="h6"
                  align='center'
                  color='primary'
                >
                  Technology Stack
            </Typography>
                <div className={classes.spacing}>
                  <Grid container spacing={2} wrap='nowrap'>
                    <Grid item >
                      <Tooltip title="HTML 5" enterTouchDelay={300}>
                        <Icon style={{ fontSize: 40 }} className='devicon-html5-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="CSS 3" enterTouchDelay={300}>
                        <Icon style={{ fontSize: 40 }} className='devicon-css3-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="JavaScript" enterTouchDelay={300}>
                        <Icon style={{ fontSize: 40 }} className='devicon-javascript-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="React" enterTouchDelay={300}>
                        <Icon style={{ fontSize: 40 }} className='devicon-react-original' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="Python" enterTouchDelay={300}>
                        <Icon style={{ fontSize: 40 }} className='devicon-python-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Hidden smDown>
                      <Grid item >
                        <Tooltip title="Node.js" enterTouchDelay={300}>
                          <Icon style={{ fontSize: 40 }} className='devicon-nodejs-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Express" enterTouchDelay={300}>
                          <Icon style={{ fontSize: 40 }} className='devicon-express-original' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Babel" enterTouchDelay={300}>
                          <Icon style={{ fontSize: 40 }} className='devicon-babel-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="MongoDB" enterTouchDelay={300}>
                          <Icon style={{ fontSize: 40 }} className='devicon-mongodb-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                    </Hidden>
                  </Grid>
                </div>
                <Hidden mdUp>
                  <div className={classes.spacing}>
                    <Grid container spacing={2} wrap='nowrap'>
                      <Grid item >
                        <Tooltip title="Babel" enterTouchDelay={300}>
                          <Icon style={{ fontSize: 40 }} className='devicon-babel-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="MongoDB" enterTouchDelay={300}>
                          <Icon style={{ fontSize: 40 }} className='devicon-mongodb-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Git" enterTouchDelay={300}>
                          <Icon style={{ fontSize: 40 }} className='devicon-git-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Github" enterTouchDelay={300}>
                          <Icon style={{ fontSize: 40 }} className='devicon-github-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Heroku" enterTouchDelay={300}>
                          <Icon style={{ fontSize: 40 }} className='devicon-heroku-original' color='secondary' />
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </div>
                </Hidden>
                <div className={classes.spacing}>
                  <Grid container spacing={2} wrap='nowrap'>
                    <Hidden smDown>
                      <Grid item >
                        <Tooltip title="Git" enterTouchDelay={300}>
                          <Icon style={{ fontSize: 40 }} className='devicon-git-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Github" enterTouchDelay={300}>
                          <Icon style={{ fontSize: 40 }} className='devicon-github-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Heroku" enterTouchDelay={300}>
                          <Icon style={{ fontSize: 40 }} className='devicon-heroku-original' color='secondary' />
                        </Tooltip>
                      </Grid>

                      <Grid item >
                        <Tooltip title="Sass" enterTouchDelay={300}>
                          <Icon style={{ fontSize: 40 }} className='devicon-sass-original' color='secondary' />
                        </Tooltip>
                      </Grid>
                    </Hidden>
                    <Grid item >
                      <Tooltip title="Mocha" enterTouchDelay={300}>
                        <Icon style={{ fontSize: 40 }} className='devicon-mocha-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="PostgreSQL" enterTouchDelay={300}>
                        <Icon style={{ fontSize: 40 }} className='devicon-postgresql-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="Trello" enterTouchDelay={300}>
                        <Icon style={{ fontSize: 40 }} className='devicon-trello-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="Django" enterTouchDelay={300}>
                        <Icon style={{ fontSize: 40 }} className='devicon-django-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                    <Grid item >
                      <Tooltip title="Visual Studio" enterTouchDelay={300}>
                        <Icon style={{ fontSize: 40 }} className='devicon-visualstudio-plain' color='secondary' />
                      </Tooltip>
                    </Grid>
                  </Grid>
                </div>
                <Hidden mdUp >
                  <div className={classes.spacing} >
                    <Grid container spacing={2} wrap='nowrap'>
                      <Grid item >
                        <Tooltip title="Node.js" enterTouchDelay={300}>
                          <Icon style={{ fontSize: 40 }} className='devicon-nodejs-plain' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Express" enterTouchDelay={300}>
                          <Icon style={{ fontSize: 40 }} className='devicon-express-original' color='secondary' />
                        </Tooltip>
                      </Grid>
                      <Grid item >
                        <Tooltip title="Sass" enterTouchDelay={300}>
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