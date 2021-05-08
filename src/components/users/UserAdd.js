import React from 'react';
import './UserAdd.css';
import { UserContainer } from './User';
import { Button, TextField } from '@material-ui/core';

const UserAdd = () => {

  const User = UserContainer.useContainer();

  return (
    <div className="tweetAdd-main">
      <form
        className="user-form"
        onSubmit={User.index !== null ? User.Edit : User.Add}
      >
        <h3>UserList</h3>
        <div className='userAdd-form-input'>
          <TextField
            fullWidth
            className="input"
            label="name"
            variant="filled"
            name="name"
            onChange={User.handleName}
            value={User.inputName}
          />
        </div>
        <div className='userAdd-form-textarea'>
          <TextField
            fullWidth
            multiline
            className="textarea"
            label="description"
            variant="filled"
            name="desc"
            onChange={User.handleDesc}
            value={User.inputDesc}
          />
        </div>
        <div className='userAdd-form-input'>
          <TextField
            fullWidth
            className="textarea"
            label="mail"
            multiline
            variant="filled"
            name="mail"
            onChange={User.handleMail}
            value={User.inputMail}
            color="secondary"
          />
        </div>
        <div className='userAdd-form-input'>
          <TextField
            fullWidth
            className="textarea"
            label="password"
            multiline
            variant="filled"
            name="password"
            onChange={User.handlePassword}
            value={User.inputPassword}
            color="secondary"
          />
        </div>
        <div className='userAdd-form-input'>
          <TextField
            fullWidth
            className="textarea"
            label="location"
            multiline
            variant="filled"
            name="location"
            onChange={User.handleLocation}
            value={User.inputLocation}
          />
        </div>
        <div className='userAdd-form-input'>
          <TextField
            fullWidth
            className="textarea"
            label="website"
            multiline
            variant="filled"
            name="website"
            onChange={User.handleWebsite}
            value={User.inputWebsite}
          />
        </div>
        <div className='userAdd-form-images'>
          <input
            className="image"
            label="thumbnail"
            name="thumbnail"
            type="file"
            onChange={User.handleThumbnail}
            value={User.inputThumbnail}
            multiple="multiple"
            accept="image/*"
          />
        </div>
        <div className='userAdd-form-images'>
          <input
            className="image"
            label="background"
            name="background"
            type="file"
            onChange={User.handleBackground}
            value={User.inputBackground}
            multiple="multiple"
            accept="image/*"
          />
        </div>
        <div className='userAdd-form-button'>
          <Button
            className="button"
            type="submit"
            variant="contained"
          >
            {User.index !== null? "Update" : "Register"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserAdd;
