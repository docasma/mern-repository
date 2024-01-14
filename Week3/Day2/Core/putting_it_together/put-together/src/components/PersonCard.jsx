import React, { useState } from 'react'

const PersonCard = (props) => {
    const{firstName,lastName,age,hairColor}=props;
    const [stateAge,setAge] = useState(age);
    const handleAge =()=>{setAge (stateAge + 1);
    }
  return (
    <div>
        <h1>{firstName} , {lastName}</h1>
        <h3>Age : {stateAge}</h3>
        <h3>HairColor : {hairColor}</h3>
        <button onClick={handleAge}>
          Birthday Button for {lastName} {firstName}</button>
    </div>
  )
}

export default PersonCard;