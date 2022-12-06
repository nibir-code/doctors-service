import React from 'react';

const Review = ({img,name,review,location}) => {
     return (
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
  <p >{review.review}</p>
   
    <div className="avatar">
    <div className="h-16 w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
      <img src={review.img} />
    </div>
    <div className='mr-3'>
          <h1 className="card-title">{review.name}</h1>
          <h2 className='font-bold'>{review.location}</h2>
    </div>
  </div>
  </div>
</div>
     );
};

export default Review;