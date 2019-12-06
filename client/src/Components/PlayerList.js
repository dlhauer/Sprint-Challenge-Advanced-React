import React from 'react';
import PlayerCard from './PlayerCard';


function PlayerList(props) {
  console.log('Players in PlayerList: ', props.players);
  return (
    <div className='player-list'>
      {props.players.map( item => (
        item.map( (player, index) => (
          <PlayerCard key={index} player={player}/>
        ))
      ) )}
    </div>
  );
}

export default PlayerList;