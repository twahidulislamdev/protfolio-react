import React from "react";

const ProtfolioCard = ({ imageSrc, imageAlt, titleTxt, paraTxt }) => {
  return (
    <div
      className={
        "w-[48%] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:cursor-pointer "
      }
    >
      <div className="w-full ">
        <img
          className="rounded-xl w-full h-[310px]"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div className="w-full mx-10 mt-5  h-[90px] ">
        <h4 className="text-xl font-medium font-poppins pb-1">{titleTxt}</h4>
        <p className="text-base text-gray-700 font-normal font-poppins">
          {paraTxt}
        </p>
      </div>
    </div>
  );
};

export default ProtfolioCard;
