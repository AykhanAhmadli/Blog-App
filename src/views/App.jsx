import logo from '../assets/logo.svg'
import LobbyCard from '../components/LobbyCard';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <LobbyCard lobbyName="Lobby123" lobbyActivePlayerCount={4} lobbySize={45} />
      <LobbyCard lobbyName="419boys" lobbyActivePlayerCount={419} lobbySize={45} />
    </div>
  );
}

export default App;