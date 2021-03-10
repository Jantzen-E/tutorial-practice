const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('your fake data here');
            }
            reject('request error');
        }, 1000)
    })
}

fakeRequest('dogs/1')
.then((data) => {
    console.log('done with request')
    console.log(data)
})
.catch((err) => {
    console.log('request rejected')
    console.log(err)
})