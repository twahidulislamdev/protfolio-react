import React from "react";

const Card = ({ svg, title, description }) => {
  return (
    <div className="w-[32%]  bg-white  p-12 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center hover:cursor-pointer">
      <div className="flex justify-center mb-4">
        <div dangerouslySetInnerHTML={{ __html: svg }} />
      </div>
      <h2 className="text-xl font-bold mb-4 font-poppins">{title}</h2>
      <p className="text-gray-700 leading-relaxed font-poppins">
        {description}
      </p>
    </div>
  );
};

export default Card;
