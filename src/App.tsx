import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [state, setState]: any = useState(0);
  const [gameWon, setGemeWon] = useState(false);
  const [isGameFinished, setIsGemeFinished] = useState(false);
  const [isGameStarted, setIsGemeStarted] = useState(false);

  const gameLogic = () => {
    setState((prev: any) => prev + 1);
  };

  useEffect(() => {
    if (state >= 20) {
      setIsGemeFinished(true);
    }

    if (isGameFinished) {
      if (state >= 20) {
        setGemeWon(true);
      } else {
        setGemeWon(false);
      }
    }
  }, [isGameFinished, state]);

  const handleStartGame = () => {
    setIsGemeStarted(true);
    setTimeout(() => {
      setIsGemeFinished(true);
      gameLogic();
    }, 5000);
  };

  const displayGameWon = () => {
    if (isGameFinished) {
      if (gameWon) {
        return <h1>you won</h1>;
      } else {
        return <h1>you lost</h1>;
      }
    }
  };

  const mainGameAction = () => {
    if (isGameStarted && !isGameFinished) {
      return (
        <div>
          <button onClick={gameLogic}>click me</button>
          <br />
          clicked times: {state}
        </div>
      );
    }
  };

  const preGameActionElement = () => {
    if (!isGameStarted) {
      return <button onClick={handleStartGame}>start the game</button>;
    }
  };

  return (
    <>
      <h1>Clicking game</h1>
      {preGameActionElement()}
      {mainGameAction()}
      {displayGameWon()}
    </>
  );
}

export default App;
