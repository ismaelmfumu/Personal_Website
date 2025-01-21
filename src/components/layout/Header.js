import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ismael Mfumu
        </Typography>
        <Typography variant="subtitle1" sx={{ marginRight: 2 }}>
          Computer Systems Engineer
        </Typography>
        <Button color="inherit" href="#about">About</Button>
        <Button color="inherit" href="#skills">Skills</Button>
        <Button color="inherit" href="#projects">Projects</Button>
        <Button color="inherit" href="#contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
