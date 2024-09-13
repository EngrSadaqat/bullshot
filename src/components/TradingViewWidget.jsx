import React, { useEffect } from 'react';

const Chatv2 = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://s3.tradingview.com/tv.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            new window.TradingView.widget({
                autosize: true,
                symbol: 'BTC',
                interval: 'D',
                timezone: 'Etc/UTC',
                theme: 'dark',
                style: '1',
                locale: 'en',
                toolbar_bg: '#0F0E16',
                enable_publishing: false,
                withdateranges: true,
                hide_side_toolbar: false,
                allow_symbol_change: true,
                container_id: 'tradingview_12345'
            });
        };

        return () => {
            // Clean up script on component unmount
            document.body.removeChild(script);
        };
    }, []);

    return <div id="tradingview_12345" style={{ height: '695px', width: '100%'}}></div>;
};

export default Chatv2;
