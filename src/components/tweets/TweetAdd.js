import React from 'react';
import './TweetAdd.css';
import { TweetContainer } from './Tweet';
import { Button, TextField } from '@material-ui/core';

const TweetAdd = () => {

  const Tweet = TweetContainer.useContainer();

  return (
    <div className="tweetAdd-main">
      <form
        className="tweet-form"
        onSubmit={Tweet.index !== null ? Tweet.Edit : Tweet.Add}
      >
        <h3>TodoList</h3>
        <div className='tweetAdd-form-input'>
          <TextField
            fullWidth
            className="input"
            label="title"
            variant="filled"
            name="title"
            onChange={Tweet.handleTitle}
            value={Tweet.inputTitle}
          />
        </div>
        <div className='tweetAdd-form-textarea'>
          <TextField
            fullWidth
            multiline
            className="textarea"
            label="description"
            variant="filled"
            name="desc"
            onChange={Tweet.handleDesc}
            value={Tweet.inputDesc}
          />
        </div>
        <div className='tweetAdd-form-images'>
          <input
            className="images"
            label="images"
            name="images"
            type="file"
            onChange={Tweet.handleImages}
            value={Tweet.inputImages}
            multiple="multiple"
            accept="image/*"
          />
        </div>
        <div className='tweetAdd-form-button'>
          <Button
            className="button"
            type="submit"
            variant="contained"
          >
            {Tweet.index !== null? "Update" : "Register"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TweetAdd;
