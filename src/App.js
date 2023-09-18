import { useRef, useState } from 'react';
import './App.css';
import GameState from './Components/GameState/GameState';
import GameBoard from './Components/GameBoard/GameBoard';

function App() {
  const [nextPlayer, setNextPlayer] = useState("X");
  const [isWinner, setIsWinner] = useState(false);
  const [message, setMessage] = useState(`First player is X`);
  const [stepNumber, setStepNumber] = useState(0);
  const [board, setBoard] =  useState(setInitialStateOfGameBoard); 
  const [gameState, setGameState] = useState({x : 0, o: 0, push: 0, round: 1});
  const addRemovePointerClassFromNewRoundButton = useRef(null);
  const [firstPlayer, setFirstPlayer] = useState("X");

  function setInitialStateOfGameBoard() {
    let temp = [];
    if (temp.length === 0)
      for (let i = 0; i < 9; ++i) 
        temp.push({value: null, id : i, class : "pointer"});
    return temp
  }
  
  if (isWinner) {
    addRemovePointerClassFromNewRoundButton.current.classList.add('pointer');
    for (let i = 0; i < 9; ++i) {
      if (board[i].value === null) board[i].class = "";
    }
  }
  
  const newGameOrRound = () => {
    addRemovePointerClassFromNewRoundButton.current.classList.remove('pointer');
    if (firstPlayer === "X" ) setMessage("First player is O");
    else setMessage("First player is X");
    setIsWinner(false);
    setStepNumber(0);
    setBoard(setInitialStateOfGameBoard);
  };
  
  function handleNewGame () {
    setFirstPlayer("X");
    setNextPlayer("X");
    newGameOrRound();
    setGameState({x : 0, o: 0, push: 0, round: 1})
    addRemovePointerClassFromNewRoundButton.current.classList.remove('pointer');
    };

  const handleNewRound = () => {
    if (firstPlayer === "X") {
      setFirstPlayer("O");
      setNextPlayer("O");
    } else {
      setFirstPlayer("X");
      setNextPlayer("X");
    }
    newGameOrRound();
    let newGameState = gameState;
    newGameState.round = gameState.round + 1;
    setGameState(newGameState)
    }

  return (
    <>
      <div className='game'>
        <h1>Tic-Tac-Toe</h1>
        <GameState gameState={gameState}/>
        <div className='game-board-table'>
        <GameBoard
          setBoard={setBoard}
          board={board}
          nextPlayer={nextPlayer}
          setNextPlayer={setNextPlayer}
          setMessage={setMessage}
          isWinner={isWinner}
          setIsWinner={setIsWinner}
          stepNumber={stepNumber}
          setStepNumber={setStepNumber}
          setGameState={setGameState}
          gameState={gameState}
        />
        </div>
        <div className='buttons-messages-container'>
          <button onClick={handleNewGame} className='pointer'>New Game</button>
          <h2>{message}</h2> 
          <button onClick={handleNewRound} disabled={!isWinner} ref={addRemovePointerClassFromNewRoundButton}>New Round</button>
        </div>
      </div>
    </>
  );
}

export default App;
