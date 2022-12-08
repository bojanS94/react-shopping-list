import React from "react";
import { IShoppingItem } from "../interfaces/interfaces";

interface Props {
  item: IShoppingItem;
}

const ShoppingList = ({ item }: Props) => {
  return <div>{item.itemName}</div>;
};

export default ShoppingList;
