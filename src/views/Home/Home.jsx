import './style.scss'
import Lobbies from '../../fakeDB/Lobbies.js'
import LobbyCard from '../../components/LobbyCard/LobbyCard'
import LobbyDetails from '../../components/LobbyDetails/LobbyDetails';

function Home() {

  return (
    <div className='Home'>
      <div>
        {Lobbies.map(lobby => (
          <LobbyCard lobbyName={lobby.lobbyName} lobbyActivePlayerCount={lobby.lobbyActivePlayerCount} lobbySize={lobby.lobbySize} />
        ))}
      </div>

      <LobbyDetails lobbyName="419boys" lobbyActivePlayerCount={419} lobbySize={45} />
    </div>
  );
}

export default Home;