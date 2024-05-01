import React from 'react'
import Navbar from '../comp/Navbar'
import Footer from '../comp/Footer'
import Heroimage from '../comp/Heroimage'
import AboutContent from '../comp/AboutContent'
const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage heading="ABOUT" text="I'm a friendly Mern Stack Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About