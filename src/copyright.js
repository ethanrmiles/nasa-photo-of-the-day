import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Copyright (props) {
    const {copyright} = props;
    console.log(copyright)
    return (
        <div className="copyright-container">
            <h2>{copyright}</h2>
        </div>
    )
}