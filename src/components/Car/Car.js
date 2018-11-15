import React from 'react';

export default function Car(props){
  const {title, channel, description} = props;
    return(
        <div>
        <h2>{title}</h2>
        <p>Channel: {channel}</p>
        <p style= {{fontStyle:'italic'}}>Brief Description: {description}</p>
        </div>
    )
  }

  
