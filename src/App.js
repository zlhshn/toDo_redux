import "./app.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Todo from "./components/Todo";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
