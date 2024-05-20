import React, { useState } from 'react';
import ApiService from './ApiServiceMain';
import './SignUpCompany.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser } from '@fortawesome/free-solid-svg-icons';
import { signUpCompany } from './ApiServiceMain'; // Import correct de la fonction

function SignUpForm() {
  const [companyName, setCompanyName] = useState('');
  const [reference, setReference] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'companyName') {
      setCompanyName(value);
    } else if (name === 'reference') {
      setReference(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { companyName, reference };
      const response = await signUpCompany(formData);
      //const response = await ApiService.signUpCompany(formData);
      // Traitement de la réponse du backend ici
      console.log('Utilisateur connecté:', response);
      //setSuccessMessage(response.message);
      setSuccessMessage(response.message || 'Company registered successfully');
      setErrorMessage('');
    } catch (error) {
      setSuccessMessage('');
      //setErrorMessage(error.message);
      setErrorMessage(error.message || 'An error occurred');
    }
  };

  return (
    <div className="signupCompanyContainer">
      <h2>Create an account</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group-signupCompany">
          <label htmlFor="companyName">Company name<FontAwesomeIcon icon={faBuilding} /></label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group-signupCompany">
          <label htmlFor="reference">Reference<FontAwesomeIcon icon={faUser} /></label>
          <input
            type="text"
            id="reference"
            name="reference"
            value={reference}
            onChange={handleChange}
            required
          />
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default SignUpForm;
