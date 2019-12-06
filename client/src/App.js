import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerList from './Components/PlayerList';
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
        console.log(response.data);
        this.setState({ 
          players: [...this.state.players, response.data]
         })
      })
  }

  render() {
    return (
      <div className="App">
        <PlayerList />
      </div>
    );
  }
}

export default App;
