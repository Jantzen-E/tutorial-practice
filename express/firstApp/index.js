const express = require("express");
const app = express();
// console.dir(app);

app.use(() => {
    console.log("we got a new request")
})

app.listen(5000, () => {
    console.log("listening on port 5000!");
})