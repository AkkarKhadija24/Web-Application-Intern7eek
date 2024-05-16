import axios from 'axios'; 

// URL du backend pour la connexion
const LOGIN_URL = "/ProjetJEEIntern7eek/rest/login";

// Fonction pour se connecter
export async function login(email, password) {
    const requestOptions = {
        method: 'POST',
        mode: "cors",
        // mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    const response = await fetch("/back-end/rest/login", requestOptions);
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }
    return await response.json();
}

