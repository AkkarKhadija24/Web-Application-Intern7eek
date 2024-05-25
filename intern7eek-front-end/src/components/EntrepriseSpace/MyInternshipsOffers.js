import React, { useEffect, useState } from 'react';

function MyInternshipsOffers() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await fetch('/api/offers');
                if (response.ok) {
                    const offers = await response.json();
                    setOffers(offers);
                }
            } catch (error) {
                console.error('Failed to fetch offers', error);
            }
        };

        fetchOffers();
    }, []);

    return (
        <div>
            <h2>My Internship Offers</h2>
            <ul>
                {offers.map((offer) => (
                    <li key={offer.id}>
                        <h3>{offer.title}</h3>
                        <p>{offer.description}</p>
                        <p>{offer.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyInternshipsOffers;
