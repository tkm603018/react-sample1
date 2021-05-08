import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';


const Footer = () => {
  return (
    <div className="FooterMain">
      <div className="top">
        <h1>Swiper</h1>
      </div>
      <div className="middle">
        <div className="frame">
          <h2 className="frameTitle">Welcome</h2>
          Founded by Simon Mottram in London in 2004, Rapha makes the world’s finest cycling clothing. For 15 years, our products have redefined comfort, performance, and style for cyclists from absolute beginners through to WorldTour professionals.
        </div>
        <div className="frame">
        <h2 className="frameTitle">Information</h2>
          <h4>About us</h4>
          <h4>Events</h4>
          <h4>profile</h4>
        </div>
        <div className="frame">
        <h2 className="frameTitle">Contact</h2>
          <div>
            <div className="mail">
              <span className="mainicon"><MailIcon /></span>
              <span className="mailadress">xxxxxxxxxxx@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="frame">
        <h2 className="frameTitle" >Forrow me</h2>
          <div className="iconList">
            <div className="icon"><InstagramIcon /></div>
            <div className="icon"><FacebookIcon /></div>
            <div className="icon"><TwitterIcon /></div>
            <div className="icon"><YouTubeIcon/></div>
          </div>
        </div>
      </div>
      <div className="footer">
        <span>© 2020, All rights reserved Takumi Nakamura</span>
      </div>
    </div>
  )
}
export default Footer;
