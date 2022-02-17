import React, {useState, useEffect} from "react";


export default function Date (props) {
    return (
        <div className='date-container'>
            <h2>{props.date.date}</h2>
        </div>
    )
}
