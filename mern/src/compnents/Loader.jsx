import ClipLoader from "react-spinners/ClipLoader";
import React from 'react'

function Loader() {
    const obj = {
        color: "black",
        with: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000029"
    }
    return (
        <div style={obj}>
            <ClipLoader color="#36d7b7" />
        </div>
    )
}

export default Loader;

