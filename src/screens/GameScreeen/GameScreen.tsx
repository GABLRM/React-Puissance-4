import { useRecoilState } from "recoil";
import Grid from "../../components/Grid/Grid";
import { gameState } from "../../atoms/GameState";

const Game = () => {
  const [game, _] = useRecoilState(gameState);

  let player = {
    "playerName": "",
    "color": "",
    "isPlaying": false
  }

  if (game.isPlaying == "red") {
    player = game.red;
  } else {
    player = game.yellow;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Puissance 4</h1>
        <p>C'est au tour de <span className={`tokenColor-${player.color}`}>{player.playerName} ⬤</span> de jouer !</p>
        <Grid />
      </header>
    </div>
  );
};

export default Game;