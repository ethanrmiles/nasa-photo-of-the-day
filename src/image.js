import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Image (props) {
    const {imageUrl} = props
    return (
        <iframe width='800' height='400' src={imageUrl} title='nasa image' />
    )
}