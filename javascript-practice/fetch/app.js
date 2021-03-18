//this is another way to fetch api's which is an improvement on xhr
//this is the promise version

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log('response, waiting to parse...', res)
//         return res.json()
//     })
//     .then(data => {
//         console.log('data parsed...')
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log('oh no! ERROR', e)
//     })


//this is the async function version of fetch
//type fetchBitcoinPrice() into the console and the response will come back with the bitcoin price

const fetchBitcoinPrice = async () => {
    try{
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json()
        console.log(data.ticker.price)
    }
    catch(e) {
        console.log('something went wrong', e)
    }
}