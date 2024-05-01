import React from 'react'
import Navbar from '../comp/Navbar'
import HeroImg from '../comp/HeroImg'
import Workcard  from '../comp/WorkCard'
import Footer from '../comp/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Workcard/>
      <Footer/>
    </div>
  )
}

export default Home 