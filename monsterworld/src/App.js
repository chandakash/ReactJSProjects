import React, {Component } from 'react';
import { CardList } from './Components/card-list/CardList';
import './App.css';
import { SearchBox } from './Components/search-box/SearchBox';

class App extends Component{
  constructor(){
  super();

  this.state = {
      monsters : [],
      searchField: ''
  };
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response =>
    response.json()
  ) 
  .then(users => {
    console.log(users)
    this.setState({monsters: users})
  });
}

render(){
  const {monsters, searchField} = this.state;
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className = 'App'>
      <h1>Monsters World</h1>
      <SearchBox 
        placeholder='search monsters...'
        handleChange={e => this.setState({ searchField: e.target.value })}
      />      
      <CardList monsters = {filteredMonsters}>  
      </CardList>
      
    </div>
  )
}
}

export default App;