import LobbyCard from '../components/LobbyCard/LobbyCard';
import LobbyDetails from '../components/LobbyDetails/LobbyDetails';
import Lobbies from '../fakeDB/Lobbies.js'

function App() {
  return (
    <div className="App">
      <div>
        {Lobbies.map(lobby => (
          <LobbyCard lobbyName={lobby.lobbyName} lobbyActivePlayerCount={lobby.lobbyActivePlayerCount} lobbySize={lobby.lobbySize} />
        ))}
      </div>

      <LobbyDetails lobbyName="419boys" lobbyActivePlayerCount={419} lobbySize={45} />
    </div>
  );
}

export default App;