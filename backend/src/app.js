
const express = require("express")
const app = express();
// const dotenv = require('dotenv');
// dotenv.config();
const router1 = require("./routes/newregister")
const router2 = require("./routes/review")
const router3 = require("./routes/product")
const router4 = require("./routes/sort")
const router5 = require("./routes/category")


// console.log(process.env.USER_port)
// const port = process.env.USER_port
const port = 4000

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://zarvis-essential.netlify.app");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
})

require("./db/conn")
app.use(express.json())
app.use(router1);
app.use(router2);
app.use(router3);
app.use(router4);
app.use(router5);


app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(port, () => {
    console.log("listeing to the port at 5000")
})