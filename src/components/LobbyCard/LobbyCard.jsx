import './style.scss'
function LobbyCard({ isPrivate = false, lobbySize, lobbyActivePlayerCount, lobbyId, lobbyName }) {
    return (
        <div class="lobby-card">
            <div class="details">
                <div class="name">{'Lobby Name: ' + lobbyName} </div>
                <div class="player-count"> {'Player Count: ' + lobbyActivePlayerCount + "/" + lobbySize}</div>
            </div>
            <div class="join-button">
                <button>Join</button>
            </div>
        </div>
    );
}

export default LobbyCard;