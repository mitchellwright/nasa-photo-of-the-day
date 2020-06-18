import React from "react";
import "../App.css";

const Image = props => {
    return <img src={props.src} alt="POTD" className="text-center"/>
};

export default Image;