const mongoose = require("mongoose");
const Item = require("../models/item")
// const dotenv = require('dotenv');
// dotenv.config();s
// console.log(process.env.USER_COLL)
// const db = process.env.USER_COLL;

const db = "mongodb+srv://Akash:ImgPGXhcQTHdWcOi@cluster0.ffkbukn.mongodb.net/e-commerce?retryWrites=true&w=majority";




mongoose.connect(db).then(() => console.log("connection succesfull")).catch((err) => console.log(err));


const read = async () => {
    try {
        const rest = await Item.find({});
        global.items = rest;
    }
    catch (err) {
        console.log(err)
    }
}

const createdoc1 = async () => {
    try {
        const n1 = {
            category: "Audio Products",
            company: "Sony",
            model_name: "Sony WH-CH520, Wireless On-Ear headphones",
            discount: 4,
            discription: `With up to 50-hour battery life and quick charging, you’ll have enough power for multi-day road trips and long festival weekends.
            Great sound quality customizable to your music preference with EQ Custom on the Sony | Headphones Connect App.
            Boost the quality of compressed music files and enjoy streaming music with high quality sound through DSEE.
            Designed to be lightweight and comfortable for all-day use.
            Crystal clear hands-free calling with built-in mic.
            Multipoint connection allows you to quickly switch between two devices at once.
            Find your headphones easily with Fast Pair`,
            availibilty: true,
            options: [{
                varient: "Ocean Grey",
                price: 4599
            },
            {
                varient: "Blue Bliss",
                price: 4699
            }],
            images: ["https://m.media-amazon.com/images/I/41JACWT-wWL._SL1200_.jpg", "https://m.media-amazon.com/images/I/41gRLKXlONL._SL1200_.jpg", "https://m.media-amazon.com/images/I/51UBVW9enzL._SL1200_.jpg", "https://m.media-amazon.com/images/S/aplus-media-library-service-media/865f7b8f-bc3a-402f-ac67-0c4e2389a2b9.__CR0,0,1464,600_PT0_SX1464_V1___.jpg", "https://m.media-amazon.com/images/S/aplus-media-library-service-media/34d4cb8e-c04a-47d2-9a54-628ad0173b1d.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"]
        }

        const res = await Item.insertMany([n1]);


    }
    catch (err) {
        console.log(err)
    }
}
// createdoc1()
read();

