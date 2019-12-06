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
        this.setState({ 
          players: response.data
         });
      })
  }

  handleChange = value => {
    console.log('value: ', value);
    // console.log({...this.state, searchText: {value}});
    this.setState( {
      ...this.state,
    //  value
      searchText: value.searchText
    })
    console.log('searchText: ', this.state.searchText);
  }


  render() {

    return (
      <div className="App">
      {console.log('searchText: ', this.state.searchText)}
        {/* <DarkModeToggle /> */}
        <SearchForm handleChange={this.handleChange} state={this.state}/>
        <PlayerList data-testid='player-list' players={this.state.players}/>
      </div>
    );
  }
}

export default App;
