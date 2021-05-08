import React from 'react';
import './About.css'
import { UserContainer } from '../components/users/User';
import UserAdd from '../components/users/UserAdd';
import UserAddList from '../components/users/UserAddList';
import UserDelete from '../components/users/UserDelete';
import Header from '../components/header/Header';
import { Grid, Box, Container } from '@material-ui/core';

const About = () => {
  return (
    <div className="About-main">
      <Header />
      {/* <TweetContainer.Provider>
      <Grid container spacing={0}>
        <Grid item xs={5} sm={7}>
          <TweetAdd />
          <TweetDelete />
        </Grid>
        <Grid item xs={5} sm={4}>
          <TweetAddList />
        </Grid>
      </Grid>
     </TweetContainer.Provider>
      */}
      <Box>
        <Grid container>
          <Grid item xs={2}>
            <Container maxWidth="sm">
              <Grid container>
                <h3>Menu</h3>
              </Grid>
              <Grid container>
                <h5>一覧</h5>
              </Grid>
              <Grid container>
                <h5>新規作成</h5>
              </Grid>
              <Grid container>
                <h5>ニュース</h5>
              </Grid>
              <Grid container>
                <h5>さらに表示</h5>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={10}>
              <UserContainer.Provider>
              <Grid container spacing={0}>
                <Grid item xs={7} sm={5}>
                  <UserAdd />
                  <UserDelete />
                </Grid>
                <Grid item xs={5} sm={5}>
                  <UserAddList />
                </Grid>
              </Grid>
            </UserContainer.Provider>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default About;
