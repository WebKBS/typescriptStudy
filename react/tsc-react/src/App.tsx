import "./App.css";
// import Greeter from "./components/Greeter";
import ShoppingList from "./components/shoppingList";

function App() {
  const items = [
    {
      id: 1,
      product: "lemon",
      quantity: 3,
    },
    {
      id: 2,
      product: "chicken",
      quantity: 10,
    },
  ];

  return (
    <div>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
