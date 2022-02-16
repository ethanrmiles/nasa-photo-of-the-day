import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Meta (props) {
    const {date} = props;
    console.log(date)
    // const [copyright, setCopyright] = props
    return (
        <div class='meta-container'>
            <h2>{date}</h2>
            {/* <h2>${props.copyright}</h2> */}
        </div>
    )
}
