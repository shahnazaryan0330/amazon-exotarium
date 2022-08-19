import React from 'react'
import {Link} from 'react-router-dom'
import './customButton.css'

export default function CustomButton(props) {
  let { btnWhite, btnName, link } = props

  return (

    <div data-aos='fade-up'>
      <Link id='customBtn' className={btnWhite === 'true' ? 'btnVar1' : 'btnVar2'} to={link}>{btnName} </Link>
    </div>

  )
}
