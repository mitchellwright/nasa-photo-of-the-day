import React from "react";
import "../App.css";



const Video = props => {
    return (
        <iframe width="560" height="315" src={props.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="POTD"></iframe>
    );
};

export default Video;