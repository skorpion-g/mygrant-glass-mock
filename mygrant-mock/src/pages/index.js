import React, { useState } from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { infoSection1, infoSection2,  infoSection3} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...infoSection1}/>
      <InfoSection {...infoSection2}/>
      <Services />
      <InfoSection {...infoSection3}/>
      <Footer />
    </>
  )
}

export default Home
