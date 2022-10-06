import './style.scss'
function LobbyDetails({ isPrivate = false, lobbySize, lobbyActivePlayerCount, lobbyId, lobbyName, players }) {
    return (
        <div className="lobby-details">
            <div className="details">
                <div className="name">{'Lobby Name: ' + lobbyName} </div>
                <div className="player-count"> {'Player Count: ' + lobbyActivePlayerCount + "/" + lobbySize}</div>
            </div>

            <div className="join-button">
                <button disabled={lobbySize === lobbyActivePlayerCount}>Join</button>
            </div>
            <div className="players">
                <hr />
                <p>Players:</p>
                <ul>
                    <li>t</li>
                    <li>a</li>
                    <li>il</li>
                    <li>w</li>
                    <li>i</li>
                    <li>nd</li>
                </ul>
            </div>
        </div>
    );
}

export default LobbyDetails;