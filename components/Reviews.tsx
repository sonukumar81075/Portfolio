import React from "react";
import ReviewsSlider from "./helper/ReviewsSlider";

const Reviews = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading_mini">Client Reviews</p>
        <h1 className="heading_primary">
          I've <span className="text-yellow-300">40+</span>Client Feedback
        </h1>
      </div>
      <div className="w-[80%] pt-[3rem] md:pt-[5rem] mx-auto">
        {/* reviews slider */}
        <ReviewsSlider/>
      </div>
    </div>
  );
};

export default Reviews;
