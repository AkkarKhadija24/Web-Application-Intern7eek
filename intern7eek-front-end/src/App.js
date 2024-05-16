import React from 'react';
import './App.css';
// import './components/styles.css';
import Login from './components/SignIn/Login';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div>
          <img src="imagesBackground/intern7eek.png" alt="Logo Inter7eek" />
        </div>
        <span>Welcome To The Authentication Portal</span>
        <span>INTERN7EEK</span>
      </header>
      <Login />
      <footer className="footer">
        <p>INTERN7EEK &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
