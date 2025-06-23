import React from "react";
import Container from "../Container";
import Flex from "../Flex";

const CounterUp = () => {
  return (
    <section className="py-[50px]">
      <Container>
        <Flex className={'justify-between'}>
          {/* First Start  */}
          <div className="w-[23%] text-center ">
            <div className="flex justify-center items-center">
              <h1 className=" text-[50px] font-bold font-poppins ">100</h1>
              <span className="text-[50px] font-semibold font-poppins pl-2">
                +
              </span>
            </div>
            <p className="text-center text-gray-600 text-base font-medium ">
              PROJECTS
            </p>
          </div>
          {/* First End  */}
          {/* Second Start  */}
          <div className="w-[23%] text-center ">
            <div className="flex justify-center items-center">
              <h1 className=" text-[50px] font-bold font-poppins ">70</h1>
              <span className="text-[50px] font-semibold font-poppins pl-2">
                +
              </span>
            </div>
            <p className="text-center text-gray-600 text-base font-medium  ">
              HAPPY CLIENTS
            </p>
          </div>
          {/* Second End  */}
          {/* Third Start  */}
          <div className="w-[23%] text-center ">
            <div className="flex justify-center items-center">
              <h1 className=" text-[50px] font-bold font-poppins ">24</h1>
              <span className="text-[50px] font-semibold font-poppins pl-2">
                +
              </span>
            </div>
            <p className="text-center text-gray-600 text-base font-medium  ">
              WINNING AWARD
            </p>
          </div>
          {/* Third End  */}
          {/* Four Start  */}
          <div className="w-[23%] text-center ">
            <div className="flex justify-center items-center">
              <h1 className=" text-[50px] font-bold font-poppins ">10</h1>
              <span className="text-[50px] font-semibold font-poppins pl-2">
                +
              </span>
            </div>
            <p className="text-center text-gray-600 text-base font-medium  ">
              YEAR EXPERIENCE
            </p>
          </div>
          {/* Four End  */}
        </Flex>
      </Container>
    </section>
  );
};

export default CounterUp;
