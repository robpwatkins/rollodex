import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ShowDetails from './ShowDetails'

class App extends React.Component {
  state = {
    persons: []
  }
  
  componentDidMount() {
    fetch('https://randomuser.me/api?results=25').then(response => {
      return response.json();
    }).then(json => {
      this.setState({ persons: json.results });
      console.log(this.state.persons[0]);
    })
  }
  
  render() {
  return (
    <div className="App">
      <header className="App-header">
        {this.state.persons.map((person, i) => {
          return (
          <div key={i}>
            <h3>{`${person.name.first} ${person.name.last}`}</h3>
            <img src={person.picture.thumbnail} alt=''></img>
            <ShowDetails person={person}/>
          </div>
          )
        })}
      </header>
    </div>
  );
  }
}

export default App;
