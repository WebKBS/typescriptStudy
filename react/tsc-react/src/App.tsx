import "./App.css";
import Greeter from "./components/Greeter";

function App() {
  return (
    <div className="App">
      <Greeter person="hello" />
      <Greeter person="world" />
      <Greeter person="hi" />
    </div>
  );
}

export default App;
