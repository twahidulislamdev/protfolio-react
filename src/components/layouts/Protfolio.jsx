import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import ProtfolioCard from "../ProtfolioCard";
import ProtfolioImgOne from "../../assets/protfolioImgOne.png"
import ProtfolioImgTwo from "../../assets/protfolioImgTwo.png"
import ProtfolioImgThree from "../../assets/protfolioImgThree.png"
import ProtfolioImgFour from "../../assets/protfolioImgFour.png"

const Protfolio = () => {
  return (
    <section className="py-[50px] bg-neutral-100">
      <Container>
        <Flex className={"justify-between"}>
          <div className="">
            <Heading
              className={"text-xl text-[#5E3BEE] font-medium font-poppins"}
              text={"PORTFOLIO"}
              as={"h6"}
            />
            <Heading
              className={"text-[40px] font-semibold font-poppins mt-2"}
              text={"Selected Works."}
              as={"h3"}
            />
          </div>
          <Heading
            className={
              "text-lg text-[#121212] font-normal font-poppins w-1/2  mt-2"
            }
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl."
            }
            as={"p"}
          />
        </Flex>

        <div className="mt-15 ">
          <Flex className={"justify-between flex-wrap  gap-y-15 "}>
            <ProtfolioCard
              imageSrc={ProtfolioImgOne}
              titleTxt={"Creativa - Elementor Template Kit"}
              paraTxt={"Web Site Design"}
            />
            <ProtfolioCard
              imageSrc={ProtfolioImgTwo}
              titleTxt={"Nusapp - Elementor Template Kit"}
              paraTxt={"Web Site Design"}
            />
            <ProtfolioCard
              imageSrc={ProtfolioImgThree}
              titleTxt={"Webina - Elementor Template Kit"}
              paraTxt={"Web Site Design"}
            />
            <ProtfolioCard
              imageSrc={ProtfolioImgFour}
              titleTxt={"Marketin - Elementor Template Kit"}
              paraTxt={"Web Site Design"}
            />
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Protfolio;
