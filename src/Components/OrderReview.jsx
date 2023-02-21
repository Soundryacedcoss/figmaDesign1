import React from "react";

export const OrderReview = () => {
  return (
    <div className="Right_card order_review">
      <div style={{ display: "flex", columnGap: "208px" }}>
        <span className="container_head">Order Review</span>
        <span>
          <i class="fa fa-caret-down"></i>
        </span>
      </div>
      <div className="order_review__des">
      <span style={{ marginLeft: "2px" }}>3 Items in card</span>
      </div>
    
    </div>
  );
};
