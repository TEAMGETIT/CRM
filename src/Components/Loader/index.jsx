import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loader.scss';

function Loader({ status }) {
  return (
    <Backdrop className='loader__backdrop' open={status}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loader;
