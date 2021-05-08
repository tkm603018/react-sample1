import React from 'react';
import './TrendIndex.css';
import { TweetContainer } from '../tweets/Tweet';
import ImageIndex from '../sliders/ImageIndex';
import { Box } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

const TrendIndex = () => {

  const Tweet = TweetContainer.useContainer().Pull();
  
  React.useEffect(() => {}, []); 
  
  if (Tweet === null) {
    return null;
  } else {
    return (
      <div className="TrendIndexMain">
        <div className="top"></div>
        <div className="middle">
          {Tweet.map((key, i) => {
            return (
              <div className="frame">
                <div className="TrendIndex" key={i}>
                  <Toolbar>
                    <Button aria-controls="simple-menu" aria-haspopup="true"  title="">
                      <AccountCircleIcon/>
                    </Button>
                    <p>accountName</p>
                  </Toolbar>
                  <div className="image">
                    {key.images.length === 0 ? null : <ImageIndex images={key.images} />}
                  </div>
                  <span className="title">{key.title}</span>
                  <div className="createdAt">
                    <span className='year'>{key.createdAt.year + ' / '}</span>
                    <span className='month'>{key.createdAt.month + ' / '}</span>
                    <span className='day'>{key.createdAt.date}</span>
                  </div>
                    <span className="desc">{key.desc}</span>
                  
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    )
  }
};

export default TrendIndex;
