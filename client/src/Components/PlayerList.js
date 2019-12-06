import React from 'react';
import PlayerCard from './PlayerCard';


function PlayerList(props) {
  console.log(props.players.length);
  return (
    <div className='player-list'>
      {props.players.map( (player, index) => (
        <PlayerCard key={index} player={player}/>
      ))}
    </div>
  );
}

export default PlayerList;