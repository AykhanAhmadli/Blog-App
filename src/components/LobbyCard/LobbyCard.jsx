import './style.scss'
function LobbyCard({ isPrivate = false, lobbySize, lobbyActivePlayerCount, lobbyId, lobbyName }) {
    function function1() {
        console.log("here")
    }
    return (
        <div className="lobby-card">
            <div className="details">
                <div className="name">{'Lobby Name: ' + lobbyName} </div>
                <div className="player-count"> {'Player Count: ' + lobbyActivePlayerCount + "/" + lobbySize}</div>
            </div>
            <div className="join-button">
                <button onClick={function1} disabled={lobbySize === lobbyActivePlayerCount}>Join</button>
            </div>
        </div >
    );
}

export default LobbyCard;