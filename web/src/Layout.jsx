import React from 'react';
import Header from './components/Header';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import { Toaster } from 'react-hot-toast';

function Layout({ children }) {
  return (
    <Sheet sx={{ margin: '0 10%', paddingTop: '20px' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 1 }}>
        <Box sx={{ gridColumn: 'span 12' }}>
          <Header />
        </Box>
        <Box sx={{ gridColumn: 'span 12' }}>
          <Sheet>{children}</Sheet>
        </Box>
      </Box>
      <Toaster position='bottom-right' />
    </Sheet>
  );
}

export default Layout;
