import React, { useState } from "react"

const ReviewForm = props => {
  // debugger
  const [reviewInfo, setReviewInfo] = useState({
    name: "",
    rating: "",
    content: ""
  })

  const onInputChange = event => {
    // debugger
    const newReviewInfo = {...reviewInfo, [event.currentTarget.name]: event.currentTarget.value}
    setReviewInfo(newReviewInfo)
  }

  const onSubmitHanlder = event => {
    event.preventDefault()
    props.addReview(reviewInfo)
  }

  return (
    <form onSubmit={onSubmitHanlder}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          onChange={onInputChange}
          // value={reviewInfo.name}
        />
      </label>

      <label htmlFor="rating">
        Score:
        <input
          type="text"
          id="rating"
          name="rating"
          onChange={onInputChange}
        />
      </label>

      <label htmlFor="content">
        Review:
        <input
          type="text"
          id="content"
          name="content"
          onChange={onInputChange}
        />
      </label>

      <input type="submit" />
    </form>
  )
}

export default ReviewForm

// Part 2
// Write the markups for the review form
// add state as object to track all input fields
// add onChange event listener to track input changes

// Part 3
// Add an onSubmit event listener to call the props.addReview function in App.js, and pass a newly submitted review object up
//