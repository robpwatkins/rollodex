import React from 'react';

function PersonDetails(props) {
  return (
    <div>
      {props.isclicked ? (
        <div>
          <h5>{props.person.breed}</h5>
          <h5>{props.person.gender}</h5>
          <h5>Hometown: {props.person.hometown}</h5>
          <h5>Member since: {props.person.date_registered}</h5>
          {/* <h5>Member since: {memberSince}</h5> */}
        </div>
        ) : ''
      }
    </div>
  )
}

export default PersonDetails;