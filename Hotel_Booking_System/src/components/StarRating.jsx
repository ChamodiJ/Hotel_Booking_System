import React from 'react';
import { assets } from '../assets/assets';

const StarRating = ({ rating = 4 }) => {
  return (
    <>
      {Array(5)
        .fill('')
        .map((_, index) => (
          <img
            key={index}
            src={assets.starIconFilled} // You can replace with empty star if needed
            alt="star-icon"
            className="w-5 h-5"
          />
        ))}
    </>
  );
};

export default StarRating;
