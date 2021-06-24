import React from "react";
import ReviewDetail from "./ReviewDetail";

function Review() {
  function handleReview() {
    prompt("Please post your review for this resturant!");
    alert("Thank you for your review.");
  }
  return (
    <div>
      <h2 className="review_header">Review</h2>
      <ReviewDetail
        u_name="Asmita Acharya"
        review="4.5"
        comment="The food was great"
      />
      <ReviewDetail
        u_name="Alka Bohora"
        review="5"
        comment="The service was wonderful and food was great"
      />
      <ReviewDetail
        u_name="Sudip Adhikari"
        review="2.5"
        comment="Over priced, with no authentic taste "
      />
      <ReviewDetail
        u_name="Jack Jones"
        review="1"
        comment="The delivery guy steal some part of my food from my order."
      />
      <div className="post_review">
        <button onClick={handleReview}>Post a Review</button>
      </div>
    </div>
  );
}

export default Review;
