import React from 'react';
import './UserAddList.css';
import { UserContainer } from './User';
import { Radio, Box, Grid } from '@material-ui/core';

const UserAddList = () => {

  const preUser = UserContainer.useContainer();
  const latestUser = preUser.Pull();

  React.useEffect(() => {}, []); 
  
  if (latestUser === null) {
    return null;
  } else {
    return (
      <div className="userAddList-main">
        {console.log('latestUser', latestUser)}
        {latestUser.map((key, i) => {
          return (
            <Box className="userAddList" key={i}>
              <Grid container spacing={1}>
                <Grid item sm={1}>
                  <div className='radio'>
                    <label>
                      <Radio
                        className='radioInput'
                        type="checkbox"
                        checked={key.check.checked}
                        onChange={(e) => preUser.Select(e, i)}
                      />
                    </label>
                  </div>
                </Grid>
                <Grid item sm={9}>
                  <p className='name'>{key.name}</p>
                  <p className='desc'>{key.desc}</p>
                  <p className='desc'>{key.mail}</p>
                  <p className='password'>{key.password}</p>
                  <p className='location'>{key.location}</p>
                  <p className='website'>{key.website}</p>
                  <div className='image'>
                    {console.log('thumbnail',key.thumbnail)}
                    {!key.thumbnail? null:key.thumbnail.map((data, j) => {
                      return (
                        <span key={j}>
                          <img type="url" style={{ width: "40%" }} src={data} alt="" />
                        </span>
                      )
                    })}
                  </div>
                  <div className='image'>
                    {!key.background? null:key.background.map((data, j) => {
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

export default UserAddList;
