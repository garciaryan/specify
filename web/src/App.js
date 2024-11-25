import './App.css';
import '@fontsource/inter';
import Homepage from './Home';
import Layout from './Layout';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { extendTheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet'
import { BrowserRouter, Routes, Route } from 'react-router';

const theme = extendTheme({
  colorSchemeSelector: 'media',
});

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <Sheet className="App">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/random" element={<></>} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Sheet>
    </CssVarsProvider>
  );
}

export default App;
