import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

export default function ImagenCara({name}) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        style={{width: '100px',height: '100px', }}
        sx={{ bgcolor: deepOrange[500] }}
        alt={name}
        src="/broken-image.jpg"
      >
        M
      </Avatar>
    </Stack>
  );
}
