import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { Box, useTheme } from '@mui/material';
import Footer from './components/Footer';

function App() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          padding: theme.spacing(2),
          width: '100%',
          flexGrow: 1,
        }}
      >
        <HomePage />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
