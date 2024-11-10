import "./App.css";
import { Provider } from "./components/ui/provider";
import { Routes } from "@generouted/react-router";

function App() {
  return (
    <>
      <Provider>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
