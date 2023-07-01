import React from 'react'
import Navbar from '../Navbar'
import ContactContext from './ContactContext'
import Footer from '../Footer'

const Contact = () => {
  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      <ContactContext />
      <Footer />
    </div>
  )
}

export default Contact