import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Button from "../Button";
import { LuMail } from "react-icons/lu";

const Graphic = () => {
  return (
    <section className="py-[100px]">
      <Container>
        <Heading
          className={"text-xl text-[#5E3BEE] font-medium font-poppins"}
          text={"GRAPHIC DESIGNER"}
          as={"h6"}
        />
        <Heading
          className={"text-[40px] font-semibold font-poppins mt-2 w-2/5"}
          text={"Graphic Designer With 10 Years Of Experience."}
          as={"h3"}
        />
        <Heading
          className={
            "text-lg text-gray-700 font-normal font-poppins w-2/5 mt-2"
          }
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl."
          }
          as={"p"}
        />
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
      </Container>
      
    </section>
  );
};

export default Graphic;
