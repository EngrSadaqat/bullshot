import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {FaGlobe, FaTelegramPlane, FaRegBell, FaTwitter} from "react-icons/fa";
import {FaXTwitter, FaArrowRightArrowLeft} from "react-icons/fa6";
import {IoIosStarOutline} from "react-icons/io";
import avater from '../assets/img/lordavater.png';
import copy from '../assets/img/copy.svg'
import greenleaf from '../assets/img/greenleaf.svg'
import fire from '../assets/img/fire.svg'
import sicon1 from '../assets/img/lordsocial-icon1.svg'
import sicon2 from '../assets/img/lordsocial-icon2.svg'
import avater2 from '../assets/img/catdog-avater.png'
import charticon from '../assets/img/charticon.svg'
import solicon from '../assets/img/solicon.svg'
import {Container, Row, Tab, Nav} from 'react-bootstrap';
import brifcase from "../assets/img/brifcaseicon.svg"

import walletitemimg1 from "../assets/img/walletitemimg1.svg"
import walletitemimg2 from "../assets/img/walletitemimg2.svg"
import walletitemimg3 from "../assets/img/walletitemimg3.svg"

import Chartwtable from './Chartwtable';
import {Link, useParams} from "react-router-dom";
import axios from "axios";



import Chatv2 from "./Chatv2.jsx";

export default function Lordmaincontent({token, shortAccount, buyToken, price, data}) {
    const socialitems = [
        {
            icon: sicon1,
            url: "/",

        },
        {
            icon: sicon2,
            url: "/",
        },
    ];
    const lordprsoprgrs = 60;


    const priceboxs = [
        {
            title: "Price",
            value: price,
        },
        {
            title: "Price USD",
            value: "$0.0006136",
        },
        {
            title: "Price USD",
            value: "$0.0006136",
        },
        {
            title: "Price USD",
            value: "$0.0006136",
        },
    ];
    const catdogsocials = [
        {
            url: "/",
            icon: <FaGlobe/>,
        },
        {
            url: "/",
            icon: <FaTelegramPlane/>,
        },
        {
            url: "/",
            icon: <FaXTwitter/>,
        },
    ];


    const [value, setValue] = useState(0.1);
    const handleSpanClick = (newValue) => {
        setValue(newValue);
    };

    const [valuetwo, setValuetwo] = useState(0.1);
    const handleSpantwoClick = (newValue) => {
        setValuetwo(newValue);
    };


    const [show, setShow] = useState(false);
    const walletHandleClose = () => setShow(false);
    const wallethandleShow = () => setShow(true);

    const wsitems = [
        {
            img: walletitemimg1,
            txt: "MetaMask",
        },
        {
            img: walletitemimg2,
            txt: "Wallet Connect",
        },
        {
            img: walletitemimg3,
            txt: "MetaMask",
        },
    ];

    return (
        <div className='lordmain pt-4 mt-1'>
            <Container>
                <div className="lordmain-profile d-flex align-items-start gap-4">
                    <div className='left d-flex gap-4'>
                        <div className="lordmain-solbox lordbox">
                            <div
                                className="avater-info d-flex flex-wrap gap-3 align-items-center justify-content-between">
                                <div className='d-flex align-items-end'>
                                    <img className='avator-img' src={avater} alt=""/>
                                    <div>
                                        <div className='d-flex align-items-center avater-title'>
                                            <h4 className='mb-0'>
                                                {/*<img className='me-3 ms-2' src={copy} alt="" /> */}
                                                <span className='me-2'>{token.name} / ETH</span></h4>
                                            <p><img src={greenleaf} alt=""/> {token.date}
                                                {/*<span className='fireitem ms-2'>*/}
                                                {/*    <img src={fire} alt=""/> 1h*/}
                                                {/*</span>*/}
                                            </p>
                                        </div>
                                        <div
                                            className='avater-progress d-flex align-items-center justify-content-between'>
                                            <span className='avator-count-1'>36.26K</span>
                                            <span className='avator-count-2'>36.26K</span>
                                        </div>
                                        <ProgressBar now={lordprsoprgrs} label={`${lordprsoprgrs}%`} visuallyHidden/>
                                    </div>
                                </div>
                                {/*<div className='social'>*/}

                                {/*{token.twitter && (*/}
                                {/*    <Link to={token.twitter} key="telegram">*/}
                                {/*        <FaTwitter />*/}
                                {/*    </Link>*/}
                                {/*)}*/}

                                {/*    {socialitems.map((item, index) => (*/}
                                {/*        <a href={item.url} key={index}><img src={item.icon} alt="" /></a>*/}
                                {/*    ))}*/}
                                {/*</div>*/}
                            </div>
                            <div className="webitems d-flex justify-content-center align-items-center pt-4 mt-2">
                                {/*{webitems.map((item, index) => (*/}
                                {/*    <a href={item.url} key={index}>{item.icon}{item.webtxt}</a>*/}
                                {/*))}*/}
                                {token.twitter && (
                                    <a href={token.twitter}><FaXTwitter/>{token.twitter}</a>
                                )}


                                {token.telegram && (
                                    <a href={token.telegram}><FaTelegramPlane/>{token.telegram}</a>
                                )}


                                {token.website && (
                                    <a href={token.website}><FaGlobe/>{token.website}</a>
                                )}

                            </div>
                            <div className="webitems-price d-flex align-items-center">
                                {priceboxs.map((item, index) => (
                                    <div className="single-item" key={index}>
                                        <h5>{item.title}</h5>
                                        <span>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/*<div className="lordmain-watchlist lordbox">*/}
                        {/*    <div className="alert-box">*/}
                        {/*        <div className='d-flex align-items-center'>*/}
                        {/*            <a href="#" className='me-3'><IoIosStarOutline />Watchlist</a>*/}
                        {/*            <a href="#"><FaRegBell />Alerts</a>*/}
                        {/*        </div>*/}
                        {/*        <a href="" className='mt-3'><FaArrowRightArrowLeft /> Trade on Raydium</a>*/}
                        {/*    </div>*/}
                        {/*    <div className="add-wrap mt-4">*/}
                        {/*        <div className="ads-box position-relative">*/}
                        {/*            <span className='ads position-absolute'>ad</span>*/}
                        {/*            <div className="catdog-profile d-flex justify-content-center align-items-center">*/}
                        {/*                <div className="catdog-avater">*/}
                        {/*                    <img src={avater2} alt="" />*/}
                        {/*                </div>*/}
                        {/*                <div>*/}
                        {/*                    <h4 className='mb-0'>CATDOG</h4>*/}
                        {/*                    <p>It’s time to end the cat vs. dog war in crypto. that’s waht scatdog is heare for.</p>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="chart-with-socials mt-4">*/}
                        {/*            <a href="#"> <img src={charticon} alt="" /> Chart</a>*/}
                        {/*            {catdogsocials.map((item, index) => (*/}
                        {/*                <a href={item.url} key={index}>{item.icon}</a>*/}
                        {/*            ))}*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="connect-wallet lordbox">
                        <Tab.Container defaultActiveKey="first">
                            <Row>
                                <div className="table-area">
                                    <Nav className="tab-navs d-flex">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                <span>BUY</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                                                Sell
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="sol-box">
                                                <div className="top d-flex align-items-center justify-content-between">
                                                    <div className='d-flex align-items-center '>
                                                        <p><img src={solicon} alt=""/>SOL </p>
                                                        <input type="number" id='amount-eth'
                                                               className='value input-transacation'/>
                                                    </div>
                                                    <a href='#' className='doularrow'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                             viewBox="0 0 12 12" fill="none">
                                                            <path
                                                                d="M9.93707 6.9375H1.78199C1.73043 6.9375 1.68824 6.97969 1.68824 7.03125V7.73438C1.68824 7.78594 1.73043 7.82812 1.78199 7.82812H8.87418L7.18316 9.97266C7.13511 10.0336 7.17847 10.125 7.25699 10.125H8.1066C8.16402 10.125 8.21793 10.0992 8.25425 10.0535L10.2324 7.54453C10.4257 7.29844 10.2511 6.9375 9.93707 6.9375ZM10.2195 4.17188H3.1273L4.81832 2.02734C4.86636 1.96641 4.823 1.875 4.74449 1.875H3.89488C3.83746 1.875 3.78355 1.90078 3.74722 1.94648L1.7691 4.45547C1.57574 4.70156 1.75035 5.0625 2.06324 5.0625H10.2195C10.2711 5.0625 10.3132 5.02031 10.3132 4.96875V4.26562C10.3132 4.21406 10.2711 4.17188 10.2195 4.17188Z"
                                                                fill="white"/>
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div className="numvalue d-flex align-items-center">
                                                    <span onClick={() => handleSpanClick(0.1)}>0.1</span>
                                                    <span onClick={() => handleSpanClick(0.25)}>0.25</span>
                                                    <span onClick={() => handleSpanClick(0.5)}>0.5</span>
                                                    <span onClick={() => handleSpanClick(1)}>1</span>
                                                    <span onClick={() => handleSpanClick(2)}>2</span>
                                                    <span onClick={() => handleSpanClick(5)}>5</span>
                                                </div>
                                            </div>
                                            <div className="sol-box">
                                                <div className="top d-flex align-items-center justify-content-between">
                                                    <div className='d-flex align-items-center '>
                                                        <p className='slippage'>Slippage </p>
                                                        <span>{valuetwo}</span>
                                                    </div>
                                                </div>
                                                <div className="numvalue d-flex align-items-center">
                                                    <span onClick={() => handleSpantwoClick(0.1)}>0.1</span>
                                                    <span onClick={() => handleSpantwoClick(0.25)}>0.25</span>
                                                    <span onClick={() => handleSpantwoClick(0.5)}>0.5</span>
                                                    <span onClick={() => handleSpantwoClick(1)}>1</span>
                                                    <span onClick={() => handleSpantwoClick(2)}>2</span>
                                                    <span onClick={() => handleSpantwoClick(5)}>5</span>
                                                </div>
                                            </div>

                                            {shortAccount ? (
                                                <div className="connect-wallet-btn">
                                                    <a href="javascript:void(0)" className='btn' onClick={buyToken}>
                                                        <img
                                                            src={brifcase} alt=""/> Buy</a>
                                                    <p>You receive min. <strong>{value}</strong> CHIMPE</p>
                                                </div>

                                            ) : (
                                                <div className="connect-wallet-btn">
                                                    <a href="#" className='btn' onClick={wallethandleShow}> <img
                                                        src={brifcase} alt=""/> Connect Wallet</a>
                                                    <p>You receive min. <strong>{value}</strong> CHIMPE</p>
                                                </div>
                                            )}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="sol-box">
                                                <div className="top d-flex align-items-center justify-content-between">
                                                    <div className='d-flex align-items-center '>
                                                        <p><img src={solicon} alt=""/>SOL </p>
                                                        <span>0.1</span>
                                                    </div>
                                                    <a href='#' className='doularrow'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                             viewBox="0 0 12 12" fill="none">
                                                            <path
                                                                d="M9.93707 6.9375H1.78199C1.73043 6.9375 1.68824 6.97969 1.68824 7.03125V7.73438C1.68824 7.78594 1.73043 7.82812 1.78199 7.82812H8.87418L7.18316 9.97266C7.13511 10.0336 7.17847 10.125 7.25699 10.125H8.1066C8.16402 10.125 8.21793 10.0992 8.25425 10.0535L10.2324 7.54453C10.4257 7.29844 10.2511 6.9375 9.93707 6.9375ZM10.2195 4.17188H3.1273L4.81832 2.02734C4.86636 1.96641 4.823 1.875 4.74449 1.875H3.89488C3.83746 1.875 3.78355 1.90078 3.74722 1.94648L1.7691 4.45547C1.57574 4.70156 1.75035 5.0625 2.06324 5.0625H10.2195C10.2711 5.0625 10.3132 5.02031 10.3132 4.96875V4.26562C10.3132 4.21406 10.2711 4.17188 10.2195 4.17188Z"
                                                                fill="white"/>
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div className="numvalue d-flex align-items-center">
                                                    <span>0.1</span>
                                                    <span>0.25</span>
                                                    <span>0.5</span>
                                                    <span>1</span>
                                                    <span>2</span>
                                                    <span>5</span>
                                                </div>
                                            </div>
                                            <div className="sol-box">
                                                <div className="top d-flex align-items-center justify-content-between">
                                                    <div className='d-flex align-items-center '>
                                                        <p className='slippage'>Slippage </p>
                                                        <span>12</span>
                                                    </div>
                                                </div>
                                                <div className="numvalue d-flex align-items-center">
                                                    <span>0.1</span>
                                                    <span>0.25</span>
                                                    <span>0.5</span>
                                                    <span>1</span>
                                                    <span>2</span>
                                                    <span>5</span>
                                                </div>
                                            </div>
                                            {shortAccount ? (
                                                <div className="connect-wallet-btn">
                                                    <a href="#" className='btn'> <img
                                                        src={brifcase} alt=""/> Sell</a>
                                                    <p>You receive min. <strong>{value}</strong> CHIMPE</p>
                                                </div>

                                            ) : (
                                                <div className="connect-wallet-btn">
                                                    <a href="#" className='btn' onClick={wallethandleShow}> <img
                                                        src={brifcase} alt=""/> Connect Wallet</a>
                                                    <p>You receive min. <strong>{value}</strong> CHIMPE</p>
                                                </div>
                                            )}
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
                {/*<Chartwtable/>*/}
                <Chatv2/>
            </Container>


            <Modal show={show} onHide={walletHandleClose} centered size="lg">
                <Modal.Header closeButton className='justify-content-center'>
                    <div className='text-center'>
                        <h2>Connect Wallet</h2>
                        <p>Please Connect your Wallet to continue the system supports the following wallets</p>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="walle-content">
                        <h5>Recommended wallets</h5>
                        <div className="wallet-service-item">
                            {wsitems.map((item, index) => (
                                <a href="#" className='single-item' key={index}><img src={item.img} alt=""/>
                                    <span>{item.txt}</span></a>
                            ))}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


        </div>
    )
}
