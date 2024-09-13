import { Container, Row, Col } from 'react-bootstrap'
import s1 from "../assets/img/scrollimg/1.png"
import s2 from "../assets/img/scrollimg/2.png"
import s3 from "../assets/img/scrollimg/3.png"
import s4 from "../assets/img/scrollimg/4.png"
import s5 from "../assets/img/scrollimg/5.png"
import s6 from "../assets/img/scrollimg/6.png"
import s7 from "../assets/img/scrollimg/7.png"
import s8 from "../assets/img/scrollimg/8.png"
import { useEffect, useRef } from 'react'
export default function HeaderBottom() {

  const scrollcards = [
    {
      title: " SOLPAY",
      img: s1
    },
    {
      title: " Solwif",
      img: s2
    },
    {
      title: " DogeX",
      img: s3
    },
    {
      title: " Golden Inu",
      img: s4
    },
    {
      title: " BOOBZ",
      img: s5
    },
    {
      title: " Zena",
      img: s6
    },
    {
      title: " AI TradeX",
      img: s7
    },
    {
      title: "MOCHI",
      img: s8
    },
    {
      title: "MOCHI",
      img: s8
    },
    {
      title: "MOCHI",
      img: s8
    },
    {
      title: "MOCHI",
      img: s8
    },
    {
      title: "MOCHI",
      img: s8
    },
    {
      title: "MOCHI",
      img: s8
    },
    {
      title: "MOCHI",
      img: s8
    },
    {
      title: "MOCHI",
      img: s8
    },
    {
      title: "MOCHI",
      img: s8
    },
    {
      title: "MOCHI",
      img: s8
    },
    {
      title: "MOCHI",
      img: s8
    },
    {
      title: "MOCHI",
      img: s8
    },
    {
      title: "MOCHI",
      img: s8
    },
    {
      title: "MOCHI",
      img: s8
    },
  ]

  return (
    <div className='header-bottom'>
      <div className="header-bottom-area d-flex align-items-center gap-4 me-1 overflow-auto">
        <p className='d-flex align-items-center gap-2 fw-bold first-title'>
          <div className="trading-animation">
            <div className="animation"></div>
          </div>
          Trending
        </p>
        <Row>
          <Col>
            <div className="header-bottom-card d-flex align-items-center gap-4">
              {scrollcards.map((item, index) => (
                <div className="single-item d-flex align-items-center gap-2" key={index}>
                  <span className='fw-medium d-flex justify-content-center align-items-center'>#{index + 1}</span>
                  <p>{item.title}</p>
                  <img src={item.img} alt="" />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
