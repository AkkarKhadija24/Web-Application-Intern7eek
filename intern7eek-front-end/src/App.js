import React from 'react';
import './App.css';
// import './components/styles.css';
import Login from './components/SignIn/Login';
import SignUpCompany from './components/SignUpEntreprise/SignUpCompany';
import NavBar from './components/SignUpEntreprise/NavBar';
import Footer from './components/SignUpEntreprise//Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SignUpCompany/>
      <Footer />     
    </div>
  );
}

export default App;
