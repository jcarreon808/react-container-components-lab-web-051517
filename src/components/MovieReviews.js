// Code MovieReviews Here
import React from 'react';

const MovieReviews= (props) => {
  const review = props.reviews.map((review)=>{

    return (
      <div className='review'>
      <h1> REVIEWS </h1>
      <p>{review.display_title}</p>
      <p>{review.byline}</p>
      <p>{review.headline}</p>
      <p>{review.summary_short}</p>
      </div>
    )
  })

  return(
    <div className="review-list"> {review} </div>
  )


}

MovieReviews.defaultProps = {
  reviews:[]
}

export default MovieReviews;
