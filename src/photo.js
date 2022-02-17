import React, {useState, useEffect} from "react";

export default function Photo (props) {
    const {photo} = props
    console.log(props.photo)
    return (
        <>
        <div className="bg-img">
            { props.photo.media_type ==='image'?<img src={props.photo.url} type={props.photo.media_type} width='800' height='400'></img>:<iframe title={props.photo.title} src={props.photo.url} type={props.photo.media_type} width='800' height='400' /> }
        </div>
        <div className="content-container" >
            <div className="meta" >
                <div className="meta-child">
                    <h2>{props.photo.date}</h2>
                </div>
                <div className="meta-child">
                    <h2>{props.photo.copyright}</h2>
                </div>
            </div>
           <div className="title-wrapper">
               <div className="title-container" >
                    <h1>{props.photo.title}</h1>
                </div>
                <div className="more-container" >
                     <button>More</button>
                </div>
            </div>
            <div className="details-container">
                <p>{props.photo.explanation}</p>
            </div>
        </div>
        </>
    )
}