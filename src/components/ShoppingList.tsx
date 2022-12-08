import React from "react";
import { IShoppingItem } from "../interfaces/interfaces";

interface Props {
  item: IShoppingItem;
  completeItem(itemToDelete: string): void;
  itemIsDone(completed: number): void;
}

const ShoppingList = ({ item, completeItem }: Props) => {
  return (
    <div className={item.isDone ? "todo strike" : "todo"}>
      {item.itemName}{" "}
      <button onClick={() => completeItem(item.itemName)}>X</button>
    </div>
  );
};

export default ShoppingList;
