import React, { useState } from 'react';

function AddInternshipOffer({ onAddOffer }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [domain, setDomain] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const offer = { title, description, location, date, domain };
        try {
            const response = await fetch('/api/offers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(offer),
            });
            if (response.ok) {
                const newOffer = await response.json();
                onAddOffer(newOffer);
                setTitle('');
                setDescription('');
                setLocation('');
            }
        } catch (error) {
            console.error('Failed to add offer', error);
        }
    };

    return (
        <div>
            <h2>Add Internship Offer</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Offer</button>
            </form>
        </div>
    );
}

export default AddInternshipOffer;
