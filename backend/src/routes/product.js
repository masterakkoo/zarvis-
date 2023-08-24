const express = require("express")
const router = new express.Router();
const Item = require("../models/item")
router.get("/ak1", (req, res) => {
    res.send("we")
})

router.post("/product", async (req, res) => {
    const _id = req.body._id;
    // res.send(_id)
    try {

        const ans = await Item.find({ _id });
        console.log(ans);
        return res.json({ success: true, Res: ans });
    }
    catch (err) {
        res.send("some error occured..")
    }
})

module.exports = router;