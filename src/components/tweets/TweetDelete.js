import React from 'react';
import './TweetDelete.css'
import { TweetContainer } from './Tweet';
import Button from '@material-ui/core/Button';

export default () => {

  const Tweet = TweetContainer.useContainer();

  if (Tweet.index !== null) {
    return (
      <div className="tweetDelete-main">
        <Button
          className="tweetDeleteButton"
          variant="contained"
          onClick={() => { Tweet.Delete(Tweet.index) }}
        >
          Delete
        </Button>
      </div>
      )
  } else {
    return null;
  }
}