import React, { useEffect, useState } from 'react';
import './MyInternshipsOffers.css';  // Optional: Add styles if needed

const MYINTERNSHIP_URL = "/back-end/rest/offer";

function MyInternshipsOffers() {
    const [offers, setOffers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await fetch(MYINTERNSHIP_URL);
                if (response.ok) {
                    const offers = await response.json();
                    setOffers(offers);
                } else {
                    setError('Failed to fetch offers');
                }
            } catch (error) {
                console.error('Failed to fetch offers', error);
                setError('An error occurred while fetching offers');
            }
        };

        fetchOffers();
    }, []);

    return (
        <div className="offers-container">
            <h2>My Internship Offers</h2>
            {error && <p className="error-message">{error}</p>}
            <ul className="offers-list">
                {offers.map((offer) => (
                    <li key={offer.id} className="offer-item">
                        <h3>{offer.title}</h3>
                        <p>{offer.description}</p>
                        <p><strong>Location:</strong> {offer.location}</p>
                        <p><strong>Domain:</strong> {offer.domain.map(d => d.name).join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyInternshipsOffers;
