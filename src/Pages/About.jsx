import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import AboutUs from '../components/About/AboutUs'
import Footer from '../components/Footer/Footer'

export default function ABout() {
  return (
    <>
    <Navigation/>
    <AboutUs fullContent={true}/>
    <Footer/>
    </>
  )
}
