import React from 'react';
import './TweetIndex.css';
import { TweetContainer } from './Tweet';
import ImageIndex from '../sliders/ImageIndex';
import { Box } from '@material-ui/core';

const TweetIndex = () => {

  const Tweet = TweetContainer.useContainer().Pull();
  
  React.useEffect(() => {}, []); 
  
  if (Tweet === null) {
    return null;
  } else {
    return (
      <div className="tweetIndexMain">
        <div className="top"></div>
        <div className="middle">
          {Tweet.map((key, i) => {
            return (
              <div className="frame">
                <div className="tweetIndex" key={i}>
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

export default TweetIndex;
