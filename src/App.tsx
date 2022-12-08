import { ChangeEvent, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { IShoppingItem } from "./interfaces/interfaces";
import ShoppingList from "./components/ShoppingList";
import "./styles.css";

const getLocalStorage = () => {
  let shoppingItemsList = localStorage.getItem("shopItemList");

  if (shoppingItemsList)
    return (shoppingItemsList = JSON.parse(
      localStorage.getItem("shopItemList") || ""
    ));
  else return [];
};

function App() {
  const [item, setItem] = useState<string>("");
  const [itemDone, setDoneItem] = useState<boolean>(false);
  const [shopItemList, setShoppingList] = useState<IShoppingItem[]>(
    getLocalStorage()
  );

  useEffect(() => {
    localStorage.setItem("shopItemList", JSON.stringify(shopItemList));
  }, [shopItemList]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "shoppingItem") setItem(event.target.value);
  };

  const addItem = (): void => {
    const newShopItem = { itemName: item, isDone: itemDone };
    setShoppingList([...shopItemList, newShopItem]);
    setItem("");
  };

  const completeItem = (itemToDelete: string): void => {
    setShoppingList(
      shopItemList.filter((item) => {
        return item.itemName != itemToDelete;
      })
    );
  };

  const itemIsDone = (id: number) => {
    let mapped = shopItemList.map((item) => {
      return item.id === Number(id)
        ? { ...item, complete: !item.isDone }
        : { ...item };
    });
    setShoppingList(mapped);
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
          return (
            <ShoppingList
              key={key}
              item={item}
              completeItem={completeItem}
              itemIsDone={itemIsDone}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
