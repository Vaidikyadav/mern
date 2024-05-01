import React from 'react'
import Navbar from '../comp/Navbar'
import Footer from '../comp/Footer'
import Heroimage from '../comp/Heroimage'
import Form from '../comp/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage heading="CONTACT" text="Let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact