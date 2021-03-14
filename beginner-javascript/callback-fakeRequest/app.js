// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(')
//         }
//         else {
//             success(`Here is your data from ${url}`)
//         }
//     }, delay)
// }

// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             }
//             else {
//                 resolve(`Here is your data from ${url}`)
//             }
//         }, delay)
//     })
// }

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            }
            else {
                resolve(`Here is your data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try{
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    }
    catch (e) {
        console.log('you caught an error')
        console.log('error is :', e)
    }
}


//refresh the page when you are in the console to see that the request can either be fullfilled or rejected
//this is the long way to write promises which are nested
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('it worked for page 1')
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('it worked again for page 2')
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('it worked for page 3')
//                     })
//                     .catch(() => {
//                         console.log('error on page 3')
//                     })
//             })
//             .catch(() => {
//                 console.log('another error on page 2')
//             })
//     })
//     .catch(() => {
//         console.log('OH NO!! ERROR on page 1')
//     })


//this is the shorter way to write the same code above, if a request is rejected, it falls through
//to the .catch at the very end
//the difference is you use the keyword return in each .then statement so that nesting is not necessary
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log('it worked')
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log('it worked for page 2')
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log('it worked for page 3')
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log('oh no, a request failed')
//         console.log(err)
//     })

//this is an example of callback hell as well
//each function has a success callback and a failure callback
//you nest callbacks inside of the success callbacks for a sequential request one after another
// fakeRequestCallback('books.com/page1', function(response) {
//     console.log('it worked')
//     console.log(response)
//     fakeRequestCallback('books.com/page2', function(response) {
//         console.log('it worked again!')
//         console.log(response)
//         fakeRequestCallback('books.com/page3', function(response) {
//             console.log('it worked for the 3rd time')
//             console.log(response)
//         }, function(err) {
//             console.log('error from the 3rd request', err)
//         })
//     }, function(err) {
//             console.log('error from the 2nd request', err)
//     })
// }, function(err) {
//     console.log('ERROR!!', err)
// })