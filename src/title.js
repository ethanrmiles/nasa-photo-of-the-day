import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Title (props)  {
    const {title} = props
    const {openDetails} = openDetails
    console.log(title)
    return (
        <>
        <h1>{title}</h1>
        {/* <button onClick={openDetails}>More</button> */}
        </>
    )
}
