import React from 'react'
import './contact.css'

import { useTranslation } from 'react-i18next'

export default function Contact() {
   let [lang] = useTranslation()
   return (
      <div className="contact mb-2" data-aos='fade-up'>
         <a href="tel:+37441999777">{`${lang('contact.phone')}: 041-99-97-77`}</a>
         <a href="mailto:example@email.com">{`${lang('contact.mail')}: example@email.com`}</a>
         <a href="">{`${lang('contact.address')}: example 30/10`}</a>
      </div>
   )
}