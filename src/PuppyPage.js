import React from 'react';
// import logo from './logo.svg';
// import './PeoplePage.css';
import ShowPupDetails from './ShowPupDetails';

const imgStyle = {
  height: "200px"
}

class PeoplePage extends React.Component {
  state = {
    users: []
  }
  
  componentDidMount() {
    const peopleUrl = 'https://randomuser.me/api?results=25';
    const puppyUrl = 'https://gist.githubusercontent.com/robpwatkins/3fddbada918e592e3901a474b0953df9/raw/2f35756b78c0332926771b4a777a09eb4137a637/puppyAPI.json'; 
    fetch(puppyUrl).then(response => {
      return response.json();
    }).then(json => {
      // this.setState({ users: json.results });
      this.setState({ users: json });
      console.log(this.state.users)
      // console.log(this.state.users[0].registered.date.substring(0, 10));
    })
  }
  
  render() {
  return (
    <div className="PeoplePage">
      <header className="PeoplePage-header">
        {this.state.users.map((person, i) => {
          return (
          <div key={i}>
            <h3>{`${person.name.first} ${person.name.last}`}</h3>
            <img className="thumb" src={person.imgUrl} alt='' style={imgStyle}></img>
            <ShowPupDetails person={person}/>
          </div>
          )
        })}
      </header>
    </div>
  );
  }
}

export default PeoplePage;
