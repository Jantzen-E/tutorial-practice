//axios is built on top of fetch and it is a little easier to use
// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log('error!', err)
//     })


//async function with axios
const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    }
    catch(e) {
        console.log('error!', err) 
    }
}