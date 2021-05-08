import React, { useState, useEffect } from 'react';
import './Navigation.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const link = {
	fontSize: '1.0rem',
	color: 'white',
	textDecoration: 'none',
	paddingRight: '1%', 
	paddingLeft: '1%',
};

const navLinks = [
  { url: '/portfolio', name: 'Portfolio' },
  { url: '/spring', name: 'Spring' },
  { url: '/summer', name: 'Summer' },
  { url: '/autum', name: 'Autum' },
  { url: '/winter', name: 'Winter' },
];

const Navigation = () => {
  const [style, setStyle] = useState('menu');
  const [menuStatus, setMenuStatus] = useState('open');

  const handleClick = () => {
    // eslint-disable-next-line default-case
    switch (menuStatus) {
      case "open":
        setStyle("menu active")
        setMenuStatus("close")
        break;
      case "close":
        setStyle("menu")
        setMenuStatus("open")
        break;
    }
  }

  useEffect(() => { }, [style, menuStatus]);

  return (
    <div className="Navigation-main">
      {menuStatus === "open" ?
        <Button className="navButton" onClick={handleClick}>
          {/* <DehazeIcon /> */}
          <MenuIcon />
        </Button>
        // <IconButton edge="start" className="" color="inherit" aria-label="menu" onClick={handleClick}>
        //   <MenuIcon />
        // </IconButton>
        : null}
      <div className="Navigation">
        <div className={style}>
          <ul>
            {navLinks.map(({ url, name }) => (
              <li key={name}>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ul>
          <ul><li><a href="/About" >About</a></li></ul>
        </div>
        {style === "menu" ?
          null :
          <div
            className="background"
            onClick={handleClick}>
          </div>
        }
      </div>
    </div>
  );
}

export default Navigation;
