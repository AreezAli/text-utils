// import logo from './logo.svg';
import './App.css';
import Textbox from './components/Textbox';
import Navbar from './components/Navbar';
import React, { useState, } from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";
import { useEffect } from 'react';
function App() {
  const [mode,setMode]=useState('dark');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      document.body.style.color='white';
      document.title='Home - DarkMode Enabled';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color='black';
      document.title='Home - LightMode Enabled';
    }
  }
  useEffect(()=>{
    const setTheme=()=>{
      if(mode === 'dark')
      {
        document.body.style.backgroundColor="#042743";
        document.body.style.color='white';
        document.title='Home - DarkMode Enabled';
      }
    };
    setTheme();
  })
  return ( 
    <>
          <Router>
          <Navbar title="AREEZ ALI" about="About Us" mode={mode==='dark'?'dark':'light'} toggleMode={toggleMode}/>
          <Routes>
           <Route exact path="/" element={
              <div className="container my-3">
          <Textbox title="ENTER THE TEXT BELOW TO ANALYZE" mode={mode==='dark'?'dark':'light'} />
          </div>} />
          </Routes>  

          </Router>
    </>
  );
}

export default App;
