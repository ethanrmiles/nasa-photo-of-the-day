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

