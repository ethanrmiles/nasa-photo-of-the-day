import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Title (props)  {
    const {title} = props
    console.log(title)
    return (
        <>
        <h1>{title}</h1>
        <button>More</button>
        </>
    )
}
