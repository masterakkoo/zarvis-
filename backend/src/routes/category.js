const express = require("express")
const router = new express.Router();
const Item = require("../models/item")
router.get("/categ", (req, res) => {
    res.send("we")
})
router.post("/category", async (req, res) => {
    const category = req.body.category;
    try {
        const ans = await Item.find({ category });
        return res.json({ "success": true, ans: ans })
    }
    catch (err) {
        res.send("some error occured..")
    }
})
module.exports = router;