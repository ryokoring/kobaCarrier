import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// onClick プロパティを ReserveButton コンポーネントに追加
export default function ReserveButton({children, onClick}) {
  return (
    <Stack direction="row">
      <Button
        variant="contained" 
        onClick={onClick} // onClick ハンドラを Button に渡す
        sx={{ 
          margin: 2,
          backgroundColor: '#fa0',
          backgroundImage: 'linear-gradient(to bottom, #ffaa00, #ff9600)',
          '&:hover': {
            backgroundImage: 'linear-gradient(to bottom, #ffba10, #ffa610)',
          },
          color: '#FFFFFF'
        }}
      >
        {children}
      </Button>
    </Stack>
  );
}
