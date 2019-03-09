import React from 'react'
import sampleReviews from '../sample_reviews'
import moment from 'moment'
import StarRatings from 'react-star-ratings';

const Reviews = (props) => {
  return (<div>
      {props.reviews.map(review => {
        return (
          <div>
            <div className="review-date-stars">
              <div className="review-stars">
                <StarRatings
                  rating={review.rating}
                  starRatedColor="black"
                  numberOfStars={5}
                  name='rating'
                  starSpacing='2px'
                  starDimension='15px'
                />
              </div>
              <div className="review-date">{moment(review.createdAt).format("MMMM D, YYYY")}</div>
            </div>
            <div className="review-opinion">{review.opinion}</div>
            <div className="review-review">{review.review}</div>
            <div className="review-recommend">
              {review.recommend ? <div><span className="review-checkmark">&#10003;</span> <span>I recommend this product</span></div> : ''}
            </div>
            <div className="review-nickname-verify">
              <div className="review-nickname">{review.nickname}</div>
              <div className="review-verify"> - Verified Purchaser</div>
            </div>
            <div className="review-reply-helpful">
              <span className="review-reply">Reply</span>
              <div className="review-helpful">
                <span className="review-helpful-text">Was this review helpful?</span>
                <button className="review-boolean"><u>Yes </u>{review.help_yes}</button>
                <button className="review-boolean"><u>No </u> (0)</button>
                <button className="delete helpful">DELETE</button>
              </div>
            </div>
          </div>
        )
      })}
  </div>)
}

export default Reviews;