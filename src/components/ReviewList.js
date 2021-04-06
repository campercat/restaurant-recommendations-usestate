import React from 'react'

import Review from "./Review"

// Part 1
// pass reviews data as props from App.js to ReviewList.js
// map through the array of reviews and return array of Review components
// render this array of <Review />

const ReviewList = (props) => {

  const { reviews } = props
  const reviewComponents = reviews.map(review => {
    return (
      <Review
        key={review.id}
        name={review.name}
        rating={review.rating}
        content={review.content}
      />
    )
  })
  // debugger
  return(
    <div>
      {reviewComponents}
    </div>
  )
}

export default ReviewList
