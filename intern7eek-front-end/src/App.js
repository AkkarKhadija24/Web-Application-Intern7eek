import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './components/styles.css';
import Login from './components/SignIn/Login';
import SignUpCompany from './components/SignUpEntreprise/SignUpCompany';
import Home from './components/Home/Home';

/*Partie CompanySpace */
import CompanySpace from './components/EntrepriseSpace/CompanySpace';
import AddInternshipOffer from './components/AddOfferEntreprise/AddInternshipOffer';
import CommentsReviews from './components/CommentsEntreprise/CommentsReviews';
import MyInternshipsOffers from './components/IntershipsEntreprise/MyInternshipsOffers';

import NavBar from './components/SignUpEntreprise/NavBar';
import Footer from './components/SignUpEntreprise//Footer';

function App() {
  return (
    /*<div className="App">
      <NavBar />
      <SignUpCompany/>
      <Footer />     
    </div> */  
   
    <Router>
      <div className="App">
      <NavBar />
              <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/companyspace" element={<CompanySpace />} />
                    <Route path="/signupcompany" element={<SignUpCompany />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/addinternshipoffer" element={<AddInternshipOffer />} />
                    <Route path="/myinternshipsofferscompany" element={<MyInternshipsOffers />} />
                    <Route path="/commentsreviews" element={<CommentsReviews />} />

              </Routes>
    
    <Footer /> 
    </div> 
    </Router>
    

    /* Partie CompanySpace */
    /*
    <Router>
    <div className="App">
    <NavBar />
            <Routes>
                <Route path="/" exact component={CompanySpace} />
                <Route path="/add-internship-offer" component={AddInternshipOffer} />
                <Route path="/my-internships-offers" component={MyInternshipsOffers} />
                <Route path="/comments-reviews" component={CommentsReviews} />
            </Routes>
    <Footer /> 
    </div> 
    </Router>
  */
    
    
  );
}

export default App;
