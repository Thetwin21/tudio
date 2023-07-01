import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import WorkText from './WorkText'

const Work = () => {
  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      <WorkText />
      <Footer />
    </div>
  )
}

export default Work