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
  const updatePurchaseQuant = props.purchasedItems[0][purchaseQuant];
  return (
    <ItemButton
      onClick={() => props.handleClick(props.name, props.cost, props.value)}
    >
      <p>{props.name}</p>
      <p>{props.value}</p>
      <p>{props.cost}</p>
      <p>{updatePurchaseQuant}</p>
    </ItemButton>
  );
};

export default Item;
