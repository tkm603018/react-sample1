import React from 'react';
import './UserDelete.css'
import { UserContainer } from './User';
import Button from '@material-ui/core/Button';

export default () => {

  const User = UserContainer.useContainer();

  if (User.index !== null) {
    return (
      <div className="userDelete-main">
        <Button
          className="userDeleteButton"
          variant="contained"
          onClick={() => { User.Delete(User.index) }}
        >
          Delete
        </Button>
      </div>
      )
  } else {
    return null;
  }
}
