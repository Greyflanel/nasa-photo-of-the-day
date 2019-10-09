import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetCard from './PetCard';

const PicList = () => {
const [picData, setPicData] = useState([]);

useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=edEuQlx4bPExbTdg5g9uWZJ5BCaKGSGuhBhUYxAA')
    .then(response => {
        console.log(response.data);
        setPicData(response.data)
    }).catch(error => console.log(error))
}, [])

return (
<div> 
 <PetCard  title={picData.title} imgUrl={picData.hdurl} details={picData.explanation}
 date={picData.date} />

</div>
)
}

export default PicList;