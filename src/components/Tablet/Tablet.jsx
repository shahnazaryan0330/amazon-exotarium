import React from 'react'
import './Tablet.css'

export default function Tablet(props) {
  let { title } = props;

  return (
    <div className={`tablet`}>
      {title}
    </div>
  )
}