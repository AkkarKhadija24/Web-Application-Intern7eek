import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './components/styles.css';
import Login from './components/SignIn/Login';
import SignUpCompany from './components/SignUpEntreprise/SignUpCompany';
import NavBar from './components/SignUpEntreprise/NavBar';
import Footer from './components/SignUpEntreprise//Footer';

function App() {
  return (
    /*<div className="App">
      <NavBar />
      <Login/>
      <Footer />     
    </div>*/    
    <Router>
      <div className="App">
      <NavBar />
                <Routes>
                    <Route path="/" element={<SignUpCompany />} />
                    <Route path="/signup" element={<SignUpCompany />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
    
    <Footer /> 
    </div> 
    </Router>   
    
    
  );
}

export default App;
