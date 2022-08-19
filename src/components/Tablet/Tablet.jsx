import React from 'react'
import './Tablet.css'

export default function Tablet(props) {
  let { title } = props;

  return (
    <div data-aos='flip-left' className={`tablet`} >
      {title}
    </div>
  )
}