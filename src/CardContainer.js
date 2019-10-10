import React, { useState, useEffect } from "react";
import axios from "axios";
import PicCard from "./PicCard";
import styled from "styled-components";

const CardContainer = () => {
  const [picData, setPicData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=edEuQlx4bPExbTdg5g9uWZJ5BCaKGSGuhBhUYxAA&date=1999-10-20`)
      .then(response => {
        console.log(response.data);
        setPicData(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Wrapper>
      <PicCard title={picData.title} imgUrl={picData.hdurl} details={picData.explanation} imageDate={picData.date} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
width: 40%;
margin: 0 auto;
border-radius: 5px;
background-color: lightGrey;
`

export default CardContainer;
