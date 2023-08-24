const express = require("express")
const router = new express.Router();
const Item = require("../models/item")
router.get("/sort1", (req, res) => {
    res.send("we")
})

router.post("/sort", async (req, res) => {
    const category = req.body.category;
    var basis = req.body.basis;
    const in_dec = req.body.order;
    if (basis == "Brand") {
        basis = "company"
    }
    try {


        if (basis == "price") {
            const i_d = (in_dec == "ascending") ? 1 : -1;
            const ans = await Item.aggregate([
                { $match: { category: category } },
                {
                    $unwind: "$options"

                },
                {
                    $sort: {
                        "options.price": 1
                    }
                }

            ]);



            return res.json({ success: true, Res: ans });
        }

        const ans = await Item.find({ category }).sort([[basis, in_dec]]);
        return res.json({ success: true, Res: ans });
    }

    catch (err) {
        res.send("some error occured..")
    }
})

module.exports = router;