//this is data from cryptonator.com on the current price of bitcoin
const data = `{"ticker":{"base":"BTC","target":"USD","price":"59614.87367624","volume":"31366.52152138","change":"-22.47271929"},"timestamp":1615785182,"success":true,"error":""}`

//use this function to turn JSON into a javascript object
console.log(JSON.parse(data));

//create a variable called parsedData
const parsedData = JSON.parse(data);

//use parsed data to drill down into the object to extract certain pieces of information
console.log(parsedData.ticker.price)


//if you want to take a javascript object and turn it into JSON, use JSON.stringify()
//this is useful if you want to send info to an api and the api expects JSON
//multiple languages can take JSON and parse it into their own specific language ie python
const dog = {
    breed: 'lab',
    color: 'black',
    isAlive: true,
    owner: undefined
}

console.log(JSON.stringify(dog));

//AJAX = asynchronous javascript and xml
//AJAJ = asyrchronous javascript and json
//most people who say ajax are still referring to json becuase it is more common now than xml
//xml is writing custom tag names, for example
/*
<movies>
    <movie>
        <producer>
        <title>
        <actors>
        <director>
    </movie>
    <movie>
        <producer>
        <title>
        <actors>
        <director>
    </movie>
    <movie>
        <producer>
        <title>
        <actors>
        <director>
    </movie>
</movies>
*/