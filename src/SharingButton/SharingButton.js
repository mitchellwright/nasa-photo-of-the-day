import React from "react";
import "../App.css";
import { Button } from 'reactstrap';

const SharingButtons = props => {
    return (
        <a href="https://twitter.com"><Button color="primary">Share to {`${props.website.charAt(0).toUpperCase()}${props.website.slice(1)}`}</Button></a>
    );
};

export default SharingButtons;