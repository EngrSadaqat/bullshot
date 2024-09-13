import Header from '../components/Header'
import {useState, useEffect} from 'react';
import axios from "axios";

import {Col, Container, Nav, Row} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import HeaderBottom2 from "../components/HeaderBottom2"
import {TfiWorld} from "react-icons/tfi";
import {FaTelegramPlane, FaTwitter} from "react-icons/fa";
import homeimg from "../assets/img/home-img.png"
import {MdArrowBackIos, MdArrowForwardIos} from "react-icons/md";
import {Link} from 'react-router-dom';
import card1 from "../assets/img/tabimg/1.png"
import card2 from "../assets/img/tabimg/2.png"
import card3 from "../assets/img/tabimg/3.png"
import card4 from "../assets/img/tabimg/4.png"
import card5 from "../assets/img/tabimg/5.png"
import card6 from "../assets/img/tabimg/6.png"
import card7 from "../assets/img/tabimg/7.png"
import card8 from "../assets/img/tabimg/8.png"
import card9 from "../assets/img/tabimg/9.png"

export default function Home({onClick, accountStatus, shortAccount, onDisconnect}) {
    // State to hold the tokens
    const [tokens, setTokens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        axios.get('http://127.0.0.1:8000/api/tokens')
            .then(response => {
                setTokens(response.data); // Update state with fetched data
                setLoading(false); // Set loading to false

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        // Optional cleanup function to run when the component unmounts
        return () => {
            console.log('Component will unmount');
        };
    }, []); // The empty dependency array means this effect runs only once on mount

    const homecards = [
      {
        title: "Solcasino",
        website: "Solcasino.io",
        des: "Solcasino is Top 1 crypto casino on Solana network. Payable directly to your Web3...",
        social: [
          {
            icon: <TfiWorld />,
            url: ""
          },
          {
            icon: <FaTelegramPlane />,
            url: ""
          },
          {
            icon: <FaTwitter />,
            url: ""
          }
        ],
        price: "36.26",
        hour: 1,
        txn: 187,
        vol: 45,
        bar: 10,
        image: card1,
      },

    ]

    // const homecards =homecard

    return (
        <div className='home'>
            <Container>
                <Header onClick={onClick} accountStatus={accountStatus} shortAccount={shortAccount}
                        onDisconnect={onDisconnect}/>
                <HeaderBottom2/>
                <div className="home-banner">
                    <Row className='justify-content-between align-items-center'>
                        <Col xs={12} md={8} lg={7}>
                            <div className="home-banner-left">
                                <h1 className='text-center text-md-start'>Discover the next trending token before <span>everyone else!</span>
                                </h1>
                                <div className="btns d-flex align-items-center gap-3">
                                    <Link to="/finalized"
                                          className='btn d-flex align-items-center gap-2 me-1 bg-primary'>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_56_96)">
                                                <path
                                                    d="M1.69366 2.25659C1.24655 2.25659 0.817746 2.43421 0.501587 2.75037C0.185429 3.06653 0.0078125 3.49533 0.0078125 3.94244L0.0078125 6.19025H6.75122C6.90026 6.19025 7.04319 6.24945 7.14858 6.35484C7.25397 6.46022 7.31317 6.60316 7.31317 6.7522C7.31317 7.03654 7.40308 7.47599 7.65709 7.8289C7.88973 8.15258 8.2831 8.43805 8.99902 8.43805C9.71495 8.43805 10.1083 8.15258 10.341 7.8289C10.595 7.47599 10.6849 7.03654 10.6849 6.7522C10.6849 6.60316 10.7441 6.46022 10.8495 6.35484C10.9549 6.24945 11.0978 6.19025 11.2468 6.19025H17.9902V3.94244C17.9902 3.49533 17.8126 3.06653 17.4965 2.75037C17.1803 2.43421 16.7515 2.25659 16.3044 2.25659H1.69366Z"
                                                    fill="white"/>
                                                <path
                                                    d="M17.9902 7.31415H11.7515C11.6701 7.73532 11.5004 8.13446 11.2536 8.48525C10.8119 9.0989 10.0813 9.56195 8.99902 9.56195C7.91671 9.56195 7.18617 9.0989 6.74448 8.48525C6.49761 8.13446 6.32792 7.73532 6.24659 7.31415H0.0078125V14.0576C0.0078125 14.5047 0.185429 14.9335 0.501587 15.2496C0.817746 15.5658 1.24655 15.7434 1.69366 15.7434H16.3044C16.7515 15.7434 17.1803 15.5658 17.4965 15.2496C17.8126 14.9335 17.9902 14.5047 17.9902 14.0576V7.31415Z"
                                                    fill="white"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_56_96">
                                                    <rect width="17.9824" height="17.9824" fill="white"
                                                          transform="translate(0.0078125 0.00878906)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Launch your token
                                    </Link>
                                    <a href="#" className='btn d-flex align-items-center gap-2 me-1'>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.5 9C17.5 13.6955 13.6941 17.5 9 17.5C4.30591 17.5 0.5 13.6955 0.5 9C0.5 4.30728 4.30591 0.5 9 0.5C13.6941 0.5 17.5 4.30728 17.5 9ZM9.2281 3.31048C7.36025 3.31048 6.16895 4.09732 5.23347 5.49574C5.11228 5.67691 5.15282 5.92125 5.32653 6.05297L6.51581 6.95472C6.6942 7.09 6.94838 7.05782 7.08699 6.88199C7.69926 6.10541 8.11908 5.65508 9.051 5.65508C9.75119 5.65508 10.6173 6.10572 10.6173 6.78469C10.6173 7.29798 10.1935 7.56158 9.50219 7.94919C8.69592 8.40116 7.62903 8.9637 7.62903 10.371V10.5081C7.62903 10.7352 7.81319 10.9194 8.04032 10.9194H9.95968C10.1868 10.9194 10.371 10.7352 10.371 10.5081V10.4624C10.371 9.48687 13.2221 9.44625 13.2221 6.80645C13.2221 4.81848 11.16 3.31048 9.2281 3.31048ZM9 11.8105C8.13064 11.8105 7.42339 12.5177 7.42339 13.3871C7.42339 14.2564 8.13064 14.9637 9 14.9637C9.86936 14.9637 10.5766 14.2564 10.5766 13.3871C10.5766 12.5177 9.86936 11.8105 9 11.8105Z"
                                                fill="white"/>
                                        </svg>
                                        How dose it work?
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="home-banner-right">
                                <img src={homeimg} alt=""/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="home-tabs position-relative z-0">
                    <Tab.Container defaultActiveKey="first">
                        <Row>
                            <div className="table-area mt-4">
                                <div
                                    className='tab-navigation overflow-auto d-flex align-items-center gap-3 justify-content-lg-between'>
                                    <Nav className="tab-navs d-flex">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">
                        <span className='d-flex align-items-center gap-2'>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7" clipPath="url(#clip0_56_169)">
                              <path
                                  d="M8.75 0.745614C8.75 0.00186437 7.79219 -0.278448 7.37031 0.338114C3.5 5.9953 9 6.24999 9 8.99999C9 10.1134 8.09031 11.0144 6.97344 10.9997C5.87437 10.9856 5 10.0694 5 8.9703V6.29811C5 5.61999 4.17281 5.29093 3.70531 5.78249C2.86875 6.66124 2 8.16655 2 9.99999C2 13.3084 4.69156 16 8 16C11.3084 16 14 13.3084 14 9.99999C14 4.67843 8.75 3.96874 8.75 0.745614Z"
                                  fill="white"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_56_169">
                                <rect width="16" height="16" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          Trending</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                        <span className='d-flex align-items-center gap-2'>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7">
                              <path
                                  d="M6 2.5C6 1.67188 6.67188 1 7.5 1H8.5C9.32812 1 10 1.67188 10 2.5V13.5C10 14.3281 9.32812 15 8.5 15H7.5C6.67188 15 6 14.3281 6 13.5V2.5ZM1 8.5C1 7.67188 1.67188 7 2.5 7H3.5C4.32812 7 5 7.67188 5 8.5V13.5C5 14.3281 4.32812 15 3.5 15H2.5C1.67188 15 1 14.3281 1 13.5V8.5ZM12.5 3H13.5C14.3281 3 15 3.67188 15 4.5V13.5C15 14.3281 14.3281 15 13.5 15H12.5C11.6719 15 11 14.3281 11 13.5V4.5C11 3.67188 11.6719 3 12.5 3Z"
                                  fill="white"/>
                            </g>
                          </svg>
                          Top</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="three">
                        <span className='d-flex align-items-center gap-2'>
                          <svg width="17" height="10" viewBox="0 0 17 10" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.4178 2.33332C10.9261 2.33332 10.5289 1.9361 10.5289 1.44443C10.5289 0.952764 10.9261 0.555542 11.4178 0.555542H15.8622C16.3539 0.555542 16.7511 0.952764 16.7511 1.44443V5.88888C16.7511 6.38054 16.3539 6.77776 15.8622 6.77776C15.3706 6.77776 14.9733 6.38054 14.9733 5.88888V3.59165L10.2678 8.29443C9.92055 8.64165 9.35666 8.64165 9.00944 8.29443L6.08444 5.36943L2.26777 9.18332C1.92055 9.53054 1.35666 9.53054 1.00944 9.18332C0.662218 8.8361 0.662218 8.27221 1.00944 7.92499L5.45389 3.48054C5.80111 3.13332 6.365 3.13332 6.71222 3.48054L9.64 6.40832L13.715 2.33332H11.4178Z"
                                fill="white"/>
                          </svg>
                          Rising
                        </span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="four">
                        <span className='d-flex align-items-center gap-2'>
                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.7512 1C16.7512 4.55 14.1075 7.48438 10.6825 7.9375C10.4606 6.26875 9.72622 4.7625 8.64185 3.58437C9.83872 1.44687 12.1262 0 14.7512 0H15.7512C16.3043 0 16.7512 0.446875 16.7512 1ZM0.751221 3C0.751221 2.44687 1.1981 2 1.75122 2H2.75122C6.61685 2 9.75122 5.13438 9.75122 9V10V15C9.75122 15.5531 9.30435 16 8.75122 16C8.1981 16 7.75122 15.5531 7.75122 15V10C3.8856 10 0.751221 6.86562 0.751221 3Z"
                                fill="white"/>
                          </svg>
                          New
                        </span>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="five">
                        <span className='d-flex align-items-center gap-2'>
                          <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.75122 0C2.30435 0 2.75122 0.446875 2.75122 1V1.5L4.90747 0.9625C6.0981 0.665625 7.35435 0.803125 8.45435 1.35312C9.90122 2.07812 11.6043 2.07812 13.0512 1.35312L13.3512 1.20312C13.995 0.878125 14.7512 1.34687 14.7512 2.06562V10.8062C14.7512 11.2219 14.4918 11.5969 14.1012 11.7437L13.0168 12.15C11.5731 12.6906 9.96685 12.6062 8.58872 11.9187C7.40435 11.325 6.0481 11.1781 4.7606 11.5L2.75122 12V15C2.75122 15.5531 2.30435 16 1.75122 16C1.1981 16 0.751221 15.5531 0.751221 15V12.5V10.4375V2V1C0.751221 0.446875 1.1981 0 1.75122 0ZM2.75122 5.84688L4.75122 5.4125V7.45937L2.75122 7.89375V9.9375L4.27622 9.55625C4.4356 9.51562 4.59185 9.48125 4.75122 9.45312V7.45937L5.96685 7.19688C6.22622 7.14062 6.48872 7.11875 6.75122 7.13125V5.13125C7.17622 5.14375 7.60122 5.2125 8.01372 5.33125L8.75122 5.54688V7.63125L7.4481 7.24687C7.21997 7.18125 6.9856 7.14062 6.75122 7.12813V9.35938C7.43247 9.41875 8.10435 9.56875 8.75122 9.80937V7.63125L9.4606 7.84062C9.88247 7.96562 10.3137 8.04062 10.7512 8.07187V6.0625C10.5075 6.0375 10.2637 5.99062 10.0262 5.92188L8.75122 5.54688V3.60938C8.34497 3.49062 7.94497 3.33437 7.55747 3.14062C7.30122 3.0125 7.02935 2.92188 6.75122 2.86562V5.12813C6.34497 5.11563 5.93872 5.15312 5.54185 5.24062L4.75122 5.4125V3.0625L2.75122 3.5625V5.84688ZM10.7512 10.4906C11.2762 10.5375 11.8106 10.4688 12.3137 10.2781L12.7512 10.1156V7.87187L12.5043 7.92812C11.9293 8.0625 11.3387 8.10625 10.7512 8.06875V10.4875V10.4906ZM12.7512 5.82188V3.60625C12.0981 3.79688 11.4262 3.89062 10.7512 3.89062V6.0625C11.1856 6.10625 11.6262 6.07812 12.0543 5.98125L12.7512 5.81875V5.82188Z"
                                fill="white"/>
                          </svg>
                          Finalized
                        </span>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <div className="othertab d-flex align-items-center">
                                        <p className='d-flex align-items-center gap-2'>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.2492 0H0.750872C0.0846841 0 -0.251472 0.808313 0.220559 1.28034L6 7.06066V13.5C6 13.7447 6.1194 13.9741 6.3199 14.1144L8.8199 15.8638C9.31312 16.2091 10 15.8592 10 15.2494V7.06066L15.7796 1.28034C16.2507 0.80925 15.9168 0 15.2492 0Z"
                                                    fill="white"/>
                                            </svg>
                                            Age
                                        </p>
                                        <p className='d-flex align-items-center gap-2'>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.2492 0H0.750872C0.0846841 0 -0.251472 0.808313 0.220559 1.28034L6 7.06066V13.5C6 13.7447 6.1194 13.9741 6.3199 14.1144L8.8199 15.8638C9.31312 16.2091 10 15.8592 10 15.2494V7.06066L15.7796 1.28034C16.2507 0.80925 15.9168 0 15.2492 0Z"
                                                    fill="white"/>
                                            </svg>
                                            Min Progress
                                        </p>
                                        <p className='d-flex align-items-center gap-2'>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.2492 0H0.750872C0.0846841 0 -0.251472 0.808313 0.220559 1.28034L6 7.06066V13.5C6 13.7447 6.1194 13.9741 6.3199 14.1144L8.8199 15.8638C9.31312 16.2091 10 15.8592 10 15.2494V7.06066L15.7796 1.28034C16.2507 0.80925 15.9168 0 15.2492 0Z"
                                                    fill="white"/>
                                            </svg>
                                            Max Progress
                                        </p>

                                    </div>
                                </div>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {tokens.map((item, idx) => (
                                                <Col xs={12} md={6} lg={4} className='card-item' key={idx}>
                                                    <Link to={`/tokens/${item.address}`}>
                                                        <div className="tabs-card p-4">
                                                            <div className='d-flex align-items-center gap-4 mb-4'>
                                                                <div className="image">
                                                                    <img src={item.icon} alt="" />
                                                                </div>
                                                                <div className="card-body">
                                                                    <p className='title mb-2 fw-semibold'>
                                                                        <span>{item.name}</span> - {item.website}
                                                                    </p>
                                                                    <p>{item.description}</p>
                                                                    <div className="social d-flex align-items-center justify-content-center gap-2">
                                                                        {/*{item.social.map((itm, iddx) => (*/}
                                                                        {/*    <Link to={`${itm.url}`} key={iddx}>*/}
                                                                        {/*        {itm.icon}*/}
                                                                        {/*    </Link>*/}
                                                                        {/*))}*/}
                                                                        {item.telegram && (
                                                                            <Link to={item.telegram} key="telegram">
                                                                                <FaTelegramPlane />
                                                                            </Link>
                                                                        )}


                                                                        {item.twitter && (
                                                                            <Link to={item.twitter} key="telegram">
                                                                                <FaTwitter />
                                                                            </Link>
                                                                        )}



                                                                        {item.website && (
                                                                            <Link to={item.website} key="telegram">
                                                                                <TfiWorld />
                                                                            </Link>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex align-items-center justify-content-between'>
                                                                <p className='value'>{item.price}K</p>
                                                                <div className='d-flex align-items-center gap-3'>
                                                                    <p className='d-flex align-items-center gap-1 icon-value'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                                            <g opacity="0.7" clipPath="url(#clip0_155_101)">
                                                                                <path d="M10.5012 1.18018C10.5012 3.39893 8.84888 5.23291 6.70825 5.51611C6.56958 4.47314 6.1106 3.53174 5.43286 2.79541C6.18091 1.45947 7.6106 0.555176 9.25122 0.555176H9.87622C10.2219 0.555176 10.5012 0.834473 10.5012 1.18018ZM0.501221 2.43018C0.501221 2.08447 0.780518 1.80518 1.12622 1.80518H1.75122C4.16724 1.80518 6.12622 3.76416 6.12622 6.18018V6.80518V9.93018C6.12622 10.2759 5.84692 10.5552 5.50122 10.5552C5.15552 10.5552 4.87622 10.2759 4.87622 9.93018V6.80518C2.46021 6.80518 0.501221 4.84619 0.501221 2.43018Z" fill="white"/>
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_155_101">
                                                                                    <rect width="10" height="10" fill="white" transform="translate(0.501221 0.555176)"/>
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        {item.date}
                                                                    </p>
                                                                    <div className='d-flex align-items-center gap-2'>
                                                                        <p className='d-flex align-items-center gap-1 icon-value'>
                                                                            <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M8.73633 3.49658C8.98047 3.25244 8.98047 2.85596 8.73633 2.61182L6.86133 0.736816C6.61719 0.492676 6.2207 0.492676 5.97656 0.736816C5.73242 0.980957 5.73242 1.37744 5.97656 1.62158L6.78516 2.43018H0.794922C0.449219 2.43018 0.169922 2.70947 0.169922 3.05518C0.169922 3.40088 0.449219 3.68018 0.794922 3.68018H6.78516L5.97656 4.48877C5.73242 4.73291 5.73242 5.12939 5.97656 5.37354C6.2207 5.61768 6.61719 5.61768 6.86133 5.37354L8.73633 3.49854V3.49658ZM2.22656 10.3716C2.4707 10.6157 2.86719 10.6157 3.11133 10.3716C3.35547 10.1274 3.35547 9.73096 3.11133 9.48682L2.30469 8.68018H8.29492C8.64062 8.68018 8.91992 8.40088 8.91992 8.05518C8.91992 7.70947 8.64062 7.43018 8.29492 7.43018H2.30469L3.11328 6.62158C3.35742 6.37744 3.35742 5.98096 3.11328 5.73682C2.86914 5.49268 2.47266 5.49268 2.22852 5.73682L0.353516 7.61182C0.109375 7.85596 0.109375 8.25244 0.353516 8.49658L2.22852 10.3716H2.22656Z" fill="white"/>
                                                                            </svg>
                                                                            {item.txn} txn
                                                                        </p>
                                                                        <p className='icon-value'>/</p>
                                                                        <p className='icon-value'> ${item.vol}k vol</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-100 bar'>
                                                                <div className='bar-value h-100' style={{ width: `${item.bar}%` }}></div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second"> <Row>
                                        {
                                            homecards.map((item, idx) => (
                                                <Col xs={12} md={6} lg={4} className='card-item' key={idx}>
                                                    <Link to="/lordwif">
                                                        <div className="tabs-card p-4">
                                                            <div className='d-flex align-items-center gap-4 mb-4'>
                                                                <div className="image"><img src={item.image} alt=""/>
                                                                </div>
                                                                <div className="card-body ">
                                                                    <p className='title mb-2 fw-semibold'>
                                                                        <span>{item.title}</span>-{item.website} </p>
                                                                    <p>{item.des}</p>
                                                                    <div
                                                                        className="social d-flex align-items-center justify-content-center gap-2">
                                                                        {
                                                                            item.social.map((itm, iddx) => (
                                                                                <Link to={`${itm.url}`}
                                                                                      key={iddx}>{itm.icon}</Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className='d-flex align-items-center justify-content-between '>
                                                                <p className='value'>{item.price}K</p>
                                                                <div className='d-flex align-items-center gap-3'>
                                                                    <p className='d-flex align-items-center gap-1 icon-value'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             width="11" height="11" viewBox="0 0 11 11"
                                                                             fill="none">
                                                                            <g opacity="0.7"
                                                                               clipPath="url(#clip0_155_101)">
                                                                                <path
                                                                                    d="M10.5012 1.18018C10.5012 3.39893 8.84888 5.23291 6.70825 5.51611C6.56958 4.47314 6.1106 3.53174 5.43286 2.79541C6.18091 1.45947 7.6106 0.555176 9.25122 0.555176H9.87622C10.2219 0.555176 10.5012 0.834473 10.5012 1.18018ZM0.501221 2.43018C0.501221 2.08447 0.780518 1.80518 1.12622 1.80518H1.75122C4.16724 1.80518 6.12622 3.76416 6.12622 6.18018V6.80518V9.93018C6.12622 10.2759 5.84692 10.5552 5.50122 10.5552C5.15552 10.5552 4.87622 10.2759 4.87622 9.93018V6.80518C2.46021 6.80518 0.501221 4.84619 0.501221 2.43018Z"
                                                                                    fill="white"/>
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_155_101">
                                                                                    <rect width="10" height="10"
                                                                                          fill="white"
                                                                                          transform="translate(0.501221 0.555176)"/>
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        {item.hour}h
                                                                    </p>
                                                                    <div className='d-flex align-items-center gap-2'>
                                                                        <p className='d-flex align-items-center gap-1 icon-value'>
                                                                            <svg width="9" height="11"
                                                                                 viewBox="0 0 9 11" fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M8.73633 3.49658C8.98047 3.25244 8.98047 2.85596 8.73633 2.61182L6.86133 0.736816C6.61719 0.492676 6.2207 0.492676 5.97656 0.736816C5.73242 0.980957 5.73242 1.37744 5.97656 1.62158L6.78516 2.43018H0.794922C0.449219 2.43018 0.169922 2.70947 0.169922 3.05518C0.169922 3.40088 0.449219 3.68018 0.794922 3.68018H6.78516L5.97656 4.48877C5.73242 4.73291 5.73242 5.12939 5.97656 5.37354C6.2207 5.61768 6.61719 5.61768 6.86133 5.37354L8.73633 3.49854V3.49658ZM2.22656 10.3716C2.4707 10.6157 2.86719 10.6157 3.11133 10.3716C3.35547 10.1274 3.35547 9.73096 3.11133 9.48682L2.30469 8.68018H8.29492C8.64062 8.68018 8.91992 8.40088 8.91992 8.05518C8.91992 7.70947 8.64062 7.43018 8.29492 7.43018H2.30469L3.11328 6.62158C3.35742 6.37744 3.35742 5.98096 3.11328 5.73682C2.86914 5.49268 2.47266 5.49268 2.22852 5.73682L0.353516 7.61182C0.109375 7.85596 0.109375 8.25244 0.353516 8.49658L2.22852 10.3716H2.22656Z"
                                                                                    fill="white"/>
                                                                            </svg>
                                                                            {item.txn} txn
                                                                        </p>
                                                                        <p className='icon-value'>/</p>
                                                                        <p className='icon-value'> ${item.vol}k vol</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-100 bar'>
                                                                <div className='bar-value h-100'
                                                                     style={{width: `${item.bar}%`}}></div>
                                                            </div>
                                                        </div>

                                                    </Link>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="three"> <Row>
                                        {
                                            homecards.map((item, idx) => (
                                                <Col xs={12} md={6} lg={4} className='card-item' key={idx}>
                                                    <Link to="/lordwif">
                                                        <div className="tabs-card p-4">
                                                            <div className='d-flex align-items-center gap-4 mb-4'>
                                                                <div className="image"><img src={item.image} alt=""/>
                                                                </div>
                                                                <div className="card-body ">
                                                                    <p className='title mb-2 fw-semibold'>
                                                                        <span>{item.title}</span>-{item.website} </p>
                                                                    <p>{item.des}</p>
                                                                    <div
                                                                        className="social d-flex align-items-center justify-content-center gap-2">
                                                                        {
                                                                            item.social.map((itm, iddx) => (
                                                                                <Link to={`${itm.url}`}
                                                                                      key={iddx}>{itm.icon}</Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className='d-flex align-items-center justify-content-between '>
                                                                <p className='value'>{item.price}K</p>
                                                                <div className='d-flex align-items-center gap-3'>
                                                                    <p className='d-flex align-items-center gap-1 icon-value'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             width="11" height="11" viewBox="0 0 11 11"
                                                                             fill="none">
                                                                            <g opacity="0.7"
                                                                               clipPath="url(#clip0_155_101)">
                                                                                <path
                                                                                    d="M10.5012 1.18018C10.5012 3.39893 8.84888 5.23291 6.70825 5.51611C6.56958 4.47314 6.1106 3.53174 5.43286 2.79541C6.18091 1.45947 7.6106 0.555176 9.25122 0.555176H9.87622C10.2219 0.555176 10.5012 0.834473 10.5012 1.18018ZM0.501221 2.43018C0.501221 2.08447 0.780518 1.80518 1.12622 1.80518H1.75122C4.16724 1.80518 6.12622 3.76416 6.12622 6.18018V6.80518V9.93018C6.12622 10.2759 5.84692 10.5552 5.50122 10.5552C5.15552 10.5552 4.87622 10.2759 4.87622 9.93018V6.80518C2.46021 6.80518 0.501221 4.84619 0.501221 2.43018Z"
                                                                                    fill="white"/>
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_155_101">
                                                                                    <rect width="10" height="10"
                                                                                          fill="white"
                                                                                          transform="translate(0.501221 0.555176)"/>
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        {item.hour}h
                                                                    </p>
                                                                    <div className='d-flex align-items-center gap-2'>
                                                                        <p className='d-flex align-items-center gap-1 icon-value'>
                                                                            <svg width="9" height="11"
                                                                                 viewBox="0 0 9 11" fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M8.73633 3.49658C8.98047 3.25244 8.98047 2.85596 8.73633 2.61182L6.86133 0.736816C6.61719 0.492676 6.2207 0.492676 5.97656 0.736816C5.73242 0.980957 5.73242 1.37744 5.97656 1.62158L6.78516 2.43018H0.794922C0.449219 2.43018 0.169922 2.70947 0.169922 3.05518C0.169922 3.40088 0.449219 3.68018 0.794922 3.68018H6.78516L5.97656 4.48877C5.73242 4.73291 5.73242 5.12939 5.97656 5.37354C6.2207 5.61768 6.61719 5.61768 6.86133 5.37354L8.73633 3.49854V3.49658ZM2.22656 10.3716C2.4707 10.6157 2.86719 10.6157 3.11133 10.3716C3.35547 10.1274 3.35547 9.73096 3.11133 9.48682L2.30469 8.68018H8.29492C8.64062 8.68018 8.91992 8.40088 8.91992 8.05518C8.91992 7.70947 8.64062 7.43018 8.29492 7.43018H2.30469L3.11328 6.62158C3.35742 6.37744 3.35742 5.98096 3.11328 5.73682C2.86914 5.49268 2.47266 5.49268 2.22852 5.73682L0.353516 7.61182C0.109375 7.85596 0.109375 8.25244 0.353516 8.49658L2.22852 10.3716H2.22656Z"
                                                                                    fill="white"/>
                                                                            </svg>
                                                                            {item.txn} txn
                                                                        </p>
                                                                        <p className='icon-value'>/</p>
                                                                        <p className='icon-value'> ${item.vol}k vol</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-100 bar'>
                                                                <div className='bar-value h-100'
                                                                     style={{width: `${item.bar}%`}}></div>
                                                            </div>
                                                        </div>

                                                    </Link>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four"> <Row>
                                        {
                                            homecards.map((item, idx) => (
                                                <Col xs={12} md={6} lg={4} className='card-item' key={idx}>
                                                    <Link to="/lordwif">
                                                        <div className="tabs-card p-4">
                                                            <div className='d-flex align-items-center gap-4 mb-4'>
                                                                <div className="image"><img src={item.image} alt=""/>
                                                                </div>
                                                                <div className="card-body ">
                                                                    <p className='title mb-2 fw-semibold'>
                                                                        <span>{item.title}</span>-{item.website} </p>
                                                                    <p>{item.des}</p>
                                                                    <div
                                                                        className="social d-flex align-items-center justify-content-center gap-2">
                                                                        {
                                                                            item.social.map((itm, iddx) => (
                                                                                <Link to={`${itm.url}`}
                                                                                      key={iddx}>{itm.icon}</Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className='d-flex align-items-center justify-content-between '>
                                                                <p className='value'>{item.price}K</p>
                                                                <div className='d-flex align-items-center gap-3'>
                                                                    <p className='d-flex align-items-center gap-1 icon-value'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             width="11" height="11" viewBox="0 0 11 11"
                                                                             fill="none">
                                                                            <g opacity="0.7"
                                                                               clipPath="url(#clip0_155_101)">
                                                                                <path
                                                                                    d="M10.5012 1.18018C10.5012 3.39893 8.84888 5.23291 6.70825 5.51611C6.56958 4.47314 6.1106 3.53174 5.43286 2.79541C6.18091 1.45947 7.6106 0.555176 9.25122 0.555176H9.87622C10.2219 0.555176 10.5012 0.834473 10.5012 1.18018ZM0.501221 2.43018C0.501221 2.08447 0.780518 1.80518 1.12622 1.80518H1.75122C4.16724 1.80518 6.12622 3.76416 6.12622 6.18018V6.80518V9.93018C6.12622 10.2759 5.84692 10.5552 5.50122 10.5552C5.15552 10.5552 4.87622 10.2759 4.87622 9.93018V6.80518C2.46021 6.80518 0.501221 4.84619 0.501221 2.43018Z"
                                                                                    fill="white"/>
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_155_101">
                                                                                    <rect width="10" height="10"
                                                                                          fill="white"
                                                                                          transform="translate(0.501221 0.555176)"/>
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        {item.hour}h
                                                                    </p>
                                                                    <div className='d-flex align-items-center gap-2'>
                                                                        <p className='d-flex align-items-center gap-1 icon-value'>
                                                                            <svg width="9" height="11"
                                                                                 viewBox="0 0 9 11" fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M8.73633 3.49658C8.98047 3.25244 8.98047 2.85596 8.73633 2.61182L6.86133 0.736816C6.61719 0.492676 6.2207 0.492676 5.97656 0.736816C5.73242 0.980957 5.73242 1.37744 5.97656 1.62158L6.78516 2.43018H0.794922C0.449219 2.43018 0.169922 2.70947 0.169922 3.05518C0.169922 3.40088 0.449219 3.68018 0.794922 3.68018H6.78516L5.97656 4.48877C5.73242 4.73291 5.73242 5.12939 5.97656 5.37354C6.2207 5.61768 6.61719 5.61768 6.86133 5.37354L8.73633 3.49854V3.49658ZM2.22656 10.3716C2.4707 10.6157 2.86719 10.6157 3.11133 10.3716C3.35547 10.1274 3.35547 9.73096 3.11133 9.48682L2.30469 8.68018H8.29492C8.64062 8.68018 8.91992 8.40088 8.91992 8.05518C8.91992 7.70947 8.64062 7.43018 8.29492 7.43018H2.30469L3.11328 6.62158C3.35742 6.37744 3.35742 5.98096 3.11328 5.73682C2.86914 5.49268 2.47266 5.49268 2.22852 5.73682L0.353516 7.61182C0.109375 7.85596 0.109375 8.25244 0.353516 8.49658L2.22852 10.3716H2.22656Z"
                                                                                    fill="white"/>
                                                                            </svg>
                                                                            {item.txn} txn
                                                                        </p>
                                                                        <p className='icon-value'>/</p>
                                                                        <p className='icon-value'> ${item.vol}k vol</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-100 bar'>
                                                                <div className='bar-value h-100'
                                                                     style={{width: `${item.bar}%`}}></div>
                                                            </div>
                                                        </div>

                                                    </Link>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="five"> <Row>
                                        {
                                            homecards.map((item, idx) => (
                                                <Col xs={12} md={6} lg={4} className='card-item' key={idx}>
                                                    <Link to="/lordwif">
                                                        <div className="tabs-card p-4">
                                                            <div className='d-flex align-items-center gap-4 mb-4'>
                                                                <div className="image"><img src={item.image} alt=""/>
                                                                </div>
                                                                <div className="card-body ">
                                                                    <p className='title mb-2 fw-semibold'>
                                                                        <span>{item.title}</span>-{item.website} </p>
                                                                    <p>{item.des}</p>
                                                                    <div
                                                                        className="social d-flex align-items-center justify-content-center gap-2">
                                                                        {
                                                                            item.social.map((itm, iddx) => (
                                                                                <Link to={`${itm.url}`}
                                                                                      key={iddx}>{itm.icon}</Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className='d-flex align-items-center justify-content-between '>
                                                                <p className='value'>{item.price}K</p>
                                                                <div className='d-flex align-items-center gap-3'>
                                                                    <p className='d-flex align-items-center gap-1 icon-value'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             width="11" height="11" viewBox="0 0 11 11"
                                                                             fill="none">
                                                                            <g opacity="0.7"
                                                                               clipPath="url(#clip0_155_101)">
                                                                                <path
                                                                                    d="M10.5012 1.18018C10.5012 3.39893 8.84888 5.23291 6.70825 5.51611C6.56958 4.47314 6.1106 3.53174 5.43286 2.79541C6.18091 1.45947 7.6106 0.555176 9.25122 0.555176H9.87622C10.2219 0.555176 10.5012 0.834473 10.5012 1.18018ZM0.501221 2.43018C0.501221 2.08447 0.780518 1.80518 1.12622 1.80518H1.75122C4.16724 1.80518 6.12622 3.76416 6.12622 6.18018V6.80518V9.93018C6.12622 10.2759 5.84692 10.5552 5.50122 10.5552C5.15552 10.5552 4.87622 10.2759 4.87622 9.93018V6.80518C2.46021 6.80518 0.501221 4.84619 0.501221 2.43018Z"
                                                                                    fill="white"/>
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_155_101">
                                                                                    <rect width="10" height="10"
                                                                                          fill="white"
                                                                                          transform="translate(0.501221 0.555176)"/>
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        {item.hour}h
                                                                    </p>
                                                                    <div className='d-flex align-items-center gap-2'>
                                                                        <p className='d-flex align-items-center gap-1 icon-value'>
                                                                            <svg width="9" height="11"
                                                                                 viewBox="0 0 9 11" fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M8.73633 3.49658C8.98047 3.25244 8.98047 2.85596 8.73633 2.61182L6.86133 0.736816C6.61719 0.492676 6.2207 0.492676 5.97656 0.736816C5.73242 0.980957 5.73242 1.37744 5.97656 1.62158L6.78516 2.43018H0.794922C0.449219 2.43018 0.169922 2.70947 0.169922 3.05518C0.169922 3.40088 0.449219 3.68018 0.794922 3.68018H6.78516L5.97656 4.48877C5.73242 4.73291 5.73242 5.12939 5.97656 5.37354C6.2207 5.61768 6.61719 5.61768 6.86133 5.37354L8.73633 3.49854V3.49658ZM2.22656 10.3716C2.4707 10.6157 2.86719 10.6157 3.11133 10.3716C3.35547 10.1274 3.35547 9.73096 3.11133 9.48682L2.30469 8.68018H8.29492C8.64062 8.68018 8.91992 8.40088 8.91992 8.05518C8.91992 7.70947 8.64062 7.43018 8.29492 7.43018H2.30469L3.11328 6.62158C3.35742 6.37744 3.35742 5.98096 3.11328 5.73682C2.86914 5.49268 2.47266 5.49268 2.22852 5.73682L0.353516 7.61182C0.109375 7.85596 0.109375 8.25244 0.353516 8.49658L2.22852 10.3716H2.22656Z"
                                                                                    fill="white"/>
                                                                            </svg>
                                                                            {item.txn} txn
                                                                        </p>
                                                                        <p className='icon-value'>/</p>
                                                                        <p className='icon-value'> ${item.vol}k vol</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-100 bar'>
                                                                <div className='bar-value h-100'
                                                                     style={{width: `${item.bar}%`}}></div>
                                                            </div>
                                                        </div>

                                                    </Link>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                                <nav aria-label="...">
                                    <ul className="pagination">
                                        <li className=" pre">
                                            <span
                                                className="page-link d-flex align-items-center gap-1 gap-md-2 me-1"> <MdArrowBackIos/> Previous</span>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item ">
                                            <span className="page-link ">2</span>
                                        </li>
                                        <li className="page-item ">
                                            <span className="page-link">3</span>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">..</a></li>
                                        <li className="page-item next">
                                            <a className="page-link d-flex align-items-center gap-1 gap-md-2 ms-1"
                                               href="#"> Next <MdArrowForwardIos/></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </Row>
                    </Tab.Container>
                </div>
            </Container>
        </div>
    )
}
