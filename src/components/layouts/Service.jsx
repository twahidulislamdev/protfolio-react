import React from "react";
import Card from "../Card";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";

const Service = () => {
  const svg1 = `<svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="15" cy="27" r="15" fill="#F1F0FB"/>
  <path d="M21.125 4.50004C21.6571 4.07403 22.3184 3.84192 23 3.84192C23.6816 3.84192 24.3429 4.07403 24.875 4.50004L36.32 13.6545C36.8102 14.0466 37.165 14.5826 37.3345 15.187C37.5041 15.7914 37.4797 16.4337 37.265 17.0235L32.7185 29.5245C32.5081 30.1035 32.1246 30.6037 31.6201 30.9571C31.1156 31.3106 30.5145 31.5001 29.8985 31.5H16.1015C15.4855 31.5001 14.8844 31.3106 14.3799 30.9571C13.8754 30.6037 13.4919 30.1035 13.2815 29.5245L8.7365 17.0235C8.52176 16.4337 8.49744 15.7914 8.66696 15.187C8.83649 14.5826 9.19132 14.0466 9.6815 13.6545L21.125 4.50004Z" stroke="#5E3BEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  const svg2 = `
<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="26" r="15" fill="#F1F0FB"/>
<path d="M21.5435 3.80997C21.9891 3.56253 22.4903 3.43268 23 3.43268C23.5097 3.43268 24.0109 3.56253 24.4565 3.80997L35.729 10.071C35.9627 10.2009 36.1574 10.391 36.293 10.6215C36.4285 10.852 36.5 11.1146 36.5 11.382V23.7345C36.4999 24.2694 36.3567 24.7946 36.0853 25.2557C35.8139 25.7167 35.4242 26.0967 34.9565 26.3565L24.4565 32.1915C24.0109 32.4389 23.5097 32.5688 23 32.5688C22.4903 32.5688 21.9891 32.4389 21.5435 32.1915L11.0435 26.3565C10.576 26.0969 10.1864 25.717 9.91507 25.2563C9.6437 24.7956 9.50039 24.2707 9.5 23.736V11.382C9.49999 11.1146 9.57146 10.852 9.70702 10.6215C9.84258 10.391 10.0373 10.2009 10.271 10.071L21.545 3.80997H21.5435Z" stroke="#5E3BEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 18V32.25M9.5 10.5L23 18L9.5 10.5ZM23 18L36.5 10.5L23 18Z" stroke="#5E3BEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 14.25L29.75 6.75" stroke="#5E3BEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 18.492L18.5 21" stroke="#5E3BEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  const svg3 = `
<svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="28" r="15" fill="#F1F0FB"/>
<path d="M37.8855 16.443C38.5965 17.373 38.5965 18.6285 37.8855 19.557C35.646 22.4805 30.273 28.5 24 28.5C17.727 28.5 12.354 22.4805 10.1145 19.557C9.76859 19.1117 9.58081 18.5639 9.58081 18C9.58081 17.4361 9.76859 16.8883 10.1145 16.443C12.354 13.5195 17.727 7.5 24 7.5C30.273 7.5 35.646 13.5195 37.8855 16.443V16.443Z" stroke="#5E3BEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 22.5C26.4853 22.5 28.5 20.4853 28.5 18C28.5 15.5147 26.4853 13.5 24 13.5C21.5147 13.5 19.5 15.5147 19.5 18C19.5 20.4853 21.5147 22.5 24 22.5Z" stroke="#5E3BEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  return (
    <section className="py-20 bg-gray-100">
      <Container>
        <div className="">
          {/* <p className="text-center text-xl text-[#5E3BEE] font-medium font-poppins">SERVICE</p> */}
          {/* <h3 className="text-center text-[40px] font-semibold font-poppins mt-2">What I Do For My Customer.</h3> */}

          {/* <h6 className="text-center text-lg text-[#121212] font-normal font-poppins w-2/4 m-auto mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</h6> */}

          <Heading
            className={
              "text-center text-xl text-[#5E3BEE] font-medium font-poppins"
            }
            text={"SERVICE"}
            as={"p"}
          />

          <Heading
            className={
              "text-center text-[40px] font-semibold font-poppins mt-2"
            }
            text={"What I Do For My Customer."}
            as={"h3"}
          />

          <Heading
            className={
              "text-center text-lg text-[#121212] font-normal font-poppins w-2/4 m-auto mt-2"
            }
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl."
            }
            as={"h6"}
          />
        </div>
        <div className="mt-15">
          <Flex className={"justify-between"}>
            <Card
              svg={svg1}
              title="UI/UX Design"
              description="Lorem ipsum dolor sit amet consectetur adi pising leo"
            />
            <Card
              svg={svg2}
              title="Product Design"
              description="Lorem ipsum dolor sit amet consectetur adi pising leo"
            />
            <Card
              svg={svg3}
              title={"Motion Graphics"}
              description="Lorem ipsum dolor sit amet consectetur adi pising leo"
            />
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Service;
