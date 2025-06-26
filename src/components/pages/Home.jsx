import React from 'react'
import Header from '../layouts/Header'
import Banner from '../layouts/Banner'
import CounterUp from '../layouts/CounterUp'
import Service from '../layouts/Service'
import Graphic from '../layouts/Graphic'
import Brand from '../layouts/Brand'
import Protfolio from '../layouts/Protfolio'
import Clint from '../layouts/Clint'
import Interested from '../layouts/Interested'
import Footer from '../layouts/Footer'



const Home = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <CounterUp/>
    <Service/>
    <Graphic/>
    <Brand/>
    <Protfolio/>
    <Clint/>
    <Interested/>
    <Footer/>
    </>
  )
}

export default Home