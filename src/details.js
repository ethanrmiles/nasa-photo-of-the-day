import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Details (props)  {
    const {photo} = props
    console.log(props.explanation)
    return (
       <p>{props.explanation}</p>
    )
}


