import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerList from './Components/PlayerList';
import DarkModeToggle from './Components/DarkModeToggle';
import SearchForm from './Components/SearchForm';
// import useDarkMode from './Hooks/useDarkMode';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      searchText: {
        name: '',
        country: '',
        num_searches: '',
      }
    }

  }

  componentDidMount() {
    Axios.get('http://localhost:5000/api/players')
      .then( response => {
        // console.log(response);
        this.setState({ 
          players: [...this.state.players, response.data]
         });
      })
  }

  

  render() {

    return (
      <div className="App">
        <DarkModeToggle />
        <PlayerList data-testid='player-list' players={this.state.players}/>
      </div>
    );
  }
}

export default App;
