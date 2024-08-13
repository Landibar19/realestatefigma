
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { HomePage } from './pages/Home/HomePage';

import { ThemeProvider } from '@mui/material';
import { useCustomTheme } from './hooks/useCustomTheme';
import { Listings } from './pages/Listings/Listings';
import NavBar from './components/NavBar/NavBar';
import { Blog } from './pages/Blog/Blog';
import { ContactUs } from './pages/Contacts/ContactUs';
import { Pages } from '@mui/icons-material';
import { Footer } from './components/Footer/Footer';
import './App.css'

function App() {
  const theme=useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/listings" element={<Listings/>} />
          <Route path="/contact" element={<Blog/>} />
          <Route path="/blog" element={<ContactUs/>} />
          <Route path="/pages" element={<Pages/>} />
        </Routes>
        <Footer/>
      </Router>    
    </div>
    </ThemeProvider>
  
  );
}

export default App;
