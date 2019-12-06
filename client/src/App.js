import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerList from './Components/PlayerList';
import SearchForm from './Components/SearchForm';
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
    // console.log('Players: ', this.state.players)
    return (
      <div className="App">
        {/* <SearchForm state={this.state}/> */}
        <div classname='dark-mode-toggle'>
          <div 
            onClick={toggleMode}
            classname={darkMode ? 'toggle toggled' : 'toggle'}/>
        </div>
        <PlayerList players={this.state.players}/>
      </div>
    );
  }
}

export default App;
