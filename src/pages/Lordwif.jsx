import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../components/HeaderBottom';
import HeaderTwo from '../components/HeaderTwo';
import LordBanner from '../components/LordBanner';
import Lordmaincontent from '../components/Lordmaincontent';
import Footer from '../components/Footer';
import axios from 'axios';
import web3 from "../web3.js";
import bullshot from '../bullshot'
import Web3 from "web3";
import Chatv2 from "../components/Chatv2.jsx";
export default function Lordwif({shortAccount,buyToken}) {
    const [historyData, setHistoryData] = useState([]);

    const { address } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [price, setPrice] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/tokens/${address}`);
                setToken(response.data);
            } catch (error) {
                // console.error('Error fetching data:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };





        const getTokenPrice = async (address) => {
            const priceInWei = await bullshot.methods.getTokenPrice(address).call();
            const priceInEth = web3.utils.fromWei(priceInWei, 'ether');
            setPrice(priceInEth)
            // console.log(priceInEth)
            // console.log(address)
        };


        const getTokenHistory = async () => {
            try {
                const web3 = new Web3('https://sepolia.infura.io/v3/1628b92bf54048a291245de76e44693b');
                const tokenAddress = '0x4e4B0c300E2A792b5e4E9C200ed3470762D92aA6'; // Replace with your token address
                const tokenABI = [
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "ticker",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "initialMint",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "allowance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC20InsufficientAllowance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "balance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC20InsufficientBalance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "approver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidApprover",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "receiver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidReceiver",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidSender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidSpender",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    },
                    {
                        "inputs": [],
                        "name": "admin",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            }
                        ],
                        "name": "allowance",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "approve",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "balanceOf",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "decimals",
                        "outputs": [
                            {
                                "internalType": "uint8",
                                "name": "",
                                "type": "uint8"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "mint",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "name",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "symbol",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "totalSupply",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "transfer",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "transferFrom",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ];


                const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);

                const fromBlock = 1; // Start block
                const toBlock = 'latest'; // End block, 'latest' means the most recent block

                const getPastEvents = async (fromBlock, toBlock) => {
                    try {
                        const events = await tokenContract.getPastEvents('Transfer', {
                            fromBlock: fromBlock,
                            toBlock: toBlock
                        });
                        return events;
                    } catch (error) {
                        console.error('Error fetching events:', error);
                        return [];
                    }
                };

                const processEvents = async (events) => {
                    // Fetch block details for each event in parallel
                    const blocks = await Promise.all(events.map(event => web3.eth.getBlock(event.blockNumber)));

                    // Process events to extract data
                    const data = events.map((event, index) => ({
                        time: Number(blocks[index].timestamp) * 1000, // Convert to milliseconds
                        value: web3.utils.fromWei(event.returnValues.value.toString(), 'ether')
                    }));
                    // Aggregate data into OHLC
                    const ohlcData = aggregateOHLC(data);
                    return ohlcData;
                };

                 const aggregateOHLC = (data) => {
                    const groupedData = groupDataByInterval(data, 'day'); // Group by day

                    return Object.keys(groupedData).map(key => {
                        const group = groupedData[key];
                        const open = group[0].value;
                        const close = group[group.length - 1].value;
                        const high = Math.max(...group.map(d => d.value));
                        const low = Math.min(...group.map(d => d.value));

                        return {
                            time: new Date(key).getTime() / 1000, // Convert to Unix timestamp
                            open,
                            high,
                            low,
                            close
                        };
                    });
                };

                const groupDataByInterval = (data, interval) => {
                    // Implement your grouping logic here
                    const grouped = {};
                    data.forEach(item => {
                        const date = new Date(item.time);
                        const intervalKey = date.toISOString().split('T')[0]; // Group by day
                        if (!grouped[intervalKey]) grouped[intervalKey] = [];
                        grouped[intervalKey].push(item);
                    });
                    return grouped;
                };

                // Fetch events and process them
                const events = await getPastEvents(fromBlock, toBlock);
                const processedData = await processEvents(events);
                // Set processed data to state or other variable
                console.log('Processed  data:', processedData);
                setHistoryData(processedData); // Store the processed data in state
            } catch (error) {
                console.error('Error in getTokenHistory function:', error);
            }
        };



        if (address) {
            fetchToken();
            getTokenPrice(address)
            getTokenHistory()

        }
        // Optional cleanup function
        return () => {
            // console.log('Component will unmount');
        };
    }, [address]); // Re-run effect when address changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <HeaderTwo />
            <HeaderBottom />
            {/*<LordBanner />*/}
            <Lordmaincontent token={token} shortAccount={shortAccount} buyToken={buyToken}  price={price} data={historyData}/>
            <Footer />
        </div>
    );
}
