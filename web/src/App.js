import './App.css';
import '@fontsource/inter';
import Homepage from './Home';
import Box from '@mui/joy/Box'
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { extendTheme } from '@mui/joy/styles';
import Header from './components/Header';

const theme = extendTheme({
  colorSchemeSelector: 'media',
});

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
          <Header />
          <Homepage />
        </Box>
      </div>
    </CssVarsProvider>
  );
}

export default App;
