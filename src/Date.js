import React from "react";
import styled from "styled-components"

const Date = props => {
  return (
    <div>
      <PicDate>{props.date}</PicDate>
    </div>
  );
};

const PicDate = styled.h3`
margin: 10px;
font-size: 1rem;
`

export default Date;
