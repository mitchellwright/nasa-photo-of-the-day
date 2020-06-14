import React from "react";
import "../App.css";

const SharingButtons = props => {
    return (
        <button><a href="https://twitter.com">Share to {`${props.website.charAt(0).toUpperCase()}${props.website.slice(1)}`}</a></button>
    );
};

export default SharingButtons;