import React from "react";
import Date from "./Date";

const PetCard = props => {
  return (
    <div className="Card">
      <h1>{props.title}</h1>
      <Date newDate={props.date}/>
      <img src={props.imgUrl} alt="Space" />
      <p>{props.details}</p>
      
    </div>
  );
};

export default PetCard;
