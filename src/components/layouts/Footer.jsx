import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import FooterMainLogo from "../../assets/footerMainLogo.png";
import Heading from "../Heading";
import { LuMail } from "react-icons/lu";
import {
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import Menu from "../Menu";

const Footer = () => {
  return (
    <section className="mt-15">
      <Container className={"bg-[#333333] py-[50px] px-20 rounded-t-xl"}>
        <Flex className={"justify-between border-b-2 border-gray-200 pb-10"}>
          <div className="">
            <img src={FooterMainLogo} alt={"Footer Main Logo"} />
            <Heading
              className={
                "text-lg text-white font-normal font-poppins w-1/2  mt-5"
              }
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit."
              }
              as={"p"}
            />
          </div>
          <div className="">
            <Flex className={"gap-x-3"}>
              <LuMail className="text-white font-poppins text-lg" />
              <p className="text-white font-poppins text-lg">twahid746@gmail.com</p>
            </Flex>
            <Flex className={"gap-x-3 my-5"}>
              <FaPhoneAlt className="text-white font-poppins text-lg" />
              <p className="text-white font-poppins text-lg">01886001915</p>
            </Flex>
            <Flex className={"gap-x-5"}>
              <FaFacebook className="text-white text-3xl" />
              <FaInstagram className="text-white text-3xl" />
              <FaLinkedinIn className="text-white text-3xl" />
              <IoBasketballOutline className="text-white text-3xl" />
            </Flex>
          </div>
        </Flex>
        <Flex className={"justify-between"}>
            <div className="mt-15">
              <Menu className={"flex gap-x-10"}>
                <li className="text-base text-white font-medium hover:text-[#5E3BEE] hover:cursor-pointer uppercase font-poppins duration-300 delay-200 ">
                  Home
                </li>
                <li className="text-base text-white font-medium hover:text-[#5E3BEE] hover:cursor-pointer uppercase font-poppins duration-300 delay-200 ">
                  About
                </li>
                <li className="text-base text-white font-medium  hover:text-[#5E3BEE] hover:cursor-pointer uppercase font-poppins duration-300 delay-200 ">
                  Service
                </li>
                <li className="text-base text-white font-medium hover:text-[#5E3BEE] hover:cursor-pointer uppercase font-poppins duration-300 delay-200 ">
                  Contact
                </li>
              </Menu>
            </div>
            <p className="text-white text-lg font-medium font-poppins mt-15">© All Right Reserved</p>
        </Flex>
        
      </Container>
    </section>
  );
};

export default Footer;
