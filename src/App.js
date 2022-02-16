import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Date from './date';
import Title from './title';
import Details from './details';
import Copyright from "./copyright";
import Image from './image'






function App() {
  const [nasa, setNasa] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=kQBHCeiY2MJggG1irHwhJcjNG66syvtUH1UZDGvA')
  .then(res => {setNasa(res.data);})
    .catch(err => console.error(err))
    
  }, []);
 
  return (
    <div className="App">
     <div className="meta-data">
      <Date date={nasa.date} />
      <Copyright  copyright ={nasa.copyright} />
     </div>
    <div className="title-container">
      <Title title={nasa.title} />
    </div>
    <div className="image-container">
      <Image imageUrl ={nasa.url} />
    </div>
    <div className="details-container">
      <Details details={nasa.explanation} />
    </div>
    </div>
  
  );
}

export default App;



/*  
copyright: "Hawk Wolinski"

date: "2022-02-16"

explanation: "What's that on the Sun? Although it may look like a flowing version of the Eiffel Tower, it is a solar prominence that is actually much bigger -- about the height of Jupiter. The huge prominence emerged about ten days ago, hovered over the Sun's surface for about two days, and then erupted -- throwing a coronal mass ejection (CME) into the Solar System. The featured video, captured from the astrophotographer's backyard in Hendersonville, Tennessee, USA, shows an hour time-lapse played both forwards and backwards. That CME did not impact the Earth, but our Sun had unleashed  other recent CMEs that not only triggered Earthly auroras, but puffed out the Earth's atmosphere enough to cause just-launched Starlink satellites to fall back. Activity on the Sun, including sunspots, prominences, CMEs and flares, continues to increase as the Sun evolves away from a deep minimum in its 11-year magnetic cycle.   Birthday Surprise: What picture did APOD feature on your birthday? (post 1995)"

title: "Eiffel Tower Prominence on the Sun"

url: "https://www.youtube.com/embed/liapnqj9GDc?rel=0"
*/


/* 
useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=kQBHCeiY2MJggG1irHwhJcjNG66syvtUH1UZDGvA')
.then(res => {setNasa(res.data);})
  .catch(err => console.error(err))
  .finally(console.log(nasa))
}, []);
*/