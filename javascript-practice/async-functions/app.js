// async function hello() {

// }

// const sing = async () => {
//     throw new Error('oh uh')
//     return "la la la la"
// }

// sing()
//     .then(data => {
//         console.log('promise resolved with:', data)
//     })
//     .catch(err => {
//         console.log('oh uh, there is an error', err)
//     })


const login = async (username, password) => {
    if (!username || !password) throw 'Missing credentials'
    if (password === 'dogfeet') return 'Welcome'
    throw 'invalid password'
}

login('adfdfdf', 'dogfeet')
    .then(msg => {
        console.log('logged in')
        console.log(msg)
    })
    .catch(err => {
        console.log("error")
        console.log(err)
    })