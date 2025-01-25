import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState(null);
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((response) => setCurrencyInfo(response[currency]));
        console.log(currencyInfo);
    }, [currency]);
    console.log(currencyInfo);
    
    return currencyInfo;
}

export default useCurrencyInfo;
