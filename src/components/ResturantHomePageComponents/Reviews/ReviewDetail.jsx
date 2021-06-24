import React from "react";
import "../../../css/ResturantHomePage/review.css";

function ReviewDetail(props) {
  return (
    <div className="review_detail">
      <h2>{props.u_name}</h2>
      <h4>{props.review}</h4>
      <h4>{props.comment}</h4>
    </div>
  );
}

export default ReviewDetail;
