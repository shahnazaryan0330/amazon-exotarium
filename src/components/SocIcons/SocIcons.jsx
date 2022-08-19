import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './socicons.css'

export default function SocIcons() {
   return (
      <div className='socIcons mt-5 mb-3'>
         <a className='iconBg' href='https://www.tiktok.com/@amazonexotarium?is_from_webapp=1&sender_device=pc' target="_blank">
            <FontAwesomeIcon icon={faTiktok} className='icon' />
         </a>
         <a className='iconBg' href="https://www.facebook.com/exotarium.am" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} className='icon' />
         </a>
         <a className='iconBg' href="https://www.instagram.com/exotarium.amazon/?hl=en" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className='icon' />
         </a>
         <a className='iconBg' href="https://www.youtube.com/channel/UCSEwud87ZuIqT5BtyuoqYNA" target="_blank">
            <FontAwesomeIcon icon={faYoutube} className='icon' />
         </a>
      </div>
   )
}
