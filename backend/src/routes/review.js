const express = require("express")
const router = new express.Router();
const Item = require("../models/item")
router.get("/ak", (req, res) => {
    res.send("wdwefwe")
})

router.post("/getorder/review", async (req, res) => {
    const _id = req.body._ID;
    const name = req.body.name;
    const message = req.body.message;
    const Date = req.body.Date;
    const r1 = req.body.r1;
    const r2 = req.body.r2;
    const r3 = req.body.r3;
    const r4 = req.body.r4;

    const obj = {
        name: name,
        message: message,
        Date: Date,
        r1: r1,
        r2: r2,
        r3: r3,
        r4: r4
    }
    
    const options = { upsert: true };
   
    try {
        // const ans = await Item.find({ _id: _ID })
        const ans = await Item.updateOne({ _id }, { $push: { review: obj } }, { options });
        console.log(ans);
        return res.json({ success: true, Res: ans });
    }
    catch (err) {
        res.send("some error occured..")
    }
})

module.exports = router;