import React from 'react';
import Header from '../components/header/Header';
import { TweetContainer } from '../components/tweets/Tweet';
import TrendIndex from '../components/trend/TrendIndex';
import Footer from '../components/footer/Footer';
import { Box,Container,Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Box component="span" >
          <Grid container spacing={0}>
            <Grid item xs={7} >
              <Container maxWidth="sm">
                <TweetContainer.Provider>
                  <TrendIndex />
                </TweetContainer.Provider>
              </Container>
            </Grid>
            <Grid item xs={4}>
              <Grid container >
                <Grid container xs={11}>
                  <h2>おすすめ トレンド</h2>
                </Grid>
                <Grid container xs={11}>
                  <h3>活動休止</h3>
                </Grid>
                <Grid container xs={11}>
                  <h3>一律給付</h3>
                </Grid>
                <Grid container xs={11}>
                  <h3>恋つづ11話</h3>
                </Grid>
                <Grid container xs={11}>
                  <h5>さらに表示</h5>
                </Grid>
              </Grid>
              <Grid container spacing={0}>
                <Grid container xs={11}>
                  <h2>おすすめ ユーザー</h2>
                </Grid>
                <Grid container xs={11}>
                  <Button aria-controls="simple-menu" aria-haspopup="true"  title="">
                    <AccountCircleIcon/>
                  </Button>
                  <h3>Google</h3>
                </Grid>
                <Grid container xs={11}>
                  <Button aria-controls="simple-menu" aria-haspopup="true"  title="">
                    <AccountCircleIcon/>
                  </Button>
                  <h3>twitter</h3>
                </Grid>
                <Grid container xs={11}>
                  <Button aria-controls="simple-menu" aria-haspopup="true"  title="">
                    <AccountCircleIcon/>
                  </Button>
                  <h3>Facebook</h3>
                </Grid>
                <Grid container xs={11}>
                  <h5>さらに表示</h5>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Footer/>
      </div>
    )
  }
}
