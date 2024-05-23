import React, { useState } from 'react';
import './Login.css'; // Importez le fichier CSS correspondant
import { login } from './LoginService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await login(email, password);
            // Traitement de la réponse du backend ici
            console.log('Utilisateur connecté:', userData);
        } catch (error) {
            setError('Erreur lors de la connexion. Veuillez vérifier vos identifiants.');
        }
    };

    return (
        <div className="loginContainer">
            <h2> Login </h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email Address </label>
                    <span className="input-group-addon"></span>
                    <span className="input-group-addon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                    <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <br />
                <div className="input-group">
                    <label htmlFor="password">Password </label>
                    <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <br />
                <input type="submit" value="Login" />
                {error && <div className="error">{error}</div>}
            </form>
            <a href="#">Forgot Password ?</a><br />
            <a href="SignUpChoice.html">Create an account</a><br />
        </div>
    );
};

export default Login;
