import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
// import Date from './date';
// import Title from './title';
// import Details from './details';
// import Copyright from "./copyright";
// import Image from './image'
import Photo from './photo'





function App() {
  const [nasa, setNasa] = useState();
  const [showDetails, setShowDetails] = useState(null);

const openDetails = () => {
  setShowDetails('show')
}
const closeDetails = () => {
  setShowDetails(null)
}
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=kQBHCeiY2MJggG1irHwhJcjNG66syvtUH1UZDGvA')
  .then(res => {
    setNasa(res.data);
  })
    .catch(err => console.error(err))
    
  }, []);
 
  return (
    <div className="App">
      { nasa && <Photo photo={nasa} /> }
    </div>
  );
}

export default App;



{/* <div className="App">
<div className="meta-data">
 <Date date={nasa} />
 <Copyright  copyright ={nasa} />
</div>
<div className="title-container">
 {/* <Title title={nasa} openDetails={openDetails} /> */}
// </div>
// <div className="image-container">
//  <Image imageUrl ={nasa} />
// </div>
// <div className="details-container">
//  {/* <Details details={nasa.explanation} /> */}
//  {showDetails === 'show'? <Details details={nasa} />: null }
// </div>
// </div> */}
