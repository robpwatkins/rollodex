import React from 'react';

function PersonDetails(props) {
  return (
    <div>
      <h5>{props.person.login.username}</h5>
      <h5>{props.person.email}</h5>
      <h5>{props.person.phone}</h5>
      <h5>{`${props.person.location.city}, ${props.person.location.state}`}</h5>
    </div>
  )
}

export default PersonDetails;