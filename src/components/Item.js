import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const ItemButton = styled.button`
  height: 100px;
  width: 100px;
`;

const Item = (props) => {
  const purchaseQuant = props.name.toLowerCase();
  return (
    <ItemButton onClick={() => props.handleClick()}>
      <p>{props.name}</p>
      <p>{props.value}</p>
      <p>{props.cost}</p>
      <p>{props.purchasedItems[purchaseQuant]}</p>
    </ItemButton>
  );
};

export default Item;
