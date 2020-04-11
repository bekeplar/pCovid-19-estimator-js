import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
  return (
    <Box>
      <footer className="App-footer">
        <Typography variant="body2" color="textSecondary" align="center">
          <h4>coutersy of bekeplar &nbsp;<span>{new Date().getFullYear()}</span></h4>
        </Typography>
      </footer>
    </Box>
  );
}
