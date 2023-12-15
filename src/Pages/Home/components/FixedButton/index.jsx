import * as React from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import { WhatsApp } from '@mui/icons-material';

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Fade in={trigger}>
      <Box
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 20,zIndex:999 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <ScrollTop {...props}>
        <Fab size="large" sx={{bgcolor:'green',"&:hover":{bgcolor:'rgb(10,50,64)'}}}>
          <WhatsApp  fontSize='large' sx={{color:'white'}}/>
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
