import React from 'react';
import '../GameState/GameState.css';

export default function GameState(gameState) {
  return (
    <table className='game-state'>
        <thead>
          <tr>
            <th colSpan={4}>Game State</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>X won</td>
            <td>Push</td>
            <td>O won</td>
            <td>Round</td>
          </tr>
          <tr>
            <td>{gameState.gameState.x}</td>
            <td>{gameState.gameState.push}</td>
            <td>{gameState.gameState.o}</td>
            <td>{gameState.gameState.round}</td>
          </tr>
        </tbody>
    </table>
      
  )
}
