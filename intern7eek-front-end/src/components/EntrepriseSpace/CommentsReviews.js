import React, { useEffect, useState } from 'react';

function CommentsReviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch('/api/comments');
                if (response.ok) {
                    const comments = await response.json();
                    setReviews(comments);
                }
            } catch (error) {
                console.error('Failed to fetch comments', error);
            }
        };

        fetchComments();
    }, []);

    return (
        <div>
            <h2>Comments & Reviews</h2>
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
