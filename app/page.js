import React from 'react'
// import Navbar from './components/Navbar'

import Hero from './components/Hero'
import Product from './components/Product'
import PricingPage from './components/PricingPage'

import ScrollingMarquee from './components/ScrollingMarquee'
import MedicalProductGrid from './components/MedicalProductGrid'



export default function page() {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Product/>
      <ScrollingMarquee/>
      <PricingPage/>
      <MedicalProductGrid/>
      
    </div>
  )
}
