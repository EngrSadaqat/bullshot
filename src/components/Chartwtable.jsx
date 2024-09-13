import { Row, Col } from 'react-bootstrap';
import chartprofile from '../assets/img/chartprofile.png';
import { Tab, Nav } from 'react-bootstrap';
import { TfiWorld } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Table from './Table';
import TradingViewWidget from './TradingViewWidget';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Token from './Token';
import TokenTwo from './TokenTwo';
import TokenThree from './TokenThree';
export default function Chartwtable() {
    return (
        <div className='chartwtable mt-4'>
            <Row>
                <Col>
                    <div className="chart-table-area d-flex gap-4">
                        <div className='chart'>
                            <div className="chart-box">
                                <TradingViewWidget />
                            </div>
                            <Table />
                        </div>
                        <div className="sidebar">
                            <div className="sidebar-txns">
                                <Tab.Container defaultActiveKey="first">
                                    <div className="table-area">
                                        <Nav className="tab-navs d-flex">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">
                                                    <p>5M</p>
                                                    <span>0.40%</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">
                                                    <p>1H</p>
                                                    <span>2.61%</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="three">
                                                    <p>6H</p>
                                                    <span>23.95%</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="four">
                                                    <p>5M</p>
                                                    <span>37.29%</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <div className="txns-box">

                                                    <div className="single-item d-flex align-items-start">
                                                        <div className="type">
                                                            <p>Txns</p>
                                                            <span>801</span>
                                                        </div>
                                                        <div className="value d-flex align-items-start">
                                                            <div className='left'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                            <div className='right'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-item d-flex align-items-start">
                                                        <div className="type">
                                                            <p>Volume</p>
                                                            <span>$17K</span>
                                                        </div>
                                                        <div className="value d-flex align-items-start">
                                                            <div className='left'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                            <div className='right'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-item d-flex align-items-start">
                                                        <div className="type">
                                                            <p>Makers</p>
                                                            <span>109</span>
                                                        </div>
                                                        <div className="value d-flex align-items-start">
                                                            <div className='left'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                            <div className='right'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div className="txns-box">

                                                    <div className="single-item d-flex align-items-start">
                                                        <div className="type">
                                                            <p>Txns</p>
                                                            <span>801</span>
                                                        </div>
                                                        <div className="value d-flex align-items-start">
                                                            <div className='left'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                            <div className='right'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-item d-flex align-items-start">
                                                        <div className="type">
                                                            <p>Volume</p>
                                                            <span>$17K</span>
                                                        </div>
                                                        <div className="value d-flex align-items-start">
                                                            <div className='left'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                            <div className='right'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-item d-flex align-items-start">
                                                        <div className="type">
                                                            <p>Makers</p>
                                                            <span>109</span>
                                                        </div>
                                                        <div className="value d-flex align-items-start">
                                                            <div className='left'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                            <div className='right'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="three">
                                                <div className="txns-box">

                                                    <div className="single-item d-flex align-items-start">
                                                        <div className="type">
                                                            <p>Txns</p>
                                                            <span>801</span>
                                                        </div>
                                                        <div className="value d-flex align-items-start">
                                                            <div className='left'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                            <div className='right'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-item d-flex align-items-start">
                                                        <div className="type">
                                                            <p>Volume</p>
                                                            <span>$17K</span>
                                                        </div>
                                                        <div className="value d-flex align-items-start">
                                                            <div className='left'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                            <div className='right'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-item d-flex align-items-start">
                                                        <div className="type">
                                                            <p>Makers</p>
                                                            <span>109</span>
                                                        </div>
                                                        <div className="value d-flex align-items-start">
                                                            <div className='left'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                            <div className='right'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="four">
                                                <div className="txns-box">

                                                    <div className="single-item d-flex align-items-start">
                                                        <div className="type">
                                                            <p>Txns</p>
                                                            <span>801</span>
                                                        </div>
                                                        <div className="value d-flex align-items-start">
                                                            <div className='left'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                            <div className='right'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-item d-flex align-items-start">
                                                        <div className="type">
                                                            <p>Volume</p>
                                                            <span>$17K</span>
                                                        </div>
                                                        <div className="value d-flex align-items-start">
                                                            <div className='left'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                            <div className='right'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-item d-flex align-items-start">
                                                        <div className="type">
                                                            <p>Makers</p>
                                                            <span>109</span>
                                                        </div>
                                                        <div className="value d-flex align-items-start">
                                                            <div className='left'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                            <div className='right'>
                                                                <p>Txns</p>
                                                                <span>801</span>
                                                                <ProgressBar now={100} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Tab.Container>
                            </div>
                            <button className='alart-btn d-block mb-3'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <g opacity="0.7">
                                    <path d="M13.1282 11.3505C12.6682 10.8562 11.8075 10.1126 11.8075 7.677C11.8075 5.82706 10.5104 4.34615 8.7614 3.98283V3.48666C8.7614 3.06596 8.42045 2.72478 7.99999 2.72478C7.57953 2.72478 7.23859 3.06596 7.23859 3.48666V3.98283C5.48959 4.34615 4.19249 5.82706 4.19249 7.677C4.19249 10.1126 3.3318 10.8562 2.87182 11.3505C2.72897 11.504 2.66564 11.6876 2.66683 11.8673C2.66944 12.2578 2.97586 12.6292 3.43109 12.6292H12.5689C13.0241 12.6292 13.3308 12.2578 13.3332 11.8673C13.3343 11.6876 13.271 11.5038 13.1282 11.3505ZM4.27463 11.4864C4.77985 10.8205 5.33222 9.7167 5.33484 7.69081C5.33484 7.68605 5.33341 7.68176 5.33341 7.677C5.33341 6.20419 6.52718 5.01042 7.99999 5.01042C9.4728 5.01042 10.6666 6.20419 10.6666 7.677C10.6666 7.68176 10.6651 7.68605 10.6651 7.69081C10.6678 9.71694 11.2201 10.8207 11.7254 11.4864H4.27463ZM7.99999 14.9149C8.84092 14.9149 9.52304 14.2327 9.52304 13.3911H6.47694C6.47694 14.2327 7.15907 14.9149 7.99999 14.9149Z" fill="white" />
                                </g>
                            </svg> <span>Alerts</span></button>
                            <div className="sidebar-created p-3 mb-4">
                                <div className="created-card ">
                                    <div className='card-head d-flex align-items-center justify-content-between'>
                                        <p>Pair created</p>
                                        <span>1m ago</span>
                                    </div>
                                    <div className=' card-items d-flex align-items-center justify-content-between '>
                                        <p>Pair created</p>
                                        <div className='d-flex align-items-center gap-2' >
                                            <span className='span-btn d-flex align-items-center gap-1'>
                                                <Token />
                                            </span>
                                            <span className='d-flex align-items-center gap-1' >
                                                Exp
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <g opacity="0.7" clipPath="url(#clip0_104_4781)">
                                                        <path d="M8.4375 7.06982H7.8125C7.72962 7.06982 7.65013 7.10275 7.59153 7.16135C7.53292 7.21996 7.5 7.29944 7.5 7.38232V9.56982H1.25V3.31982H4.0625C4.14538 3.31982 4.22487 3.2869 4.28347 3.2283C4.34208 3.16969 4.375 3.0902 4.375 3.00732V2.38232C4.375 2.29944 4.34208 2.21996 4.28347 2.16135C4.22487 2.10275 4.14538 2.06982 4.0625 2.06982H0.9375C0.68886 2.06982 0.450403 2.1686 0.274587 2.34441C0.098772 2.52023 0 2.75868 0 3.00732L0 9.88232C0 10.131 0.098772 10.3694 0.274587 10.5452C0.450403 10.7211 0.68886 10.8198 0.9375 10.8198H7.8125C8.06114 10.8198 8.2996 10.7211 8.47541 10.5452C8.65123 10.3694 8.75 10.131 8.75 9.88232V7.38232C8.75 7.29944 8.71708 7.21996 8.65847 7.16135C8.59987 7.10275 8.52038 7.06982 8.4375 7.06982ZM9.53125 0.819824H7.03125C6.61387 0.819824 6.40527 1.32588 6.69922 1.62061L7.39707 2.31846L2.63672 7.07705C2.59302 7.1206 2.55835 7.17235 2.53469 7.22932C2.51103 7.2863 2.49885 7.34739 2.49885 7.40908C2.49885 7.47078 2.51103 7.53186 2.53469 7.58884C2.55835 7.64582 2.59302 7.69756 2.63672 7.74111L3.07949 8.18311C3.12304 8.22681 3.17479 8.26148 3.23176 8.28514C3.28874 8.3088 3.34983 8.32098 3.41152 8.32098C3.47322 8.32098 3.5343 8.3088 3.59128 8.28514C3.64826 8.26148 3.70001 8.22681 3.74355 8.18311L8.50156 3.42373L9.19922 4.12061C9.49219 4.41357 10 4.2085 10 3.78857V1.28857C10 1.16425 9.95061 1.04503 9.86271 0.957118C9.7748 0.86921 9.65557 0.819824 9.53125 0.819824Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_104_4781">
                                                            <rect width="10" height="10" fill="white" transform="translate(0 0.819824)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                            </span>
                                        </div>
                                    </div>
                                    <div className=' card-items d-flex align-items-center justify-content-between '>
                                        <p>$MGMES</p>
                                        <div className='d-flex align-items-center gap-2' >
                                            <span className='span-btn d-flex align-items-center gap-1'>
                                                <TokenTwo />
                                            </span>
                                            <span className='d-flex align-items-center gap-1' >
                                                Exp
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <g opacity="0.7" clipPath="url(#clip0_104_4781)">
                                                        <path d="M8.4375 7.06982H7.8125C7.72962 7.06982 7.65013 7.10275 7.59153 7.16135C7.53292 7.21996 7.5 7.29944 7.5 7.38232V9.56982H1.25V3.31982H4.0625C4.14538 3.31982 4.22487 3.2869 4.28347 3.2283C4.34208 3.16969 4.375 3.0902 4.375 3.00732V2.38232C4.375 2.29944 4.34208 2.21996 4.28347 2.16135C4.22487 2.10275 4.14538 2.06982 4.0625 2.06982H0.9375C0.68886 2.06982 0.450403 2.1686 0.274587 2.34441C0.098772 2.52023 0 2.75868 0 3.00732L0 9.88232C0 10.131 0.098772 10.3694 0.274587 10.5452C0.450403 10.7211 0.68886 10.8198 0.9375 10.8198H7.8125C8.06114 10.8198 8.2996 10.7211 8.47541 10.5452C8.65123 10.3694 8.75 10.131 8.75 9.88232V7.38232C8.75 7.29944 8.71708 7.21996 8.65847 7.16135C8.59987 7.10275 8.52038 7.06982 8.4375 7.06982ZM9.53125 0.819824H7.03125C6.61387 0.819824 6.40527 1.32588 6.69922 1.62061L7.39707 2.31846L2.63672 7.07705C2.59302 7.1206 2.55835 7.17235 2.53469 7.22932C2.51103 7.2863 2.49885 7.34739 2.49885 7.40908C2.49885 7.47078 2.51103 7.53186 2.53469 7.58884C2.55835 7.64582 2.59302 7.69756 2.63672 7.74111L3.07949 8.18311C3.12304 8.22681 3.17479 8.26148 3.23176 8.28514C3.28874 8.3088 3.34983 8.32098 3.41152 8.32098C3.47322 8.32098 3.5343 8.3088 3.59128 8.28514C3.64826 8.26148 3.70001 8.22681 3.74355 8.18311L8.50156 3.42373L9.19922 4.12061C9.49219 4.41357 10 4.2085 10 3.78857V1.28857C10 1.16425 9.95061 1.04503 9.86271 0.957118C9.7748 0.86921 9.65557 0.819824 9.53125 0.819824Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_104_4781">
                                                            <rect width="10" height="10" fill="white" transform="translate(0 0.819824)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                            </span>
                                        </div>
                                    </div>
                                    <div className=' card-items d-flex align-items-center justify-content-between '>
                                        <p>Bonding curve</p>
                                        <div className='d-flex align-items-center gap-2' >
                                            <span className='span-btn d-flex align-items-center gap-1'>
                                                <TokenThree />
                                            </span>
                                            <span className='d-flex align-items-center gap-1' >
                                                Exp
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                                    <g opacity="0.7" clipPath="url(#clip0_104_4781)">
                                                        <path d="M8.4375 7.06982H7.8125C7.72962 7.06982 7.65013 7.10275 7.59153 7.16135C7.53292 7.21996 7.5 7.29944 7.5 7.38232V9.56982H1.25V3.31982H4.0625C4.14538 3.31982 4.22487 3.2869 4.28347 3.2283C4.34208 3.16969 4.375 3.0902 4.375 3.00732V2.38232C4.375 2.29944 4.34208 2.21996 4.28347 2.16135C4.22487 2.10275 4.14538 2.06982 4.0625 2.06982H0.9375C0.68886 2.06982 0.450403 2.1686 0.274587 2.34441C0.098772 2.52023 0 2.75868 0 3.00732L0 9.88232C0 10.131 0.098772 10.3694 0.274587 10.5452C0.450403 10.7211 0.68886 10.8198 0.9375 10.8198H7.8125C8.06114 10.8198 8.2996 10.7211 8.47541 10.5452C8.65123 10.3694 8.75 10.131 8.75 9.88232V7.38232C8.75 7.29944 8.71708 7.21996 8.65847 7.16135C8.59987 7.10275 8.52038 7.06982 8.4375 7.06982ZM9.53125 0.819824H7.03125C6.61387 0.819824 6.40527 1.32588 6.69922 1.62061L7.39707 2.31846L2.63672 7.07705C2.59302 7.1206 2.55835 7.17235 2.53469 7.22932C2.51103 7.2863 2.49885 7.34739 2.49885 7.40908C2.49885 7.47078 2.51103 7.53186 2.53469 7.58884C2.55835 7.64582 2.59302 7.69756 2.63672 7.74111L3.07949 8.18311C3.12304 8.22681 3.17479 8.26148 3.23176 8.28514C3.28874 8.3088 3.34983 8.32098 3.41152 8.32098C3.47322 8.32098 3.5343 8.3088 3.59128 8.28514C3.64826 8.26148 3.70001 8.22681 3.74355 8.18311L8.50156 3.42373L9.19922 4.12061C9.49219 4.41357 10 4.2085 10 3.78857V1.28857C10 1.16425 9.95061 1.04503 9.86271 0.957118C9.7748 0.86921 9.65557 0.819824 9.53125 0.819824Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_104_4781">
                                                            <rect width="10" height="10" fill="white" transform="translate(0 0.819824)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                            </span>
                                        </div>
                                    </div>
                                    <div className='quick d-flex align-items-center justify-content-between '>
                                        <p>Quick Intel</p>
                                        <span>Not available</span>
                                    </div>
                                    <p className='text-center des'><span>Warning!</span> Audits may not be 100% accurate! <span className='span2'>More</span></p>
                                    <div className="btns d-flex align-items-center justify-content-center  gap-2 pb-0">
                                        <div className='btn-item'>
                                            <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                    <g clip-path="url(#clip0_104_4708)">
                                                        <path d="M0.846252 9.41107L2.88875 7.39857L6.36625 6.78232L6.0225 8.60232L1.32125 10.0473L1.0175 9.91607L0.846252 9.41107Z" fill="#CA2C31" />
                                                        <path d="M3.24249 7.91482L1.02499 9.92982L2.65624 10.7248L5.13249 9.46107V8.86482L5.63874 7.49982L3.24249 7.91482Z" fill="#A02422" />
                                                        <path d="M8.49 11.4636L7.41875 11.9286L6.4075 14.0723C6.4075 14.0723 7.2975 16.0436 7.3375 16.0436C7.3775 16.0436 7.88375 16.0836 7.88375 16.0836L9.68375 14.0711L10.1388 10.6336L8.49 11.4636Z" fill="#A02422" />
                                                        <path d="M7.43749 13.0498C7.43749 13.0498 8.03374 12.9286 8.45874 12.7261C8.88374 12.5236 9.40874 12.2211 9.40874 12.2211L9.21624 13.8998L7.33499 16.0411C7.33499 16.0411 7.26124 15.9498 6.94874 15.2698C6.69999 14.7273 6.61374 14.5336 6.61374 14.5336L7.43749 13.0498Z" fill="#CA2C31" />
                                                        <path d="M4.32251 10.5273C4.32251 10.5273 3.60501 10.4673 2.81876 11.4611C2.10126 12.3686 1.76501 13.8461 1.63501 14.2261C1.50501 14.6061 1.19376 14.6836 1.29751 14.8573C1.40126 15.0311 1.85001 15.0211 2.40376 14.9523C2.95751 14.8836 3.43251 14.7098 3.43251 14.7098C3.43251 14.7098 3.40876 14.7698 3.32876 14.8998C3.30001 14.9461 3.20001 15.0123 3.20751 15.0811C3.22501 15.2448 4.62751 15.2486 5.74751 14.0961C6.95751 12.8523 6.37001 11.8323 6.37001 11.8323L4.32251 10.5273Z" fill="#F7D74D" />
                                                        <path d="M4.53876 11.1061C4.53876 11.1061 3.76501 11.1473 3.12501 12.1411C2.48501 13.1348 2.18751 14.2861 2.24876 14.3636C2.30876 14.4411 3.50126 14.0098 3.78751 14.0961C3.98376 14.1561 3.88251 14.3548 3.93501 14.4073C3.97876 14.4511 4.49626 14.5248 5.33376 13.6173C6.17251 12.7098 5.97376 11.4348 5.97376 11.4348L4.53876 11.1061Z" fill="#FBF0B4" />
                                                        <path d="M4.91875 9.74982C4.91875 9.74982 4.53 10.0961 4.39125 10.2948C4.2525 10.4936 4.2525 10.5111 4.26125 10.5711C4.27 10.6311 4.41375 11.2898 5.0125 11.8673C5.7475 12.5761 6.40375 12.6711 6.49875 12.6711C6.59375 12.6711 7.225 11.9623 7.225 11.9623L4.91875 9.74982Z" fill="#858585" />
                                                        <path d="M6.63751 11.8498C6.63751 11.8498 7.26751 12.2636 8.32376 11.9086C9.76751 11.4236 10.8263 10.3386 12.1375 8.96858C13.4025 7.64608 14.4638 6.00483 14.4638 6.00483L13.72 3.51358L6.63751 11.8498Z" fill="#437687" />
                                                        <path d="M8.87375 10.4861L9.0475 9.94608L9.4825 10.0073C9.4825 10.0073 9.81375 10.1636 10.0575 10.2773C10.3012 10.3911 10.615 10.4773 10.615 10.4773L9.99625 10.9998C9.99625 10.9998 9.65875 10.8723 9.4125 10.7648C9.135 10.6436 8.87375 10.4861 8.87375 10.4861Z" fill="#3F545F" />
                                                        <path d="M10.915 2.46231C10.915 2.46231 9.71248 3.15981 7.98873 4.79106C6.43498 6.26106 5.28374 7.59106 5.00499 8.72231C4.77249 9.66981 4.89624 10.2448 5.42499 10.8661C5.98374 11.5236 6.63873 11.8498 6.63873 11.8498C6.63873 11.8498 7.13123 11.8573 9.18623 10.2761C11.75 8.30231 13.8037 4.99731 13.8037 4.99731L10.915 2.46231Z" fill="#8DAFBF" />
                                                        <path d="M13.3975 5.67483C13.3975 5.67483 12.3512 5.22858 11.605 4.18733C10.8637 3.15358 10.9225 2.45483 10.9225 2.45483C10.9225 2.45483 11.5425 1.96858 12.9362 1.41233C13.8737 1.03858 15.15 0.847333 15.57 1.15858C15.99 1.46983 15.2825 3.03108 15.2825 3.03108L13.9937 5.52608L13.3975 5.67483Z" fill="#D83F22" />
                                                        <path d="M8.89626 10.4948C8.89626 10.4948 7.99251 10.0336 7.41751 9.37733C6.33001 8.13858 6.10501 6.77858 6.10501 6.77858L6.65126 6.13733C6.65126 6.13733 6.78751 7.58233 7.95376 8.83108C8.71376 9.64483 9.50751 10.0173 9.50751 10.0173C9.50751 10.0173 9.34876 10.1511 9.17876 10.2811C9.07001 10.3648 8.89626 10.4948 8.89626 10.4948Z" fill="#6896A5" />
                                                        <path d="M14.4637 6.00483C14.4637 6.00483 15.0062 5.35108 15.52 3.87733C16.2375 1.82233 15.6125 1.19983 15.6125 1.19983C15.6125 1.19983 15.4012 2.17733 14.6675 3.53608C14.0787 4.62483 13.3662 5.66108 13.3662 5.66108C13.3662 5.66108 13.7587 5.83733 13.9712 5.89858C14.2387 5.97608 14.4637 6.00483 14.4637 6.00483Z" fill="#A02422" />
                                                        <path d="M5.35125 9.15232C5.51375 9.30731 5.76 9.14481 5.92125 8.76481C6.08375 8.38481 6.08125 8.17231 5.95625 8.08231C5.80125 7.96981 5.54125 8.21606 5.4275 8.43481C5.3025 8.67731 5.22875 9.03482 5.35125 9.15232Z" fill="#B3E1EE" />
                                                        <path d="M10.9937 2.96106C10.9937 2.96106 10.0425 3.64481 9.02749 4.57481C8.09624 5.42856 7.47874 6.09606 7.39374 6.25106C7.30374 6.41731 7.30249 6.65231 7.37249 6.77231C7.44249 6.89231 7.59749 6.95481 7.73874 6.84981C7.87999 6.74356 8.88624 5.63106 9.79499 4.83606C10.6262 4.10856 11.2675 3.64731 11.2675 3.64731C11.2675 3.64731 11.5275 3.18731 11.485 3.08231C11.4425 2.97606 10.9937 2.96106 10.9937 2.96106Z" fill="#B3E1EE" />
                                                        <path d="M10.9937 2.96108C10.9937 2.96108 11.6962 2.42233 12.4612 2.04358C13.1725 1.69108 13.88 1.39733 14.0075 1.65233C14.1287 1.89483 13.3362 2.22483 12.6387 2.66983C11.9412 3.11483 11.27 3.64608 11.27 3.64608C11.27 3.64608 11.1675 3.45858 11.1012 3.28483C11.0275 3.09608 10.9937 2.96108 10.9937 2.96108Z" fill="#ED6A65" />
                                                        <path d="M11.5738 5.35106C10.8775 4.70981 9.90876 4.88231 9.43126 5.45231C8.94126 6.03981 8.97751 6.93731 9.55626 7.47731C10.0825 7.96731 11.0613 8.07856 11.6513 7.39106C12.1763 6.78106 12.1438 5.87481 11.5738 5.35106Z" fill="#E1E1E1" />
                                                        <path d="M9.79126 5.67858C9.37751 6.08483 9.40001 6.88983 9.89251 7.25733C10.3225 7.57858 10.9325 7.56233 11.315 7.17108C11.6975 6.77983 11.6975 6.06858 11.3388 5.70108C10.9263 5.27983 10.265 5.21358 9.79126 5.67858Z" fill="#3F545F" />
                                                        <path d="M6.625 10.0561C6.625 10.0561 7.39875 9.27108 7.48375 9.35608C7.56875 9.44108 7.5575 9.91733 7.1875 10.4473C6.81625 10.9773 6 11.9211 5.35375 12.5573C4.71625 13.1836 3.8175 13.8998 3.7325 13.8873C3.66625 13.8773 3.3975 13.7436 3.29 13.6136C3.185 13.4848 3.49875 12.8761 3.625 12.6748C3.7525 12.4736 6.625 10.0561 6.625 10.0561Z" fill="#A02524" />
                                                        <path d="M3.02874 13.1761C3.01874 13.3561 3.29374 13.6186 3.29374 13.6186L7.48374 9.35734C7.48374 9.35734 7.28749 9.13609 6.70999 9.49484C6.12749 9.85734 5.61749 10.2923 4.86499 11.0211C3.81624 12.0386 3.03874 12.9961 3.02874 13.1761Z" fill="#CA2C31" />
                                                        <path d="M2.7575 5.06356C2.61875 5.20231 2.6125 5.42481 2.7675 5.55231C2.905 5.66606 3.12875 5.59231 3.2125 5.48981C3.29625 5.38731 3.28625 5.16481 3.175 5.05481C3.06375 4.94356 2.8425 4.97981 2.7575 5.06356Z" fill="white" />
                                                        <path opacity="0.5" d="M5.5025 4.90108C5.3975 5.01733 5.43125 5.18983 5.52875 5.25358C5.62625 5.31733 5.7725 5.31108 5.84375 5.22358C5.9075 5.14483 5.915 4.98733 5.8175 4.88983C5.7325 4.80608 5.57 4.82608 5.5025 4.90108Z" fill="white" />
                                                        <path d="M7.31874 1.93107C7.31874 1.93107 7.47124 1.49607 7.56124 1.49107C7.65249 1.48607 7.78374 1.92607 7.78374 1.92607C7.78374 1.92607 8.23499 1.93107 8.26499 1.99732C8.30374 2.08232 7.97624 2.36732 7.97624 2.36732C7.97624 2.36732 8.08249 2.79232 8.03249 2.84357C7.97624 2.89982 7.58749 2.67607 7.58749 2.67607C7.58749 2.67607 7.18749 2.95482 7.10124 2.87857C7.02624 2.81232 7.18249 2.36232 7.18249 2.36232C7.18249 2.36232 6.80749 2.08857 6.82749 2.01232C6.85624 1.90482 7.31874 1.93107 7.31874 1.93107Z" fill="white" />
                                                        <path d="M12.5013 12.3611C12.6525 12.4448 12.8425 12.3973 12.9125 12.2361C12.9763 12.0923 12.8588 11.9211 12.7525 11.8748C12.6463 11.8286 12.46 11.8898 12.3925 12.0111C12.3263 12.1311 12.41 12.3111 12.5013 12.3611Z" fill="white" />
                                                        <path d="M14.6488 8.67483C14.5625 8.54108 14.3763 8.49733 14.255 8.60483C14.1375 8.70983 14.1663 8.87483 14.2325 8.95858C14.2988 9.04233 14.4763 9.07359 14.5838 9.00484C14.6913 8.93609 14.7013 8.75483 14.6488 8.67483Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_104_4708">
                                                            <rect width="16" height="16" fill="white" transform="translate(0.375 0.444824)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </p>
                                            <span>12</span>
                                        </div>
                                        <div className='btn-item'>
                                            <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                    <g clipPath="url(#clip0_104_4736)">
                                                        <path d="M4.56999 5.53606C4.49874 6.29606 4.44874 7.64106 4.89749 8.21356C4.89749 8.21356 4.68624 6.73606 6.57999 4.88231C7.34248 4.13606 7.51874 3.12106 7.25249 2.35981C7.10124 1.92856 6.82499 1.57231 6.58499 1.32356C6.44499 1.17731 6.55248 0.936062 6.75624 0.944812C7.98874 0.999812 9.98623 1.34231 10.835 3.47231C11.2075 4.40731 11.235 5.37356 11.0575 6.35606C10.945 6.98356 10.545 8.37856 11.4575 8.54981C12.1087 8.67231 12.4237 8.15481 12.565 7.78231C12.6237 7.62731 12.8275 7.58856 12.9375 7.71231C14.0375 8.96356 14.1312 10.4373 13.9037 11.7061C13.4637 14.1586 10.98 15.9436 8.51249 15.9436C5.42999 15.9436 2.97624 14.1798 2.33999 10.9873C2.08374 9.69856 2.21374 7.14856 4.20124 5.34856C4.34874 5.21356 4.58999 5.33356 4.56999 5.53606Z" fill="url(#paint0_radial_104_4736)" />
                                                        <path d="M9.63871 10.1223C8.50246 8.65981 9.01121 6.99106 9.28996 6.32606C9.32746 6.23856 9.22746 6.15606 9.14871 6.20981C8.65996 6.54231 7.65871 7.32481 7.19246 8.42606C6.56121 9.91481 6.60621 10.6436 6.97996 11.5336C7.20496 12.0698 6.94371 12.1836 6.81246 12.2036C6.68496 12.2236 6.56746 12.1386 6.47371 12.0498C6.20496 11.7936 6.01121 11.4598 5.91871 11.0998C5.89871 11.0223 5.79746 11.0011 5.75121 11.0648C5.40121 11.5486 5.21996 12.3248 5.21121 12.8736C5.18371 14.5698 6.58496 15.9448 8.27996 15.9448C10.4162 15.9448 11.9725 13.5823 10.745 11.6073C10.3887 11.0323 10.0537 10.6561 9.63871 10.1223Z" fill="url(#paint1_radial_104_4736)" />
                                                    </g>
                                                    <defs>
                                                        <radialGradient id="paint0_radial_104_4736" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.90199 15.9824) rotate(-179.751) scale(8.82346 14.4775)">
                                                            <stop offset="0.3144" stopColor="#FF9800" />
                                                            <stop offset="0.6616" stopColor="#FF6D00" />
                                                            <stop offset="0.9715" stopColor="#F44336" />
                                                        </radialGradient>
                                                        <radialGradient id="paint1_radial_104_4736" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.39744 7.20217) rotate(90.5787) scale(9.23204 6.9478)">
                                                            <stop offset="0.2141" stopColor="#FFF176" />
                                                            <stop offset="0.3275" stopColor="#FFF27D" />
                                                            <stop offset="0.4868" stopColor="#FFF48F" />
                                                            <stop offset="0.6722" stopColor="#FFF7AD" />
                                                            <stop offset="0.7931" stopColor="#FFF9C4" />
                                                            <stop offset="0.8221" stopColor="#FFF8BD" stopOpacity="0.804" />
                                                            <stop offset="0.8627" stopColor="#FFF6AB" stopOpacity="0.529" />
                                                            <stop offset="0.9101" stopColor="#FFF38D" stopOpacity="0.2088" />
                                                            <stop offset="0.9409" stopColor="#FFF176" stopOpacity="0" />
                                                        </radialGradient>
                                                        <clipPath id="clip0_104_4736">
                                                            <rect width="16" height="16" fill="white" transform="translate(0.125 0.444824)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </p>
                                            <span >0</span>
                                        </div>
                                        <div className='btn-item'>
                                            <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                    <path d="M15.7362 9.83609C15.5537 9.44234 15.2462 9.11984 14.8612 8.91984C14.6287 8.77484 14.3762 8.66359 14.1112 8.59109C14.3025 7.89109 14.0312 7.33359 13.65 6.91734C13.0862 6.30734 12.5 6.21859 12.5 6.21859C12.7025 5.83484 12.7637 5.39234 12.67 4.96859C12.5737 4.50734 12.285 4.11109 11.875 3.87859C11.4875 3.64984 11.01 3.53734 10.52 3.44484C10.285 3.40234 9.29373 3.26359 8.88248 2.69484C8.55123 2.23359 8.54123 1.40359 8.45123 1.15484C8.36123 0.906087 8.02873 1.01109 7.67248 1.24984C7.25623 1.53234 6.39373 2.42359 6.06123 3.31984C5.84123 3.87109 5.78623 4.47359 5.90123 5.05609C5.63373 5.09984 5.37248 5.17734 5.12498 5.28734C5.10498 5.28734 5.08498 5.29984 5.06373 5.30859C4.68873 5.46359 3.88498 6.18359 3.81373 7.28984C3.78748 7.68109 3.83748 8.07234 3.95998 8.44484C3.68623 8.51609 3.42248 8.62359 3.17748 8.76609C2.89123 8.88859 2.62998 9.06359 2.40873 9.28234C2.16498 9.58359 1.98748 9.93234 1.88998 10.3073C1.66373 11.1336 1.75248 12.0148 2.13998 12.7786C2.36498 13.2123 2.64748 13.6123 2.98248 13.9686C4.05123 15.0673 5.89623 15.4823 7.35748 15.7186C9.13123 16.0111 10.9887 15.9086 12.6487 15.2186C15.1387 14.1911 15.8012 12.5386 15.8987 12.0723C16.115 11.0411 15.85 10.0698 15.7362 9.83609Z" fill="#885742" />
                                                    <path d="M11.8063 12.0561C11.61 12.1561 11.41 12.2461 11.2088 12.3261C11.0738 12.3798 10.9375 12.4286 10.8 12.4723C10.6625 12.5173 10.5238 12.5561 10.3838 12.5973C10.1038 12.6673 9.81876 12.7186 9.53126 12.7486C9.31376 12.7723 9.09376 12.7836 8.87501 12.7836C8.29751 12.7836 7.72251 12.7023 7.16626 12.5448L6.98376 12.4898C6.67751 12.3923 6.37876 12.2736 6.09001 12.1348L5.91626 12.0486C6.12376 12.8973 6.71001 13.6023 7.50626 13.9623C7.93501 14.1611 8.40251 14.2623 8.87501 14.2598C9.35251 14.2636 9.82501 14.1661 10.2613 13.9711C11.065 13.6173 11.65 12.8998 11.8338 12.0411L11.8063 12.0561Z" fill="#35220B" />
                                                    <path d="M11.5238 11.6948C10.6488 11.8486 9.76252 11.9223 8.87502 11.9161C7.98752 11.9211 7.10127 11.8473 6.22627 11.6948C6.08002 11.6661 5.93877 11.7623 5.91002 11.9086C5.90377 11.9423 5.90377 11.9786 5.91002 12.0123C5.91002 12.0223 5.91002 12.0323 5.91002 12.0436C6.82502 12.5223 7.84252 12.7736 8.87502 12.7773C9.09377 12.7773 9.31377 12.7661 9.53127 12.7423C9.81877 12.7123 10.1038 12.6611 10.3838 12.5911C10.5238 12.5561 10.6625 12.5173 10.8 12.4661C10.9375 12.4148 11.0738 12.3736 11.2088 12.3198C11.4113 12.2361 11.61 12.1461 11.8063 12.0498L11.8338 12.0348L11.8413 12.0011C11.8625 11.8523 11.7588 11.7148 11.6088 11.6936C11.5813 11.6898 11.5525 11.6898 11.5238 11.6948Z" fill="white" />
                                                    <path d="M10.8912 10.6811C11.7473 10.6811 12.4412 9.98713 12.4412 9.13108C12.4412 8.27504 11.7473 7.58109 10.8912 7.58109C10.0352 7.58109 9.34125 8.27504 9.34125 9.13108C9.34125 9.98713 10.0352 10.6811 10.8912 10.6811Z" fill="white" />
                                                    <path d="M10.8913 9.85859C11.2869 9.85859 11.6075 9.53288 11.6075 9.13109C11.6075 8.72931 11.2869 8.40359 10.8913 8.40359C10.4957 8.40359 10.175 8.72931 10.175 9.13109C10.175 9.53288 10.4957 9.85859 10.8913 9.85859Z" fill="#35220B" />
                                                    <path d="M6.85878 10.6811C7.71482 10.6811 8.40878 9.98713 8.40878 9.13108C8.40878 8.27504 7.71482 7.58109 6.85878 7.58109C6.00274 7.58109 5.30878 8.27504 5.30878 9.13108C5.30878 9.98713 6.00274 10.6811 6.85878 10.6811Z" fill="white" />
                                                    <path d="M6.85877 9.85859C7.25434 9.85859 7.57502 9.53288 7.57502 9.13109C7.57502 8.72931 7.25434 8.40359 6.85877 8.40359C6.46319 8.40359 6.14252 8.72931 6.14252 9.13109C6.14252 9.53288 6.46319 9.85859 6.85877 9.85859Z" fill="#35220B" />
                                                </svg>
                                            </p>
                                            <span>27</span>
                                        </div>
                                        <div className='btn-item'>
                                            <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                    <g clipPath="url(#clip0_104_4758)">
                                                        <path d="M1.63003 0.859814C1.28878 0.951064 1.16878 1.27731 1.21378 1.62731C1.25753 1.97856 2.92503 15.3823 2.96878 15.6461C3.01253 15.9098 3.27628 16.0186 3.58253 15.9973C3.89003 15.9748 4.13128 15.7336 4.10878 15.4711C4.08753 15.2073 2.33253 1.49606 2.28753 1.29856C2.24253 1.10106 1.95878 0.772314 1.63003 0.859814Z" fill="#B0B0B0" />
                                                        <path d="M3.42876 15.0873C3.33626 15.0873 3.25501 15.0186 3.24251 14.9236L1.51501 1.49359C1.50251 1.39109 1.57501 1.29734 1.67751 1.28359C1.78001 1.27109 1.87376 1.34234 1.88751 1.44609L3.61501 14.8761C3.62876 14.9786 3.55626 15.0723 3.45251 15.0861C3.44501 15.0873 3.43626 15.0873 3.42876 15.0873Z" fill="#C8C8C8" />
                                                        <path d="M3.2475 9.64609C3.2475 9.64609 3.27375 9.91359 3.35375 10.0623C3.41125 10.1711 3.59125 10.1011 3.73625 9.97109C3.88875 9.83359 4.63875 9.31359 5.81625 9.03734C7.2625 8.69984 9.09125 8.12859 10.2225 7.38484C11.8287 6.32984 12.2337 5.50859 12.9612 4.60109C13.695 3.68359 14.155 3.25484 14.8587 2.87234C15.5687 2.48609 15.8537 2.42859 15.945 2.42859C16.0362 2.42859 16.175 2.18359 15.96 2.07734C15.7462 1.96984 14.17 1.86359 14.17 1.86359L3.66 7.82984L3.2475 9.64609Z" fill="#CC1935" />
                                                        <path d="M2.20624 1.43481L3.24624 9.64981C3.24624 9.64981 3.78499 9.01856 4.94374 8.60981C6.28999 8.13606 8.10999 7.85981 9.02874 7.38606C9.94749 6.91231 11.1862 5.93231 12.0125 4.96856C12.8387 4.00481 13.4075 3.16731 14.2762 2.55106C15.01 2.03106 15.9587 2.07731 15.9587 2.07731C15.9587 2.07731 15.24 1.52606 13.9237 1.66481C12.4025 1.82356 10.4537 3.00981 9.68624 2.87356C8.21874 2.61231 8.00499 1.58731 6.55124 1.26606C4.25999 0.759814 2.20624 1.43481 2.20624 1.43481Z" fill="#FE2C23" />
                                                        <path d="M3.81253 7.07982C4.01003 7.05732 4.21003 5.85607 4.74628 4.93857C5.28253 4.02107 6.12253 3.25607 6.44378 3.04107C6.76503 2.82732 7.14753 2.55107 6.64253 2.27607C6.13753 2.00107 5.23503 1.78607 4.33253 1.78607C3.45753 1.78607 3.23128 1.87732 3.18503 1.98482C3.13878 2.09232 3.39878 4.86107 3.49128 5.50357C3.58378 6.14732 3.67503 7.09482 3.81253 7.07982Z" fill="#FF5F5F" />
                                                        <path d="M8.11123 7.00359C8.12748 7.09984 9.60998 6.45234 10.345 5.61109C10.9437 4.92609 11.1862 4.12734 11.7375 3.56109C12.2887 2.99484 12.8537 2.42859 12.8537 2.42859C12.8537 2.42859 11.2325 2.62734 10.33 3.69859C9.42748 4.76984 9.12123 5.45734 8.92248 5.77859C8.72373 6.10109 8.09623 6.91109 8.11123 7.00359Z" fill="#FF5F5F" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_104_4758">
                                                            <rect width="16" height="16" fill="white" transform="translate(0.625 0.444824)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </p>
                                            <span>64</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-profile p-3">
                                <div className="profile-header  mt-2 d-flex align-items-center justify-content-center flex-column">
                                    <div className="image p-2 mb-2"><img src={chartprofile} alt="" /></div>
                                    <span className='text-center'>Smoking Chicken Trump</span>
                                </div>
                                <div className="profile-body">
                                    <div className="btns d-flex align-items-center justify-content-between mb-2 pb-1">
                                        <Link to="/" target='_blank' className='d-flex align-items-center gap-2'> <TfiWorld />Website</Link>
                                        <Link to="/" target='_blank' className='d-flex align-items-center gap-2'><FaTelegramPlane />Telegram</Link>
                                    </div>
                                    <p className='boost d-flex align-items-center gap-2 justify-content-center'>
                                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.4">
                                                <path d="M11.9271 3.96893V6.06898V8.16903C13.1172 8.16903 14.0272 7.25901 14.0272 6.06898C14.0272 4.87895 13.1172 3.96893 11.9271 3.96893Z" fill="white" />
                                                <path d="M6.327 3.26894H1.42689C0.65687 3.26894 0.0268555 3.89895 0.0268555 4.66897V7.46903C0.0268555 8.23905 0.65687 8.86907 1.42689 8.86907H2.1269V10.9691C2.1269 11.7391 2.75692 12.3691 3.52694 12.3691H4.92697V10.2691V8.86907H6.327L9.12707 11.6691H10.5271V0.468872H9.12707L6.327 3.26894Z" fill="white" />
                                            </g>
                                        </svg>
                                        Marketing Boost
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.0272 7.71061C14.0272 11.5767 10.8931 14.7107 7.02707 14.7107C3.16103 14.7107 0.0269775 11.5767 0.0269775 7.71061C0.0269775 3.84456 3.16103 0.71051 7.02707 0.71051C10.8931 0.71051 14.0272 3.84456 14.0272 7.71061ZM7.90209 4.21056C7.90209 4.69381 7.51034 5.08557 7.02707 5.08557C6.54382 5.08557 6.15206 4.69381 6.15206 4.21056C6.15206 3.72731 6.54382 3.33555 7.02707 3.33555C7.51034 3.33555 7.90209 3.72731 7.90209 4.21056ZM6.15206 6.8356C5.66881 6.8356 5.27705 7.22736 5.27705 7.71061C5.27705 8.19388 5.66881 8.58562 6.15206 8.58562V11.2107C6.15206 11.6939 6.54382 12.0857 7.02707 12.0857H7.90209C8.38536 12.0857 8.7771 11.6939 8.7771 11.2107C8.7771 10.7274 8.38536 10.3356 7.90209 10.3356V7.71061C7.90209 7.22736 7.51034 6.8356 7.02707 6.8356H6.15206Z" fill="currentColor" />
                                        </svg>
                                    </p>
                                    <p className='des text-center'>I'm a big whale of $LANDLORD. I invested really early and made 50x my SOL so Icreated $LANDLORDWIF to give back to the community! Top 10 ...</p>

                                    <p className='last-btn d-flex align-itms-center justify-content-center gap-2'>
                                        This token was create on
                                        <svg width="65" height="22" viewBox="0 0 65 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.2026 11.4852C10.7987 11.4653 10.3337 11.5767 10.0895 10.9386C10.4611 11.0455 11.015 10.9107 11.2026 11.4852ZM12.3005 8.573C11.6893 8.73813 11.5683 8.84917 10.976 8.59988C10.5776 8.43219 10.2044 8.28402 9.78968 8.13905C8.97844 7.85552 7.73261 7.81296 7.16553 8.39507C6.38341 8.38899 5.88738 7.72303 6.08131 6.8833C6.38757 5.55523 7.78829 4.97568 7.57196 3.19733C7.48747 2.50258 7.00841 1.83918 6.5415 1.62061C6.69895 2.12527 6.94376 2.38417 6.79239 3.06837C6.55654 4.13691 5.1283 4.93855 4.35514 5.94021C4.06382 6.3255 3.86754 6.7741 3.78224 7.24954C3.69694 7.72497 3.72503 8.21383 3.86423 8.67636C3.93281 8.89567 4.02464 9.10702 4.13816 9.3068C4.48826 9.91259 4.87421 10.1596 5.47744 10.5603L5.32159 10.6509C4.06072 11.2612 2.78609 11.9732 1.8926 13.0661L1.48682 13.5246C1.25928 13.7621 1.05543 14.0331 0.852539 14.3036C2.37615 17.9559 5.98083 20.5228 10.1855 20.5228C10.7647 20.523 11.3429 20.4738 11.9136 20.3756C11.8076 20.322 11.7063 20.2594 11.6109 20.1887C11.1213 19.8456 10.4864 19.3218 10.2486 18.6715C9.96985 17.9089 10.0438 16.8925 10.4608 16.2854C10.8291 15.75 11.3651 15.3391 12.2125 15.1596C13.2833 14.9327 15.6131 15.5187 15.2662 12.6955C14.5279 12.3755 14.164 12.21 13.6424 11.7383C12.7659 10.945 13.188 10.7782 12.7329 10.0806C13.9573 9.6521 14.7522 9.06711 15.1628 7.94032C15.3991 7.29677 15.4284 6.59548 15.2466 5.93445C15.1311 5.49858 14.7384 4.64382 14.4559 4.46749C14.6188 5.50627 14.7455 6.28711 14.212 7.19404C13.8203 7.86 13.2347 8.32018 12.3002 8.573H12.3005ZM6.5943 12.2894C6.17828 12.4532 5.62049 12.6712 5.33215 12.8872C5.30175 12.4369 5.42112 12.0158 5.61473 11.7239C5.73249 11.546 5.80898 11.4404 5.96675 11.3338C6.11236 11.2355 6.28677 11.1261 6.47174 11.097C6.18148 11.417 6.01411 11.4032 5.91426 12.0113C6.01507 11.9559 5.96739 11.9847 6.05475 11.9153C6.41157 11.6324 6.60902 11.5786 7.12297 11.6013C7.03753 11.6865 6.79111 11.8689 6.66631 11.8935C7.04169 11.8295 7.38091 11.6189 7.61036 11.4352C7.53132 11.8033 6.9956 12.131 6.5943 12.289V12.2894ZM6.8948 8.80981C8.88531 9.2236 8.32368 10.4461 7.27882 10.3635C5.68641 10.2381 4.50234 8.73525 4.81884 7.16332C5.06206 5.95621 6.10499 5.01568 6.62822 4.61053C6.06275 5.28801 4.43866 8.2997 6.89352 8.80981H6.8948Z" fill="#2A81C4" />
                                            <path d="M26.2388 13.4164C26.7182 13.712 27.0297 14.1754 27.0297 14.8225C27.0297 15.7652 26.4785 16.4523 25.2082 16.4523H20.0949V10.8598H25.0164C26.2867 10.8598 26.6782 11.5069 26.6782 12.3298C26.6782 12.7213 26.5184 13.1048 26.2388 13.4164ZM21.533 11.8984V13.0568H24.4971H24.5051C24.8886 13.0568 25.2401 13.0568 25.2401 12.4736C25.2401 11.8984 24.8886 11.8984 24.4971 11.8984H21.533ZM24.8566 15.3418C25.2401 15.3418 25.5917 15.3418 25.5917 14.7506C25.5917 14.1594 25.2401 14.1594 24.8566 14.1594H21.533V15.3418H24.8566ZM32.6919 11.7466H34.0581V16.4523H32.6919V15.6294C32.0208 16.1567 31.094 16.5322 29.9516 16.5322C28.6972 16.5322 27.5228 16.0848 27.5068 14.3511L27.5228 11.7466H28.897V13.8318C28.897 14.8305 29.2325 15.3498 30.359 15.3498C31.2778 15.3498 32.2685 14.8784 32.6919 14.3831V11.7466ZM34.6616 10.0608H36.0277V16.4523H34.6616V10.0608ZM36.6667 10.0608H38.0329V16.4523H36.6667V10.0608ZM38.553 14.7985H39.9191C39.9191 15.3019 40.4385 15.4936 41.9644 15.4936C43.4425 15.4936 43.6821 15.3977 43.6821 15.0302C43.6821 14.6707 43.4584 14.6467 41.8046 14.5429C39.7354 14.423 38.7207 14.2632 38.7207 13.1287C38.7207 11.8984 40.1588 11.6667 41.8366 11.6667C43.6102 11.6667 44.8965 11.8984 44.8965 13.1927H43.5224C43.5224 12.8012 43.027 12.7053 41.7567 12.7053C40.4624 12.7053 40.0949 12.8012 40.0949 13.0728C40.0949 13.3684 40.3426 13.4164 41.9644 13.5362C43.802 13.672 45.0563 13.72 45.0563 14.9743C45.0563 16.3005 43.8579 16.5322 42.0443 16.5322C40.2307 16.5322 38.553 16.3005 38.553 14.7985ZM49.6833 11.6667C50.9376 11.6667 52.1121 12.1141 52.1281 13.8478L52.1121 16.4523H50.7379V14.3671C50.7379 13.3684 50.4024 12.8491 49.2759 12.8491C48.3571 12.8491 47.3664 13.3205 46.9429 13.8158V16.4523H45.5768V10.0608H46.9429V12.5695C47.6141 12.0422 48.5408 11.6667 49.6833 11.6667ZM55.8643 16.5322C53.9149 16.5322 52.6046 15.8292 52.6046 14.1034C52.6046 12.3697 53.9149 11.6667 55.8643 11.6667C57.8057 11.6667 59.124 12.3697 59.124 14.1034C59.124 15.8292 57.8057 16.5322 55.8643 16.5322ZM55.8643 15.3897C57.1266 15.3897 57.7498 15.0782 57.7498 14.1034C57.7498 13.1208 57.1266 12.8092 55.8643 12.8092C54.594 12.8092 53.9708 13.1208 53.9708 14.1034C53.9708 15.0782 54.594 15.3897 55.8643 15.3897ZM64.0624 12.8891H61.8334V14.2473C61.8334 15.158 62.0091 15.3897 62.84 15.3897C63.2715 15.3897 63.5111 15.3897 64.0624 15.3098V16.4124C63.607 16.4923 63.0877 16.5322 62.4565 16.5322C61.2422 16.5322 60.4592 16.0768 60.4592 15.0382V12.8891H59.2208V11.7466H60.4592V10.7719L61.8334 10.3804V11.7466H64.0624V12.8891Z" fill="#2A81C4" />
                                        </svg>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
