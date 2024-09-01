import React, { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleStarClick = (newRating) => {
        setRating(newRating);
    };

    return (
        <div>


            {[1, 2, 3, 4, 5].map((value) => (
                <span
                    key={value}
                    className={`star ${value <= rating ? 'selected' : ''}`}
                    onClick={() => handleStarClick(value)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 15.0745L13.3649 17.8368C14.1642 18.343 15.1424 17.5947 14.932 16.6482L13.7751 11.4537L17.6351 7.95405C18.3398 7.31575 17.9611 6.10517 17.0356 6.02813L11.9555 5.57692L9.96763 0.66857C9.61003 -0.222857 8.38997 -0.222857 8.03237 0.66857L6.04451 5.56591L0.964434 6.01713C0.038871 6.09416 -0.339768 7.30474 0.364921 7.94305L4.22494 11.4427L3.06799 16.6372C2.85763 17.5837 3.83578 18.332 4.63513 17.8258L9 15.0745Z" fill="#FFB800" />
                    </svg>
                </span>
            ))}
        </div>
    );
};

export default StarRating;
