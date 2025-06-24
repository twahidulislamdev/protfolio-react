import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Button from "../Button";
import Image from "../Image";
import MyImg from "../../assets/myImg.jpg";
import { LuMail } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import Heading from "../Heading";



const Banner = () => {
  return (
    <section className="py-[50px] bg-neutral-100 ">
      <Container>
        <Flex className={"justify-between"}>
          <div className="">
            <Heading className={"text-xl text-[#5E3BEE] font-medium font-poppins"} text={"Twahidul Islam"} as={"h4"} />
            <Heading className={"text-[60px] font-bold w-2/3 font-poppins"} text={"Hello, my name’s Twahidul. I’m Web Developer."} as={"h1"} />

            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            {/* <p className="text-xl text-[#5E3BEE] font-medium font-poppins ">
              Twahidul Islam
            </p> */}
            {/* <h1 className="text-[60px] font-bold w-2/3 font-poppins">
              Hello, my name’s Twahidul. I’m Web Developer.
            </h1> */}
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            
            <Flex>
              <Button
                className={
                  "flex items-center gap-x-2 mt-5 bg-[#5E3BEE] py-4 px-5 text-base font-medium font-poppins rounded-2xl text-white uppercase hover:bg-black duration-300 delay-200 hover:cursor-pointer"
                }
                btnTxt={
                  <>
                    CONTACT ME <LuMail />
                  </>
                }
              />
              <Button
                className={
                  "flex items-center gap-x-2 mt-5 ml-5  py-4 px-5 text-base font-medium font-poppins rounded-2xl text-Black uppercase hover:text-white hover:bg-black duration-300 delay-200 hover:cursor-pointer  border-2 border-gray-300"
                }
                btnTxt={
                  <>
                    <FiDownload /> DOWNLOAD CV
                  </>
                }
              />
            </Flex>
          </div>
          <div className="mt-10">
            <Image
              className={"w-[730px] h-[480px] rounded-[50%]"}
              imgSrc={MyImg}
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
