import React from 'react'
import './stickLogo.css'
import Logo from './logo.png'

export default function StickLogo() {
  return (
       <a className='stickLogo' href="#"><img src={Logo} alt="logo" /></a>
  )
}
