import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { json, useNavigate } from "react-router-dom";
import Navbar from './compnents/Navbar'
import Header from './compnents/Header'
import Home from './compnents/Home'
import Registration from './compnents/Registration'
import { Router, Route, Routes } from "react-router-dom";
import React, { Component } from 'react';
import Login from './compnents/Login'
import Product from './compnents/Product'
import Slider from './compnents/Slider'
import Cart from './compnents/Cart'
import Card from './compnents/Card'
import Samsung from './compnents/Samsung'
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cartprovider from "./compnents/Usacontextreducer";
import Footer from './compnents/Footer'
import Smartwatch from './compnents/Smartwatch'
import AudioProducts from './compnents/AudioProducts'
import Address from './compnents/Address'
import Showaddress from './compnents/Showaddress'
import Orderplaced from './compnents/Orderplaced'
import Orders from "./compnents/Orders"
import OrderCard from './compnents/OrderCard'
import NOitem from './compnents/NOitem'
import Search from './compnents/Search'
import ShowFilter from './compnents/ShowFilter'
import Review from './compnents/Review';
import Loader from './compnents/Loader';
import New from "./compnents/New"


function App() {
  const [load, setload] = useState(-1);


  const navigate = useNavigate();



  const n1 = {
    "_id": "6441206ae878f70b48e32a29",
    "category": "Smart Watch",
    "company": "Boat",
    "model_name": "boAt Xtend Smartwatch with Alexa",
    "discount": 12,
    "discription": "Alexa- Alexa built-in Voice Assistant that sets reminders, alarms and answers questions from weather forecasts to live cricket scores at your command!\n            Screen Size- ;1.69\" big square colour LCD display with a round dial features complete capacitive touch experience to let you take control, effortlessly.\n            Watch Faces- Multiple watch faces with customizable options to match your OOTD, every day!\n            Brightness- The ambient light display allows automatic adjustment of brightness on the watch, suited to your environment\n            HR & SpO2- The watch comes with a stress monitor that reads your HR to indicate stress levels.It also monitors your heart rate and SpO2 (blood oxygen levels) to keep a tab on your overall health.\n            Sleep Monitor- Track all stages of sleep every night and keep a tab on your sleep health with the sleep monitoring feature on the watch.\n            Sports Friendly- Its 14 sports mode and 5 ATM dust, splash and sweat resistance makes it the perfect fitness companion to have.\n            Battery: Lasts upto 7 Days.\n            Supported Applications- HR, SpO2, Fitness Tracker, Text SMS, Pedometer, Calender, Alarm. Note: HR and SpO2 readings are not for medical usage\n            Inclusions- Watch Xtend, USB Magnetic Charging Cable, User Manual & Warranty Card",
    "availibilty": true,
    "options": [
      {
        "varient": "Blue",
        "price": 2399,
        "_id": "6441206ae878f70b48e32a2a"
      },
      {
        "varient": "Green",
        "price": 2599,
        "_id": "6441206ae878f70b48e32a2b"
      }
    ],
    "images": [
      "https://m.media-amazon.com/images/I/617ysOitciL._SY355_.jpg",
      "https://m.media-amazon.com/images/I/81OjaI0gY6L._SY355_.jpg",
      "https://m.media-amazon.com/images/I/61kP7eUTnbL._SY355_.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/acb3e9e5-79dd-4c69-b652-311ee89bc281.__CR0,0,1464,600_PT0_SX1464_V1___.png",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0e04217d-2c02-464c-ae41-689659fc1dbc.__CR0,0,1464,600_PT0_SX1464_V1___.png"
    ],
    "__v": 0
  }






  const [items, setitems] = useState([]);

  const Data = async () => {
    console.log("asgaregrer")
    try {
      const res = await fetch("http://localhost:4000/getitems",
        {
          method: "POST",
          headers: {
            "content-type": "application/json"
          }
        }
      );
      const ans = await res.json()
      console.log(ans);
      setitems(ans);
      setload(1);
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    Data();
  }, [])

  return (
    <>
      <Cartprovider>
        <Header />
        <Navbar />
        {/* <Slider /> */}
        <hr style={{ backgroundColor: "black", margin: "0px 10px" }} />
        <Routes>
          <Route path="/" element={(load == -1) ? <Loader /> : <Home items={items} />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />

          <Route path="/cart" element={(!localStorage.getItem("authToken")) ? <Login /> : <Cart />} />


          <Route path="/soaddress" element={<Showaddress />} />
          <Route path="/address" element={<Address />} />
          <Route path="/mobile" element={<Samsung
            items={items} />} />

          <Route path="/products/" element={<Smartwatch
            items={items} />} />
          <Route path="/audio" element={<AudioProducts
            items={items} />} />
          <Route path="/product/:_id" element={<Product
            category={n1.category}
            company={n1.company}
            model_name={n1.model_name}
            options={n1.options}
            discount={n1.discount}
            discription={n1.discription}
            images={n1.images} />} />
          <Route path='/orderplaced' element={<Orderplaced />} />

          <Route path="/orders" element={<Orders />} />
          <Route path="/noitem" element={<NOitem />} />
          <Route path="/search-item/:s1" element={<Search />} />
          <Route path="/show-filter/:f1/:f2" element={<ShowFilter />} />
          <Route path="/review/:i1/:i2" element={<Review />} />
        </Routes>
       
      </Cartprovider>


      <ToastContainer />
    </>
  )
}

export default App
