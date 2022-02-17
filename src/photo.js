import React, {useState, useEffect} from "react";
import Details from './details'
import styled, {keyframes } from 'styled-components';

const StyledBG = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 0;
    
`
const StyledMeta = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2%;
    color: ${pr => pr.theme.black};
   background-color: ${pr => pr.theme.white};
   margin-top: 5%;
   margin-bottom: 5%;
    z-index: 1;
    width: 60%;
    border-radius: 15px;
    opacity: 80%;
`
const StyledTitle = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 0 2%;
color: ${pr => pr.theme.white};
z-index: 1;
border-radius: 15px;
opacity: 80%;
padding: 15px;

transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${pr => pr.theme.white};
    color: ${pr => pr.theme.black}
  }
`
const StyledContentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 0 5%;

`
const StyledDetails = styled.div`
z-index: 1;
color: ${pr => pr.theme.black};
background-color: ${pr => pr.theme.white};
border-radius: 15px;
opacity: 80%;
padding: 0 1%;
`

export default function Photo (props) {
    const { photo } = props
    const [showDetails, setShowDetails] = useState(null);

const toggleDetails = () => {
    setShowDetails(!showDetails)
}
    return (
        <>
        <StyledBG className="bg-img">
            { props.photo.media_type ==='image'?<img src={props.photo.url} type={props.photo.media_type} ></img>:<iframe title={props.photo.title} src={props.photo.url} type={props.photo.media_type} width='800' height='400' /> }
        </StyledBG>
        <StyledContentContainer className="content-container" >
            <StyledMeta className="meta" >
                <div className="meta-child">
                    <h2>{props.photo.date}</h2>
                </div>
                <div className="meta-child">
                    <h2>{props.photo.copyright}</h2>
                </div>
            </StyledMeta>
           <StyledTitle className="title-wrapper">
               <div className="title-container" >
                    <h1>{props.photo.title}</h1>
                </div>
                <div className="more-container" >
                     <button onClick={toggleDetails} >{showDetails?'hide':'more'}</button>
                </div>
            </StyledTitle>
            <StyledDetails className="details-container">
                {
                showDetails &&  <Details { ...photo } />
                }
            </StyledDetails>
        </StyledContentContainer>
        </>
    )
}