import React from 'react';

function PlayerCard(props) {
  return (
    <div className='player-card'>
      <h2>Name: {props.player.name}</h2>
      <p>Country: {props.player.country}</p>
      <p>Number of searches: {props.player.searches}</p>
    </div>
  );
}

export default PlayerCard;