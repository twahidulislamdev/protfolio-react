import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Button from "../Button";
import { LuMail } from "react-icons/lu";

const Interested = () => {
  return (
    <section className="">
      <Container
        className={"bg-[url(../../src/assets/interested.png)] py-[80px] "}
      >
        <Heading
          className={
            "w-2/5 text-center text-[40px] font-semibold font-poppins mt-2 m-auto"
          }
          text={`Interested Working With me? Let's connect!`}
          as={"h3"}
        />
        <Button
          className={
            "flex justify-center items-center m-auto gap-x-2 mt-5 bg-[#5E3BEE] py-4 px-5 text-base font-medium font-poppins rounded-2xl text-white uppercase hover:bg-black duration-300 delay-200 hover:cursor-pointer"
          }
          btnTxt={
            <>
              CONTACT ME <LuMail />
            </>
          }
        />
      </Container>
    </section>
  );
};

export default Interested;
