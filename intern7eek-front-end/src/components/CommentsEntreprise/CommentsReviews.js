import React, { useEffect, useState } from 'react';
import './CommentsReviews.css'; 

const Comments_URL = "/back-end/rest/comments";

function CommentsReviews() {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(Comments_URL);
                if (response.ok) {
                    const comments = await response.json();
                    setReviews(comments);
                } else {
                    setError('Failed to fetch comments');
                }
            } catch (error) {
                console.error('Failed to fetch comments', error);
                setError('An error occurred while fetching comments');
            }
        };

        fetchComments();
    }, []);

    return (
        <div className="comments-reviews-container">
            <h2>Comments & Reviews</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="reviews-container">
                {reviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <h3>{review.user}</h3>
                        <p>{review.comment}</p>
                        <p>Rating: {review.rating}/5</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommentsReviews;
