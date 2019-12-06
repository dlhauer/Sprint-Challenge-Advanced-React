import React from 'react';
import PlayerCard from './PlayerCard';


function PlayerList(props) {
  // console.log('Players in PlayerList: ', props.players);
  return (
    <div className='players-list'>
      {props.players.map((player, index) => (
          <PlayerCard data-testid='player-card' key={index} player={player}/>
      ))}
  
    </div>
  );
}

export default PlayerList;