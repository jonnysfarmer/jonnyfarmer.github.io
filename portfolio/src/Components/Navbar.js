import React from 'react'
import { Link, useHistory } from 'react-router-dom'

//Material UI Styling
import { AppBar, CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemText, Toolbar, Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'

import { useStyles, theme } from '../styles/styles'

function ResponsiveDrawer(props) {
  // eslint-disable-next-line no-unused-vars
  const { container } = props
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const history = useHistory()
  const location = history.location.pathname

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['About', 'Portfolio', 'Contact'].map((elem, i) => (
          <Link to={`/${elem}`} key={i} className={classes.iconColor}>
            <ListItem>
              {elem === 'About'}
              {elem === 'Portfolio'}
              {elem === 'Contact'}
              <ListItemText>{elem}</ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={theme}>

        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.rHS}>
            {location !== '/' && <IconButton
              className={classes.desktopMenuButton}
              href="/jonny/#/"
            >
              <HomeIcon />
            </IconButton>
            }
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Hidden smDown>
              <Button href="/jonny/#/about" className={classes.desktopMenuButton}>About Me</Button>
              <Button href="/jonny/#/portfolio" className={classes.desktopMenuButton}>My Work</Button>
              <Button href="/jonny/#/contact" className={classes.desktopMenuButton}>Contact</Button>
            </Hidden>

          </Toolbar>
        </AppBar>

        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden mdUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'ltr' ? 'right' : 'left'}
              open={mobileOpen}
              onClick={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>

        </nav>
      </ThemeProvider>
    </div>
  )
}

export default ResponsiveDrawer