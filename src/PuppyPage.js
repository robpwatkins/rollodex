import React from 'react';
// import logo from './logo.svg';
// import './PeoplePage.css';
import ShowPupDetails from './ShowPupDetails';

const imgStyle = {
  // height: "auto",
  // width: '100%',
  border: "5px solid white",
}

class PeoplePage extends React.Component {
  state = {
    users: []
  }
  
  componentDidMount() {
    // const peopleUrl = 'https://randomuser.me/api?results=25';
    // const puppyUrl = 'https://gist.githubusercontent.com/robpwatkins/3fddbada918e592e3901a474b0953df9/raw/d7fb568d2bdcb69504249a6a3c80091723ebc20f/puppyAPI.json';
    const starWarUrl = 'https://swapi.dev/api/planets' 
    const puppyAPI = 'https://puppyapi.com/pups/'
    fetch(puppyAPI).then(response => {
      console.log(response)
      return response.json();
    }).then(json => {
      console.log(json);
      this.setState({ users: json });
      console.log(this.state.users)
    })
  }
  
  render() {
  return (
    <div className="PeoplePage">
      <header className="PeoplePage-header">
        {this.state.users.map((person, i) => {
          return (
          <div key={i}>
            <h3>{person.name}</h3>
            <img className="thumb" src={person.img_url} alt='' style={imgStyle}></img>
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
