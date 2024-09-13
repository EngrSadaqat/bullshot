import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import hbcardlogo from "../assets/img/hbcardlogo.png"
import hbcardpata from "../assets/img/hbcardpata.png"
export default function HeaderBottom() {
    const hbcards = [
        {
            num: "#1",
            name: "SOLPAY",
            logo: hbcardlogo,
            percent: "341%",
            hbcardpata: hbcardpata,
            time: "1h"
        },
        {
            num: "#2",
            name: "SOLPAY",
            logo: hbcardlogo,
            percent: "341%",
            hbcardpata: hbcardpata,
            time: "1h"
        },
        {
            num: "#3",
            name: "SOLPAY",
            logo: hbcardlogo,
            percent: "341%",
            hbcardpata: hbcardpata,
            time: "1h"
        },
        {
            num: "#4",
            name: "SOLPAY",
            logo: hbcardlogo,
            percent: "341%",
            hbcardpata: hbcardpata,
            time: "1h"
        },
        {
            num: "#5",
            name: "SOLPAY",
            logo: hbcardlogo,
            percent: "341%",
            hbcardpata: hbcardpata,
            time: "1h"
        },
        {
            num: "#6",
            name: "SOLPAY",
            logo: hbcardlogo,
            percent: "341%",
            hbcardpata: hbcardpata,
            time: "1h"
        },
        {
            num: "#7",
            name: "SOLPAY",
            logo: hbcardlogo,
            percent: "341%",
            hbcardpata: hbcardpata,
            time: "1h"
        },
    ]
    return (
        <div className='header-bottom'>
            <Container>
                <Row>
                    <Col>
                        <div className="header-bottom-cards d-flex align-items-center gap-4 overflow-auto">
                            {hbcards.map((item, index) => (
                                <div className="single-item d-flex align-items-center gap-2" key={index}>
                                    <span className='nav_number'>{item.num}</span>
                                    <p className='left-title'>{item.name}</p>
                                    <img className='item-images' src={item.logo} alt="" />
                                    <span className='item-percentes'>{item.percent}</span>
                                    <p className='d-flex align-items-center item-leaf'><span className='pata'><img src={item.hbcardpata} alt="" /></span> {item.time}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
