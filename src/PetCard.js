import React from "react";

const PetCard = props => {
  return (
    <div className="Card">
      <h1>{props.title}</h1>
      <h3>{props.date}</h3>
      <img src={props.imgUrl} alt="Space" />
      <p>{props.details}</p>
      
    </div>
  );
};

export default PetCard;
