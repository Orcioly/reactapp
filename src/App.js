import { useEffect } from "react";
import List from "./components/List";

function App() {
  useEffect(() => {
    async function setUserRepositories() {
      await localStorage.setItem("user-repositories", JSON.stringify({}));
    }

    setUserRepositories();
  });

  return (
    <div>
      <h1>Hello React App World</h1>
    </div>
  );
}

export default App;
