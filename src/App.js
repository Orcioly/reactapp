import { useEffect, useState } from "react";
import List from "./components/List";
import api from "./components/services/api";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});

  async function getUserGithubData() {
    const { data } = await api.get(username);

    setUserData(data);
  }

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={getUserGithubData}>Pesquisar usuário</button>
      <div>{userData.name}</div>
      <div>{userData.company}</div>
    </div>
  );
}

export default App;
