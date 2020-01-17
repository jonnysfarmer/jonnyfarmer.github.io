
import { indigo, teal, red, green, orange } from '@material-ui/core/colors'
import { makeStyles, createMuiTheme, withStyles } from '@material-ui/core/styles'
// import { palette } from '@material-ui/system'
import Switch from '@material-ui/core/Switch'

//================================
// SETTINGS
//================================
const drawerWidth = 200

//================================
// THEME
//================================
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#24305E'
    },
    secondary: {
      main: '#ff9100'
    },
    info: {
      main: '#374785'
    },
  }
})

//================================
// STYLES
//================================
const useStyles = makeStyles(theme => ({

  //===== ROOT/BASE STYLES =====
  root: {
    flexGrow: 1,
    // margin: theme.spacing(1), //was adding a margin on my homepage, check whether it hurts other pages to not have it
    width: '100%'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  paperCard: {
    padding: theme.spacing(2),
    margin: 'auto'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main
  },
  boxdisplay: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.primary
  },
  noPadding: {
    padding: 0
  },

  //===== NAV =====

  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      // the below sets the header to be 100% width on desktop, with the menu appearing below
      zIndex: theme.zIndex.drawer + 1,
      colorPrimary: theme.palette.primary.main
    }
  },
  menuButton: {
    // justifyContent: 'flexEnd',
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  desktopMenuButton:{
    color: '#FFF'
  },
  rHS: {
    display: 'flex',
    justifyContent: 'flex-end',

  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  iconColor: {
    color: teal
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  
  //===== FOR PAGES =====
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.dark
    }
  },

    
  //===== FOR SPECIAL FORMS =====
  
  reminderFormPaper: {
    marginTop: theme.spacing(0),
    padding: theme.spacing(2)
  },
  reminderInlineField: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(0.5)    
  }

}))


//================================
// SWITCH STYLES
//================================
const SwitchOnOFF = withStyles({
  switchBase: {
    color: red[500],
    '&$checked': {
      color: green[500]
    },
    '&$checked + $track': {
      backgroundColor: green[500]
    },
    '& + $track': {
      backgroundColor: red[500]
    }
  },
  checked: {},
  track: {}
})(Switch)



export {
  useStyles,
  theme,
  SwitchOnOFF
}