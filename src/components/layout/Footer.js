import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0, mt: 'auto' }}>
      <Toolbar>
        <Typography variant="body2" sx={{ flexGrow: 1 }}>
          &copy; 2025 Ismael Mfumu. All rights reserved.
        </Typography>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/in/ismael-mfumu-b0b27b1b5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://github.com/ismaelmfumu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <Button
          color="inherit"
          href="/IsmaelMfumu_Resume.pdf"
          download
          startIcon={<FileDownloadIcon />}
        >
          Download Resume
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
