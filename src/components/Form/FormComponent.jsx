import React from 'react'
import Form from 'react-bootstrap/Form'

import { useTranslation } from 'react-i18next'

export default function FormComponent() {
  let [lang] = useTranslation()
  return (
    <Form style={{ width: '350px' }}>
      <Form.Group data-aos='fade-up' className='mb-3' controlId="formBasicname">
        <Form.Control type="text" placeholder={lang('form.name')} />
      </Form.Group>
      {/*  */}
      <Form.Group data-aos='fade-up' className='mb-3' controlId="formBasicEmail">
        <Form.Control type="email" placeholder={lang('form.mail')} />
      </Form.Group>
      {/*  */}
      <Form.Group data-aos='fade-up' className='mb-3' controlId="formBasicTel">
        <Form.Control type="tel" placeholder={lang('form.phone')} />
      </Form.Group>
      {/*  */}
      <Form.Group data-aos='fade-up' className='mb-3' controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} style={{resize: 'none'}} placeholder={lang('form.message')} />
      </Form.Group>
    </Form>
  )
}
