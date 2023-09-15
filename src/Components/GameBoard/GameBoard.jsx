import React, { useRef} from 'react';
import '../GameBoard/GameBoard.css'

export default function GameBoard({ 
    board, 
    setBoard, 
    nextPlayer, 
    setNextPlayer, 
    isWinner,
    setIsWinner,
    setMessage, 
    stepNumber, 
    setStepNumber,
    setGameState,
    gameState,
    }) {

    const whoIsTheWinner = (items) => {
        let newGameState = gameState;
        if ((items[0].value != null && items[0].value === items[1].value && items[1].value === items[2].value) || 
            (items[3].value != null && items[3].value === items[4].value && items[4].value === items[5].value) || 
            (items[6].value != null && items[6].value === items[7].value && items[7].value === items[8].value) || 
            (items[0].value != null && items[0].value === items[3].value && items[3].value === items[6].value) || 
            (items[1].value != null && items[1].value === items[4].value && items[4].value === items[7].value) || 
            (items[2].value != null && items[2].value === items[5].value && items[5].value === items[8].value) || 
            (items[0].value != null && items[0].value === items[4].value && items[4].value === items[8].value) || 
            (items[2].value != null && items[2].value === items[4].value && items[4].value === items[6].value)) {
                setIsWinner(true);
                setMessage(`${nextPlayer} is the winner.`)
                if (nextPlayer === "X") {
                    newGameState.x += 1;
                    setGameState(newGameState);
                } else {
                    newGameState.o += 1;
                    setGameState(newGameState);
                }
                
            } else if (stepNumber === 8) {
                setMessage('Push');
                setIsWinner(true);
                newGameState.push += 1;
                setGameState(newGameState);
            }   
    }

    const handleClick = (id) => {
        let newBoard = JSON.parse(JSON.stringify(board));
        if (newBoard[id].value === null && !isWinner) {
            if (nextPlayer === "X") {
                newBoard[id].value = "X";
                setMessage("Next player is: O");
            } else {
                newBoard[id].value = "O";
                setMessage("Next player is: X");
            }
            newBoard[id].class = "";
            setStepNumber(stepNumber + 1);
            setBoard(newBoard);
            whoIsTheWinner(newBoard);
            if (nextPlayer === "X") setNextPlayer("O");
            else setNextPlayer("X");
        }
    };

  return (
    <>
    <table className="game-board">
    <tbody>
      <tr>
        <td className={board[0].class} onClick={() => handleClick(0)}>
          {board[0].value}
        </td>
        <td className={board[1].class} onClick={() => handleClick(1)}>
          {board[1].value}
        </td>
        <td className={board[2].class} onClick={() => handleClick(2)}>
          {board[2].value}
        </td>
      </tr>
      <tr>
        <td className={board[3].class} onClick={() => handleClick(3)}>
          {board[3].value}
        </td>
        <td className={board[4].class} onClick={() => handleClick(4)}>
          {board[4].value}
        </td>
        <td className={board[5].class} onClick={() => handleClick(5)}>
          {board[5].value}
        </td>
      </tr>
      <tr>
        <td className={board[6].class} onClick={() => handleClick(6)}>
          {board[6].value}
        </td>
        <td className={board[7].class} onClick={() => handleClick(7)}>
          {board[7].value}
        </td>
        <td className={board[8].class} onClick={() => handleClick(8)}>
          {board[8].value}
        </td>
      </tr>
  </tbody> 
  </table>
  </>
  )
}
