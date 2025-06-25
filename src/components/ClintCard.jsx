import React from "react";
import Flex from "./Flex";
import ClintCommentIcon from "../../src/assets/clintCommentIcon.png"

const ClintCard = ({clintReviewTxt, clintNameTxt, clintPositionTxt}) => {
  return (
    <div className="w-[48%] p-10 rounded-2xl border-1 border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:cursor-pointer">
      <div className="rating">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          aria-label="1 star"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          aria-label="2 star"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          aria-label="3 star"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          aria-label="4 star"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          aria-label="5 star"
        />
      </div>
      <p className="mt-7 w-5/6">{clintReviewTxt}</p>
      <Flex className={"justify-between"}>
        <Flex className={" gap-x-5"}>
            <div className="mt-7 w-[50px] h-[50px] rounded-[50%] bg-[#5E3BEE] "></div>
            <div className="mt-7">
                <h6 className="text-xl font-medium font-poppins">{clintNameTxt}</h6>
                <p className="text-sm text-gray-600 font-normal font-poppins">{clintPositionTxt}</p>
            </div>
        </Flex>
        <div className="mt-8">
            <img src={ClintCommentIcon} alt="" />
        </div>
      </Flex>
    </div>
  );
};

export default ClintCard;
