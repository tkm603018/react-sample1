import React from 'react';
import './TweetAddList.css';
import { TweetContainer } from './Tweet';
import { Radio, Box, Grid } from '@material-ui/core';

const TweetAddList = () => {

  const preTweet = TweetContainer.useContainer();
  const latestTweet = preTweet.Pull();

  React.useEffect(() => {}, []); 
  
  if (latestTweet === null) {
    return null;
  } else {
    return (
      <div className="tweetAddList-main">
        {console.log('latestTweet', latestTweet)}
        {latestTweet.map((key, i) => {
          return (
            <Box className="tweetAddList" key={i}>
              <Grid container spacing={1}>
                <Grid item sm={1}>
                  <div className='radio'>
                    <label>
                      <Radio
                        className='radioInput'
                        type="checkbox"
                        checked={key.check.checked}
                        onChange={(e) => preTweet.Select(e, i)}
                      />
                    </label>
                  </div>
                </Grid>
                <Grid item sm={9}>
                  <p className='title'>{key.title}</p>
                  <p className='desc'>{key.desc}</p>
                  <div className='images'>
                    {/* {console.log('images',key.images)} */}
                    {key.images.map((data, j) => {
                      return (
                        <span key={j}>
                          <img type="url" style={{ width: "40%" }} src={data} alt="" />
                        </span>
                      )
                    })}
                  </div>
                </Grid>
              </Grid>
            </Box>
          )
        })
        }
      </div>
    )
  }
};

export default TweetAddList;
