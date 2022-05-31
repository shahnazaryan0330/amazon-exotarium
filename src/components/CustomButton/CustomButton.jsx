import React from 'react'
import './customButton.css'

export default function CustomButton(props) {
  let { btnWhite, btnName, link } = props

  return (

    <a id='customBtn' className={btnWhite === 'true' ? 'btnVar1' : 'btnVar2'} href={link}>{btnName} </a>

  )
}
