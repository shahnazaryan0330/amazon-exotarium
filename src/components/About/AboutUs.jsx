import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Tablet from '../Tablet/Tablet'
import CustomButton from '../CustomButton/CustomButton'

import { useTranslation } from 'react-i18next'

export default function AboutUs(props) {
  let [lang] = useTranslation();
  let [content, setContent] = useState(props.fullContent)
  let fullContent = lang('aboutUs.content');
  let halfContent = fullContent.split(' ').slice(0, 44).join(" ");
  return (
      <Container className='customContainer mt-5'>
        <Tablet title={lang('tablet.aboutUs')}/>

        <p className='text-content mt-5' data-aos='fade-up'>
          {content ? fullContent : `${halfContent}...`}
        </p>

        {!content && <CustomButton btnName={lang('customBtn.knowMore')} link='/about' data-aos='fade-up'/>}
      </Container>
  )
}