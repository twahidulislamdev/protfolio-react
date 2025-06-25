import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import BrandImgOne from '../../assets/brandLogoOne.png'
import BrandImgTwo from '../../assets/brandLogoTwo.png'
import BrandImgThree from '../../assets/brandLogoThree.png'
import BrandImgFour from '../../assets/brandLogoFour.png'

const Brand = () => {
  return (
    <section className='pt-2 pb-[70px] '>
        <Container>
            <Flex className={"justify-between"}>
                {/* First Start  */}
                <div className="">
                    <Image imgSrc={BrandImgOne}/>
                </div>
                {/* First End  */}
                {/* Second Start  */}
                <div className="">
                    <Image imgSrc={BrandImgTwo}/>
                </div>
                {/* Second End  */}
                {/* Third Satrt  */}
                <div className="">
                    <Image imgSrc={BrandImgThree}/>
                </div>
                {/* Third End  */}
                {/* Four Satrt  */}
                <div className="">
                    <Image imgSrc={BrandImgFour}/>
                </div>
                {/* Four End  */}
            </Flex>
        </Container>
    </section>
  )
}

export default Brand