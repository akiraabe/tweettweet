import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function AddButtonArea(props) {
  return (
    <Fab
      size='medium'
      color='primary'
      aria-label='add'
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 24,
      }}
      onClick={props.onClick}
    >
      <AddIcon />
    </Fab>
  );
}
