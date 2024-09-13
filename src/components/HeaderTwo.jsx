import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import share from "../assets/img/shareicon.svg"
import flag from "../assets/img/flagicon.svg"
import brifcase from "../assets/img/brifcaseicon.svg"
import lordwif from "../assets/img/lordwificon.svg"
import { Link } from 'react-router-dom'
import Logo from './Logo'
export default function HeaderTwo() {
  return (
    <div className='headertwo'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
          <Logo />
            <ul className="breadcamp d-flex align-items-center gap-2 justify-content-center justify-content-md-start mb-3 mb-md-0 d-none">
              <li className='bradcamp-item'><Link to="/">Home</Link></li>
              <li className='bradcamp-item'><Link><span>/</span> Promoted</Link></li>
              <li className='bradcamp-item active'><Link><span>/</span> <img src={lordwif} alt="" /></Link></li>
            </ul>
          </Col>
          <Col md={6} className='text-center text-md-end'>
            <div className="headertop-right">
              <a href="/"><img src={share} alt="" /></a>
              <a href="/"><img src={flag} alt="" /></a>
              <a href="/"><img src={brifcase} alt="" />Update Project</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
