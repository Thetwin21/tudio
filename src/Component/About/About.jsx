import React from 'react'
import Navbar from '../Navbar'
import AboutText from './AboutText'
import AboutImg from './AboutImg'
import Services from './Services'
import Join from '../Join'
import Footer from '../Footer'

const About = () => {
  return (
    <div className='w-full flex flex-col overflow-x-hidden items-center'>
        <Navbar />
        <AboutText />
        <AboutImg />
        <Services />
        <Footer />
    </div>
  )
}

export default About