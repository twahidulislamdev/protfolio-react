import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import ClintCard from "../ClintCard";

const Clint = () => {
  return (
    <section className="py-[50px]">
      <Container>
        <div className="">
          <Heading
            className={
              "text-center text-xl text-[#5E3BEE] font-medium font-poppins"
            }
            text={"TESTIMONY"}
            as={"h6"}
          />

          <Heading
            className={
              "text-center text-[40px] font-semibold font-poppins mt-2"
            }
            text={"What Our Clients Say."}
            as={"h3"}
          />

          <Heading
            className={
              "text-center text-lg text-gray-700 font-normal font-poppins w-2/4 m-auto mt-2"
            }
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl."
            }
            as={"p"}
          />
        </div>
        <div className="mt-15">
          <Flex className={"justify-between"}>
            <ClintCard
              clintReviewTxt={
                "Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui. Vestibulum nisl lorem, porta at mollis varius, tincidunt in lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna."
              }
              clintNameTxt={"Twaidul Islam"}
              clintPositionTxt={"Web Developer"}
            />
            <ClintCard
              clintReviewTxt={
                "Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui. Vestibulum nisl lorem, porta at mollis varius, tincidunt in lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna."
              }
              clintNameTxt={"Twaidul Islam"}
              clintPositionTxt={"Web Developer"}
            />
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Clint;
