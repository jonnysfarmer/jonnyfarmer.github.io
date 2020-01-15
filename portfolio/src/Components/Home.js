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
import Tooltip from '@material-ui/core/Tooltip';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
    // backgroundColor: theme.palette.info.main,
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






const Home = () => {

  const classes = useStyles()
  const history = useHistory()

 
  React.useEffect(() => {
    loadCSS(
      'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css',

      // 'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);
  
  // https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
  

  return (
    <div className={classes.backgroundColor}>
      <Box height='100vh' >

        <CssBaseline />
        <Container component="main" maxWidth="sm" className={classes.paper} >
          
            <Typography component="h1" variant="h2" 
            // className={classes.avatar} 
            color='primary'>
              Jonny Farmer
              
            </Typography>
            <Typography component="h2" variant="h4" 
            // className={classes.avatar} 
            color='secondary'>
            <Typist cursor={{ hideWhenDone: true }}>
              Junior software developer
            </Typist>
            </Typography>
            <Box>
            <Tooltip title="HTML 5">
              <Icon style={{ fontSize: 30 }} className='devicon-html5-plain' color='secondary'/>
            </Tooltip>
            <Icon style={{ fontSize: 30 }} className='devicon-css3-plain' aria-label='React'/>
            <Icon style={{ fontSize: 30 }} className='devicon-javascript-plain' aria-label='React'/>
            <Icon style={{ fontSize: 30 }} className='devicon-python-plain' aria-label='React'/>
            <Icon style={{ fontSize: 30 }} className='devicon-react-original' aria-label='React'/>


            </Box>
    

        </Container>
      </Box >
    </div>

  )


}

export default Home