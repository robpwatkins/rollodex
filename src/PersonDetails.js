import React from 'react';

function PersonDetails(props) {
  const memberYear = props.person.registered.date.substring(0, 4);
  const memberMonth = props.person.registered.date.substring(5, 7);
  const memberSince = `${memberMonth}-${memberYear}`;

  return (
    <div>
      <h5>{props.person.login.username}</h5>
      <h5>{props.person.email}</h5>
      <h5>{props.person.phone}</h5>
      <h5>{`${props.person.location.city}, ${props.person.location.state}`}</h5>
      <h5>Member since: {memberSince}</h5>
    </div>
  )
}

export default PersonDetails;