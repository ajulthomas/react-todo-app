import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <AppBar className="app-bar" position="static">
        <FormatListBulletedIcon className="app-icon" />
        <h3 className="app-name"> Reactive Todo App</h3>
        <span className="spacer" />
        <span className="login">Login</span>
      </AppBar>
    </>
  );
}
