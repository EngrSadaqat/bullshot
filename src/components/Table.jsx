import React from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import transactionicon1 from "../assets/img/transantion-icon1.svg"
import transactionicon2 from "../assets/img/transantion-icon2.svg"
import transactionicon3 from "../assets/img/transantion-icon3.svg"
import dateicon from "../assets/img/date.svg"
import tblcomnicon from "../assets/img/tablecommonicon.svg"
import txnicon from "../assets/img/txnicon.svg"
import makericon1 from "../assets/img/makericon1.svg"
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Table() {
  const transactionOneData = [
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Buy",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Buy",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Buy",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
  ];
  const transactionTwoData = [
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Buy",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Buy",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Buy",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
  ];
  const transactionThreeData = [
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Buy",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Buy",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Sell",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
    {
      date: "1h 24m ago",
      type: "Buy",
      usd: "95.96",
      lordwif: "649,098",
      sol: "0.5004",
      price: "$0.0001477",
      maker: "XBdjBE",
      txn: txnicon,
    },
  ];
  return (
    <div className='lord-table'>
      <Tab.Container defaultActiveKey="first">
        <div className="table-area mt-4">
          <Nav className="tab-navs d-flex">
            <Nav.Item>
              <Nav.Link eventKey="first">
                <span> <img src={transactionicon1} alt="" /> Transaction</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                <img src={transactionicon2} alt="" /> Transaction
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="three">
                <img src={transactionicon3} alt="" />  Transaction
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="table-wrapper">
                <div className="table eight-column-table">
                  <div className="table-item thead d-flex align-items-center justify-content-between">
                    <div className="th"><img src={dateicon} alt="" /> date</div>
                    <div className="th sml"> <img src={tblcomnicon} alt="" /> TYPE</div>
                    <div className="th"> <img src={tblcomnicon} alt="" /> USD</div>
                    <div className="th"> <img src={tblcomnicon} alt="" /> LORDWIF</div>
                    <div className="th"> <img src={tblcomnicon} alt="" /> SOL</div>
                    <div className="th">PRICE</div>
                    <div className="th"> <img src={tblcomnicon} alt="" /> MAKER</div>
                    <div className="th sml text-center">TXN</div>
                  </div>

                  {transactionOneData.map((item, index) => (
                    <div className={`table-item tbody d-flex align-items-center justify-content-between ${item.type == "Sell" || item.type == "sell" ? "sell" : "buy"}`} key={index}>
                      <div className="td date">{item.date}</div>
                      <div className="td sml">
                        {item.type}
                      </div>
                      <div className="td">{item.usd}</div>
                      <div className="td">{item.lordwif}</div>
                      <div className="td">{item.sol}</div>
                      <div className="td">{item.price}</div>
                      <div className="td maker"><img src={makericon1} alt="" /> <span>{item.maker} <ProgressBar now={100} /></span>  <img src={tblcomnicon} alt="" />  </div>
                      <div className="td sml text-center justify-content-center"><a href="#"><img src={item.txn} alt="" /></a></div>
                    </div>
                  ))}
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="table eight-column-table">
                <div className="table-item thead d-flex align-items-center justify-content-between">
                  <div className="th date"><img src={dateicon} alt="" /> date</div>
                  <div className="th sml"> <img src={tblcomnicon} alt="" /> TYPE</div>
                  <div className="th"> <img src={tblcomnicon} alt="" /> USD</div>
                  <div className="th"> <img src={tblcomnicon} alt="" /> LORDWIF</div>
                  <div className="th"> <img src={tblcomnicon} alt="" /> SOL</div>
                  <div className="th">PRICE</div>
                  <div className="th"> <img src={tblcomnicon} alt="" /> MAKER</div>
                  <div className="th sml text-center">TXN</div>
                </div>

                {transactionTwoData.map((item, index) => (
                  <div className={`table-item tbody d-flex align-items-center justify-content-between ${item.type == "Sell" || item.type == "sell" ? "sell" : "buy"}`} key={index}>
                    <div className="td date"><span>{item.date}</span></div>
                    <div className="td sml">
                      {item.type}
                    </div>
                    <div className="td">{item.usd}</div>
                    <div className="td">{item.lordwif}</div>
                    <div className="td">{item.sol}</div>
                    <div className="td">{item.price}</div>
                    <div className="td maker"><img src={makericon1} alt="" /> <span>{item.maker} <ProgressBar now={100} /></span>  <img src={tblcomnicon} alt="" />  </div>
                    <div className="td sml text-center justify-content-center"><a href="#"><img src={item.txn} alt="" /></a></div>
                  </div>
                ))}
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="three">
              <div className="table eight-column-table">
                <div className="table-item thead d-flex align-items-center justify-content-between">
                  <div className="th"><img src={dateicon} alt="" /> date</div>
                  <div className="th sml"> <img src={tblcomnicon} alt="" /> TYPE</div>
                  <div className="th"> <img src={tblcomnicon} alt="" /> USD</div>
                  <div className="th"> <img src={tblcomnicon} alt="" /> LORDWIF</div>
                  <div className="th"> <img src={tblcomnicon} alt="" /> SOL</div>
                  <div className="th">PRICE</div>
                  <div className="th"> <img src={tblcomnicon} alt="" /> MAKER</div>
                  <div className="th sml text-center">TXN</div>
                </div>

                {transactionThreeData.map((item, index) => (
                  <div className={`table-item tbody d-flex align-items-center justify-content-between ${item.type == "Sell" || item.type == "sell" ? "sell" : "buy"}`} key={index}>
                    <div className="td"><span>{item.date}</span></div>
                    <div className="td sml">
                      {item.type}
                    </div>
                    <div className="td">{item.usd}</div>
                    <div className="td">{item.lordwif}</div>
                    <div className="td">{item.sol}</div>
                    <div className="td">{item.price}</div>
                    <div className="td maker"><img src={makericon1} alt="" /> <span>{item.maker} <ProgressBar now={100} /></span>  <img src={tblcomnicon} alt="" />  </div>
                    <div className="td sml text-center justify-content-center"><a href="#"><img src={item.txn} alt="" /></a></div>
                  </div>
                ))}
              </div>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  )
}
