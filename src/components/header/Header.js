import React from 'react';
import './Header.css';
import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Login from '../login/Login'
import firebase from '../../firebase/firebase'
import Avatar from '@material-ui/core/Avatar';

const link = {
	fontSize: '20px',
	color: 'black',
	textDecoration: 'none',
	paddingRight: '1%', 
	paddingLeft: '1%',
};

const useStyles = makeStyles(theme => ({
  search: {
    position: 'absolute',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    right: '7%',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loginMenu, setLoginMenu] = React.useState(false);
  const [user, setUser] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleLoginMenu = () => {
    setLoginMenu(true)
  }

  const closeLoginButton = () => {
    setLoginMenu(false)
  }
  
  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
    console.log('login')
  }

  const logout = () => {
    firebase.auth().signOut()
    console.log('logout')
  }

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
        console.log('user true', user)
      } else {
        console.log('user false')
      }
    })
  }
  )
  
  return (
    <div className="Header-main">
    <div className="navbar">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Link to="/home" className="link">
              <h1>Swiper</h1>
            </Link>
          <div className="link-list">
            <Link to='/portfolio' className='link menu-button'>Trend</Link>
            <Link href='/about' className='link menu-button'>article</Link>
            <Link href='/about' className='link menu-button'>information</Link>
            <Link href='/about' className='link menu-button'>profile</Link>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              />
            </div>
              <div>
              <Button aria-controls="simple-menu" aria-haspopup="true"  title="LogIn" onClick={handleClick}>
                <AccountCircleIcon/>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{zIndex: 1500}}
              >
                <MenuItem><Link to="/profile" style={{color: '#000'}}>Profile</Link></MenuItem>
                <MenuItem>My account</MenuItem>
                {/* <MenuItem onClick={handleClose}><Link to="/login" style={{ color: '#000' }}>login</Link></MenuItem> */}
                <MenuItem><Button onClick={toggleLoginMenu}><Login /></Button></MenuItem>
              </Menu>
            </div>
            
        </Toolbar>
        </AppBar>

        {loginMenu ? (
        <div>
          <div>
            <div style={{
              position: `absolute`,
              top: 70,
              right: '50%',
              width: `30vw`,
              height: `80vh`,
              border: `solid 1px`,
              background: `#eee`,
              opacity: 0.98,
              zIndex: 1600,
                transform: `translateX(50%)`, 
              borderRadius: `1%`,
            }}>
                <center><h3>{user && user.displayName}</h3></center>
                <center><Avatar type="url" src={user && user.photoURL} alt="" /></center>
                <center><h4>{user && user.displayName}</h4></center>
                <center><p>{user && user.uid}</p></center>
                <center><p>{user && user.email}</p></center>
                <br></br>
                <Button
                  onClick={closeLoginButton}
                  style={{
                    position: `absolute`,
                    top: 0,
                    right: 0,
                    margin: `1%`,
                    
                  }}
                >close</Button>
                {user ? (
                  <center><Button onClick={logout}>Logout</Button></center>
                ) : (
                  <center><Button onClick={login} >Login</Button></center>
                )}
              <MenuItem><h4>AccountList</h4></MenuItem>
              <MenuItem><p>{user && user.displayName}</p></MenuItem>
              <MenuItem><p>bbb</p></MenuItem>
            </div>
          </div>
        </div>
        ):(<></>)}
    </div>
    </div>
  )
}
export default Header;
