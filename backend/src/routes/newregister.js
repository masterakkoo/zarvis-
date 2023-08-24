const express = require("express")
const router = new express.Router();
const User = require("../models/user")
const CItem = require("../models/cart")
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Item = require("../models/item")

const jwtsecret = "jhhhhvbvgfbvyrgiuwrebfjbrvjbrrrfvf";
const Order = require("../models/order")

router.get("/hey", (req, res) => {
    res.send("Hello exxprss router")
})
router.post("/register1", async (req, res) => {
    const { fname, lname, email, password, con_password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const secpass = await bcrypt.hash(password, salt);
    // console.log(secpass)
    try {
        const u = await User.find({ email })
        // console.log(u.length)
        if (u.length == 0) {
            const rest = await User.create({ fname, lname, email, password: secpass, con_password: secpass });
            res.json({ success: true, create: true })
        }
        else

            res.json({ success: true, found: true })
    }
    catch (err) {
        console.log("error")

        res.send("data req denied")
    }
})
router.post("/login1", async (req, res) => {
    const { email, password } = req.body;
    try {
        const rest = await User.find({ email });
        // console.log(rest)
        // res.send(rest[0].password)
        const pas = await bcrypt.compare(password, rest[0].password)
        // res.send(pas)
        if (pas == true) {

            const data = {
                user: {
                    id: rest._id
                }
            }
            const authtoken = jwt.sign(data, jwtsecret);
            return res.json({ success: true, authToken: authtoken, Name: (rest[0].fname + " " + rest[0].lname), email: rest[0].email })
        }
        else {
            return res.json({ success: false, message: "incoorect details" })
        }
    }
    catch {
        res.send("not found");
    }
})

router.post("/getitems", async (req, res) => {
    await res.send(global.items);
})
router.post("/setcart", async (req, res) => {
    const data = req.body;
    try {

        const rest = await CItem.create(data);
        // console.log(rest)
        return res.json({ success: true })
    }
    catch (err) {
        console.log("error")

        res.send("data req denied")
    }
})
router.post("/getcart", async (req, res) => {
    const email = req.body.email;
    try {

        const rest = await CItem.find({ email });
        // console.log(rest)
        return res.json({ success: true, cartitem: rest })
    }
    catch (err) {
        console.log("error")
        res.send("data req denied")
    }
})
router.post("/removecart", async (req, res) => {
    const _id = req.body.id;
    try {

        const rest = await CItem.deleteOne({ _id });
        // console.log(rest)
        return res.json({ success: true, rest: rest })
        // res.send(rest)
    }
    catch (err) {
        console.log("error")
        res.send("data req denied")
    }
})
router.post("/order", async (req, res) => {
    const data = req.body;
    try {

        const rest = await Order.create(data);
        return res.json({ success: true })
    }
    catch (err) {
        // console.log("error")

        res.send("data req denied")
    }
})
router.post("/getaddress", async (req, res) => {
    const email = req.body.email;
    try {

        const rest = await User.find({ email });
        // console.log(rest)
        return res.json({ success: true, Res: rest })
    }
    catch (err) {
        console.log("error")
        res.send("data req denied")
    }
})

router.post("/address", async (req, res) => {
    const data = req.body;
    const arr = ["Uttar Pradesh", "Punjab", "Uttarakhand"]
    const arr2 = ["Kanpur", "Bhatinda", "Nanital"]

    try {

        const rest = await User.findOneAndUpdate({ email: data.email }, {
            $set: {
                address: data.address,
                state: arr[data.state - 2],
                city: arr2[data.city - 2],
                mobile_no: data.no,
                alternate_no: data.ano,
            }
        });
        return res.json({ success: true })
    }
    catch (err) {
        console.log("error")

        res.send("data req denied")
    }
})
router.post("/getorder", async (req, res) => {

    try {
        const email = req.body.email;
        const rest = await Order.find({ email }).sort([['Date', -1]]).sort([['time', -1]]);
        return res.json({ success: true, Res: rest })
    }
    catch (err) {
        // console.log("error")
        res.send("data req denied")
    }
})
router.post("/search", async (req, res) => {
    const word = req.body.word;
    try {

        const rest = await Item.aggregate([
            {
                $search: {
                    index: "default",
                    text: {
                        query: word,
                        path: {
                            wildcard: "*"
                        }
                    }
                }
            }
        ]);
        return res.json({ success: true, Res: rest })
    }
    catch (err) {

        res.send("data req denied")
    }
})
router.post("/quicknav", async (req, res) => {
    const f1 = req.body.cat;
    const f2 = req.body.com;
    // res.send("akaash");
    try {
        const ans = await Item.find({ $and: [{ category: f1 }, { company: f2 }] });
        // console.log(ans);
        return res.json({ success: true, Res: ans });
    }
    catch (err) {
        res.send(err);
    }
})


module.exports = router;