import React from 'react';
import Header from '../components/header/Header';
import { TweetContainer } from '../components/tweets/Tweet';
import TweetAdd from '../components/tweets/TweetAdd';
import TweetDelete from '../components/tweets/TweetDelete';
import TweetAddList from '../components/tweets/TweetAddList';
import { Box, Grid } from '@material-ui/core';

const Create = () => {
  return (
    <div>
      <Header />
      <Box m={2}>
        <TweetContainer.Provider>
        <Grid container spacing={0}>
          <Grid item xs={5} sm={5}>
            <TweetAdd />
            <TweetDelete />
          </Grid>
          <Grid item xs={5} sm={5}>
            <TweetAddList />
          </Grid>
        </Grid>
        </TweetContainer.Provider>
      </Box>
    </div>
  )
}
export default Create;
