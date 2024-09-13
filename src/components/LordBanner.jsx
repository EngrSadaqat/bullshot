import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import lordbannerimg from '../assets/img/lordbannerimg.png'
export default function LordBanner() {
  return (
    <div className='lordbanner'>
        <Container>
            <Row>
                <Col>
                    <img className='w-100 pt-4 mt-1' src={lordbannerimg} alt="" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
