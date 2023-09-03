import React, { useState, createContext, useContext, useReducer, useEffect } from 'react'


const cartStateContext = createContext();
const cartDipatchContext = createContext();
const product1 = createContext();
const setproduct1 = createContext();
const add1 = createContext();
const setadd1 = createContext();
const s1 = createContext();
const sset1 = createContext();
const filter1 = createContext();
const setfilter1 = createContext();



function Usacontextreducer({ children }) {


    // const [state, dipatch] = useReducer(reducer, []);
    const [s, sset] = useState("")
    const [product, setproduct] = useState([])
    const [add, setadd] = useState({ address: "", state: "", city: "", no: "", ano: "" });
    const [filter, setfilter] = useState([" ", " "]);
    // console.log(product)
    return (

        <product1.Provider value={product}>
            <setproduct1.Provider value={setproduct}>
                <add1.Provider value={add}>
                    <setadd1.Provider value={setadd}>
                        <s1.Provider value={s}>
                            <filter1.Provider value={filter}>
                                <setfilter1.Provider value={setfilter}>
                                    <sset1.Provider value={sset}>
                                        {children}
                                    </sset1.Provider>
                                </setfilter1.Provider>
                            </filter1.Provider>
                        </s1.Provider>
                    </setadd1.Provider>
                </add1.Provider>
            </setproduct1.Provider >
        </product1.Provider>


    )
}

export default Usacontextreducer;
export const product = () => useContext(product1)
export const setproduct = () => useContext(setproduct1)
export const add = () => useContext(add1)
export const setadd = () => useContext(setadd1)
export const s = () => useContext(s1)
export const sset = () => useContext(sset1)
export const filter2 = () => useContext(filter1);
export const setfilter2 = () => useContext(setfilter1);
