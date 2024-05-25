import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CompanySpace.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBriefcase, faComments } from '@fortawesome/free-solid-svg-icons';

function CompanySpace() {
    const [offers, setOffers] = useState([]);

    const handleAddOffer = (newOffer) => {
        setOffers((prevOffers) => [...prevOffers, newOffer]);
    };

    return (
        <div className="companySpaceContainer">
            <div className="contentCompanySpace">
                <h2>Welcome To Your Space!</h2>
                <div className="card-containerCompanySpace">
                    <Link to="/add-internship-offer" className="cardCompanySpace">
                        <FontAwesomeIcon icon={faBriefcase} className="card-icon" />
                        <span>Add New Internship Offer</span>
                    </Link>
                    <Link to="/my-internships-offers" className="cardCompanySpace">
                    <FontAwesomeIcon icon={faSearch} />
                        <span>My Internships Offers</span>
                    </Link>
                    <Link to="/comments-reviews" className="cardCompanySpace">
                    <FontAwesomeIcon icon={faComments} />
                        <span>All Comments & Reviews </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CompanySpace;
