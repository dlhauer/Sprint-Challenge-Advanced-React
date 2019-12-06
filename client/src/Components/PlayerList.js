import React from 'react';
import PlayerCard from './PlayerCard';


function PlayerList(props) {

  const players = props.players.filter( player => {
   return (
     player.name.toLowerCase().includes(props.searchText.name.toLowerCase()) 
    && player.country.toLowerCase().includes(props.searchText.country.toLowerCase())
    && player.searches.toString().includes(props.searchText.searches)
    ) 
  })

  return (
    <div className='players-list'>
      {players.length > 0 ? 
        players.map((player, index) => (
          <PlayerCard data-testid='player-card' key={index} player={player}/>
        ))
      : <h2>Sorry, there are no players who match those search criteria.</h2>}
  
    </div>
  );
}

export default PlayerList;