import React from 'react';
import './App';
import PuppyDetails from './PuppyDetails';

class ShowPupDetails extends React.Component {
  state = {
    isClicked: false
  }

  handleClick = () => {
    if (this.state.isClicked) {
      this.setState({ isClicked: false });
    } else {
      this.setState({ isClicked: true });
    }
  }

  render() { 
    return (
      <div>
        <button onClick={ () => this.handleClick() }>
          { this.state.isClicked ? 'Hide Details' : 'Show Details' }
        </button>
        <PuppyDetails isclicked={this.state.isClicked} person={this.props.person}/>
      </div>
    );
  }
}
 
export default ShowPupDetails;