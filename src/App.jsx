import React, {Component, useEffect} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import bullshot from './bullshot'
import Home from './pages/Home';
import Lordwif from './pages/Lordwif';
import Finalized from './pages/Finalized';
import Error from './pages/Error';
import web3 from "./web3.js";
import axios from "axios";
import alert from "bootstrap/js/src/alert.js";

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            account: null, // Store the connected account address in the state
            shortAccount: null,
            transaction: false,
            token: null,
        };
    }


    componentDidMount() {
        this.checkExistingConnection();
    }

    checkExistingConnection = async () => {
        if (window.ethereum) {
            try {
                // Check if MetaMask is connected
                const accounts = await window.ethereum.request({method: 'eth_accounts'});
                if (accounts.length > 0) {
                    const account = accounts[0];
                    this.setState({account});
                    // Save to local storage
                    localStorage.setItem('connectedAccount', this.state.account);
                    this.shortHandAccount(account)
                } else {
                    // No accounts connected
                    this.setState({account: null});
                }
            } catch (error) {
                console.error('Error checking MetaMask connection:', error);
            }
        }
    }
    shortHandAccount = (account) => {
        const shortAccount = `${account.slice(0, 3)}...${account.slice(-3)}`;
        this.setState({shortAccount});
        console.log(this.state.shortAccount)
    }
    connectWallet = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        if (window.ethereum) {
            try {
                // Request account access
                const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
                const account = accounts[0]; // Get the first account address

                // Check the current network
                const chainId = await window.ethereum.request({method: 'eth_chainId'});

                // Sepolia network ID is '0xaa36a7'
                const sepoliaChainId = '0xaa36a7';

                if (chainId === sepoliaChainId) {
                    this.setState({account});
                    // Save to local storage
                    localStorage.setItem('connectedAccount', this.state.account);
                    this.shortHandAccount(account)

                    window.location.reload()
                    // Create a shortened version of the account address


                } else {
                    alert('Please switch to the Sepolia network in MetaMask.');
                }
            } catch (error) {
                console.error('Error connecting to MetaMask:', error);
                alert('Error connecting to MetaMask. Please make sure MetaMask is installed and try again.');
            }
        } else {
            // MetaMask is not installed
            alert('MetaMask is not installed. Please install MetaMask to continue.');
        }
    }
    disconnectWallet = async () => {


        try {
            if (window.ethereum && window.ethereum.isMetaMask) {
                // MetaMask does not provide a direct method to disconnect the wallet
                // You can prompt the user to disconnect their wallet manually from MetaMask

                // Display a message indicating that the wallet should be manually disconnected
                alert('Please disconnect your wallet in MetaMask.');

                // Optionally, reload the page to clear any cached data and reset the state
            } else {
                alert('MetaMask is not installed');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    }

    //launch Token Functionality
    crateToken = async (event) => {
        // event.preventDefault();
        const accounts = await web3.eth.getAccounts();

        // // Check if the user has connected a wallet
        if (accounts.length === 0) {
            alert('Please connect your wallet.');
            return;
        }


        let name = document.getElementById('name').value;
        let symbol = document.getElementById('symbol').value;
        let description = document.getElementById('description').value;
        let website = document.getElementById('website').value;
        let twitter = document.getElementById('twitter').value;
        let telegram = document.getElementById('telegram').value;
        let icon = document.getElementById('icon').files[0]; // Get the selected file


        if (name == '') {
            alert("Name Required")
            return;
        }

        if (symbol == '') {
            alert("Symbol Required")
            return;

        }

        this.setState({transaction: true});


        // Call the smart contract's createToken method
        const receipt = await bullshot.methods.createToken(name, symbol).send({
            from: accounts[0]
        });

        console.log(receipt)
        // Handle the receipt to extract the token address
        const tokenAddressCreated = receipt.events.TokenCreated.returnValues.tokenAddress
        console.log('Token Address:', tokenAddressCreated);


        const formData = new FormData();
        formData.append('name', name);
        formData.append('symbol', symbol);
        formData.append('description', description);
        formData.append('website', website);
        formData.append('twitter', twitter);
        formData.append('telegram', telegram);
        formData.append('icon', icon);
        formData.append('address', tokenAddressCreated);
        formData.append('wallet', accounts[0]);
        //


        // Send POST request
        axios.post('http://localhost:8000/api/tokens', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }


        })
            .then(response => {
                this.setState({transaction: false});
                window.location.reload();
            })
            .catch(error => {
                console.error('Error adding token:', error);
            });


    }

    buyToken = async (event) => {

        const accounts = await web3.eth.getAccounts();
        // // Check if the user has connected a wallet
        if (accounts.length === 0) {
            alert('Please connect your wallet.');
            return;
        }
        let tokenAddress = '0x4e4B0c300E2A792b5e4E9C200ed3470762D92aA6'

        let amount = document.getElementById('amount-eth').value;
        let tokenAmount = '100000000'; // Example: 100 tokens
        const requiredEth = await bullshot.methods.calculateRequiredEth(tokenAddress, tokenAmount).call();

        const requiredEthInWei = web3.utils.toWei(requiredEth.toString(), 'ether');
        console.log(requiredEthInWei)



        try {
            const receipt = await bullshot.methods.buy(tokenAddress, web3.utils.toWei(amount,'ether')).send({
                from: accounts[0],
                value: requiredEthInWei, // ETH sent with the transaction
                gas: 8000000
            });

            // Log the transaction hash
            console.log('Transaction successful!');
            console.log('Transaction:', receipt);
            console.log('Transaction hash:', receipt.transactionHash);
        } catch (error) {
            console.error('Transaction failed:', error);
        }


    }

    render() {
        // Define the router configuration
        const router = createBrowserRouter([
            {
                path: '/',
                element: <Home onClick={this.connectWallet} accountStatus={this.state.account}
                               shortAccount={this.state.shortAccount} onDisconnect={this.disconnectWallet}/>,
                errorElement: <Error/>
            },
            {
                path: "/tokens/:address",
                element: <Lordwif onClick={this.connectWallet} accountStatus={this.state.account}
                                  shortAccount={this.state.shortAccount} onDisconnect={this.disconnectWallet}
                                  buyToken={this.buyToken}
                />,
                errorElement: <Error/>
            },
            {
                path: '/finalized',
                element: <Finalized onClick={this.connectWallet} accountStatus={this.state.account}
                                    shortAccount={this.state.shortAccount} onDisconnect={this.disconnectWallet}
                                    crateToken={this.crateToken}
                                    transaction={this.state.transaction}
                />,
                errorElement: <Error/>
            },
        ]);

        return (
            <RouterProvider router={router}/>
        );
    }
}

export default App;


//   const accounts = await web3.eth.getAccounts();
//
//   // Check if the user has connected a wallet
//   if (accounts.length === 0) {
//       alert('Please connect your wallet.');
//       return;
//   }
//   // Call the smart contract's createToken method
// const address  =  await bullshot.methods.createToken("SADA", "OR").send({
//       from: accounts[0]
//   });

// axios.get('http://127.0.0.1:8000/api/tokens')
//     .then(response => {
//         console.log(response.data)
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });