
import {BrowserRouter as Router } from 'react-router-dom';

import { HomePage } from './pages/Home/HomePage';

import { ThemeProvider } from '@mui/material';
import { useCustomTheme } from './hooks/useCustomTheme';

function App() {
  const theme=useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
     
      <Router>
          <HomePage/> 
      </Router>    
    </div>
    </ThemeProvider>
  
  );
}

export default App;
