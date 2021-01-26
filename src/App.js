import { useEffect, useState } from 'react';
import List from './components/List';
import api from './components/services/api';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const localStorageUserData = sessionStorage.getItem(
      '@reactapp:GITHUB_USER_DATA',
    );

    setUserData(JSON.parse(localStorageUserData) || {});
  });

  async function getUserGithubData() {
    const { data } = await api.get(username);

    localStorage.setItem('@reactapp:GITHUB_USER_DATA', JSON.stringify(data));
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
