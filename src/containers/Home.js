import React from 'react';
import './Home.css';
// components
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { TweetContainer } from '../components/tweets/Tweet';
import TrendIndex from '../components/trend/TrendIndex';
import { Box, Container, Grid, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Home = () => {
	return (
    <div className="HomeMain">
			<Header />
			<Box m={2}>
				<Button href="/create" m={5} color="primary">Tweet</Button>
			</Box>
        <Box>
          <Grid container spacing={7}>
            <Grid item xs={7} >
              <Container>
                <TweetContainer.Provider>
                  <TrendIndex />
                </TweetContainer.Provider>
              </Container>
            </Grid>
						<Grid item xs={4}>
              <Grid container>
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

			<Footer />
		</div>
	);
}

export default Home;
