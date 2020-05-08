import React from 'react';
import './App.css';
import PeoplePage from './PeoplePage';
import PuppyPage from './PuppyPage';

const imgStyle = {
  height: "200px"
}

const App = () => (
  <div className="App">
    {/* <PeoplePage /> */}
    <PuppyPage />
  </div>
)

export default App;
