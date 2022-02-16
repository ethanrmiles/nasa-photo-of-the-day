import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Details (props)  {
    const {details} = props
    return (
         <h3>{details}</h3>
    )
}


