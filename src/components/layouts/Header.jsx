import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import HeaderLogo from "../../assets/Logo.png";
import Menu from "../Menu";
import Button from "../Button";
import { LuMail } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <section className="my-[15px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Image className={"w-[160px]"} imgSrc={HeaderLogo} />
            </div>
            <div className="">
              <Menu className={"flex gap-x-10"}>
                <li className="text-lg font-medium hover:text-[#5E3BEE] hover:cursor-pointer uppercase font-poppins duration-300 delay-200 ">
                  Home
                </li>
                <li className="text-lg font-medium hover:text-[#5E3BEE] hover:cursor-pointer uppercase font-poppins duration-300 delay-200 ">
                  About
                </li>
                <li className="text-lg font-medium  hover:text-[#5E3BEE] hover:cursor-pointer uppercase font-poppins duration-300 delay-200 ">
                  Service
                </li>
                <li className="text-lg font-medium hover:text-[#5E3BEE] hover:cursor-pointer uppercase font-poppins duration-300 delay-200 ">
                  Contact
                </li>
              </Menu>
            </div>
            <Button
              className={
                "flex items-center gap-x-2 bg-[#5E3BEE] py-3 px-5 text-base font-medium font-poppins rounded-2xl text-white uppercase hover:bg-black duration-300 delay-200 hover:cursor-pointer"
              }
              btnTxt={
                <>
                  Hire Me <LuMail />
                </>
              }
            />
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Header;
