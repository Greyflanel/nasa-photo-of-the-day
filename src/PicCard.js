import React from "react";
import Date from "./Date";
import styled from "styled-components";

const PicCard = props => {
  console.log(props)
  
  return (
    <div className="Card">
      <Title>{props.title}</Title>
      <Date date={props.imageDate}/>
      <Image src={props.imgUrl} alt="Space" />
      <Text>{props.details}</Text>
    </div>
  );
};

const Image = styled.img`
width: 95%;
height: 450px;
border-radius: 5px;
box-shadow: 4px 5px purple;
`
const Text = styled.p`
font-size: small;
padding: 10px;
`
const Title = styled.h1`
font-size: 2rem;
  margin: 10px;
  color: purple;
`
export default PicCard;
