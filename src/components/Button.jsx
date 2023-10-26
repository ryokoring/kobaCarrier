import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ReserveButton() {
  return (
    <Stack direction="row">
      <Button variant="contained" 
      sx={{ 
        margin: 2,
  backgroundColor: '#fa0',
  backgroundImage: 'linear-gradient(to bottom, #ffaa00, #ff9600)', // 主要な紫色
  '&:hover': {
    backgroundImage: 'linear-gradient(to bottom, #ffba10, #ffa610)',
  },
  color: '#FFFFFF'  // テキストの色は白
      }}
      >
        応募する</Button>
    </Stack>
  );
}