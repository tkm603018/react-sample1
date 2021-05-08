import React from 'react';
import './TweetShow.css';
import { TweetContainer } from './Tweet';
import ImageSliders from '../sliders/ImageIndex';
import { Box } from '@material-ui/core';

const TweetShow = () => {

  const Tweet = TweetContainer.useContainer().Pull();
  
  React.useEffect(() => {}, []); 
  
  if (Tweet === null) {
    return null;
  } else {
    return (
      <div className="tweetShowMain">
        {Tweet.map((key, i) => {
          return (
            <Box className="tweetShow" key={i}>
              {key.images.length === 0 ? null : <ImageSliders images={key.images} />}
              <h2 className="title">{key.title}</h2>
              <p className="desc">{key.desc}</p>
              <div className="createdAt">
                <span className='year'>{key.createdAt.year + ' / '}</span>
                <span className='month'>{key.createdAt.month + ' / '}</span>
                <span className='day'>{key.createdAt.date}</span>
              </div>
            </Box>
          )
        })
        }
      </div>
    )
  }
};

export default TweetShow;
