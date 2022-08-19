import React from 'react'
import { Container } from 'react-bootstrap'
import './footer.css'
import FormComponent from '../Form/FormComponent'
import SocIcons from '../SocIcons/SocIcons'
import Contact from '../Contact/Contact'

import { useTranslation } from 'react-i18next'

export default function Footer() {
   let [lang] = useTranslation();
   const style = {
      width: '90%',
      height: '500px',
      borderRadius: '20px'
   }
   return (
      <div className='footer'>
         <Container className='footerContainer d-flex flex-column align-items-center'>
            <h1 className='footerTitle' data-aos='fade-up'>{lang('form.title')}</h1>
            <FormComponent/>
            <Contact/>
            <iframe data-aos='fade-up' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1524.7084928769498!2d44.498734558138075!3d40.15526869583429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc145b5722b1%3A0x8982df3b4f13ab1a!2sExotarium%20Amazon!5e0!3m2!1sen!2s!4v1653322895451!5m2!1sen!2s" style={style} loading="lazy"></iframe>
            <SocIcons/>
         </Container>
      </div>
   )
}
