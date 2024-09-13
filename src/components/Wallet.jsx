import { useMemo } from 'react';

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    SolongWalletAdapter,
    AlphaWalletAdapter,
    MathWalletAdapter

} from '@solana/wallet-adapter-wallets';

import {
    WalletModalProvider,
    // WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';


export default function Wallet() {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(
        () => [
            // new PhantomWalletAdapter(),
            // new SolflareWalletAdapter({ network }),
            // new SolongWalletAdapter(),
            // new AlphaWalletAdapter(),
            // new MathWalletAdapter(),
        ],

        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton />
                    {/* <WalletDisconnectButton /> */}
                    { /* Your app's components go here, nested within the context providers. */}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}