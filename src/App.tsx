import { ChangeEvent, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { IShoppingItem } from "./interfaces/interfaces";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [item, setItem] = useState<string>("");
  const [itemDone, setDoneItem] = useState<boolean>(false);
  const [shopItemList, setShoppingList] = useState<IShoppingItem[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "shoppingItem") setItem(event.target.value);
  };

  const addItem = (): void => {
    const newShopItem = { itemName: item, isDone: itemDone };
    setShoppingList([...shopItemList, newShopItem]);
    setItem("");
  };

  return (
    <div className="App">
      <div className="header-container">
        <input
          name="shoppingItem"
          type="text"
          placeholder="Enter new shopping item..."
          onChange={handleChange}
          value={item}
        />
        <button onClick={addItem}>Add new item</button>
      </div>
      <div className="toDoList">
        {shopItemList.map((item: IShoppingItem, key: number) => {
          return <ShoppingList key={key} item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
