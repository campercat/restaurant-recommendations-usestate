import React, { useState } from "react"

import Restaurant from "./Restaurant"

import reviews from "../constants/reviews"
import restaurants from "../constants/restaurants"

import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm"

const App = props => {
  const [reviews, setReviews] = useState(reviews)

  const addReview = (newReview) => {
    setReviews(reviews.concat(newReview))
  }

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="restaurants cell small-3">
          <h3>Restaurants</h3>
          <Restaurant />
        </div>

        <div className="reviews cell auto grid-x">
          <div className="cell">
            <h3>Review Form</h3>
            <ReviewForm addReview={addReview} />
          </div>

          <div className="cell">
            <h3>Reviews</h3>
            <ReviewList reviews={reviews}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
