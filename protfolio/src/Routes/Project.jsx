import React from 'react'
import Navbar from '../comp/Navbar'
import Footer from '../comp/Footer'
import Heroimage from '../comp/Heroimage'
import PricingCard from '../comp/PricingCard'
import WorkCard from '../comp/WorkCard'

const Project = () => {
  return (
    <div>
     <Navbar />
     <Heroimage heading="PROJECT" text="some of my most recents projects."/>
     <WorkCard/>
     <PricingCard/>
      <Footer/>
    </div>

  )
}

export default Project