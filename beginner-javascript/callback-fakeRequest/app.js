const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        }
        else {
            success(`Here is your data from ${url}`)
        }
    }, delay)
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            }
            else {
                resolve(`Here is your data from ${url}`)
            }
        }, delay)
    })
}


fakeRequestCallback('books.com', function(response) {
    console.log('it worked')
    console.log(response)
}, function(err) {
    console.log('ERROR!!', err)
})