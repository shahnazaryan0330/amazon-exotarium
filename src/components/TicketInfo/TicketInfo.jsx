import React from 'react'
import { Container} from 'react-bootstrap'
import Tablet from '../Tablet/Tablet'

import { useTranslation } from 'react-i18next'

export default function TicketInfo() {
  const [lang] = useTranslation()
  return (
    <Container id='ticketInfo' className='customContainer'>
       <Tablet title={lang('tablet.ticket')}/>
    </Container>
  )
}