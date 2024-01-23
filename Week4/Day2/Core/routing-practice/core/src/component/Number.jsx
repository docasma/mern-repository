import React,{ useState } from 'react'
import {useParams} from 'react-router-dom'


const Number = (props) => {
    // destructure the key  from the object of the dynamic parametre(useparams)
    const{id}=useParams()
    const params=useParams()
    // consle log all the object
    console.log(params)
  return (
    <div>
        <h2 style={{textAlign:'center'}}>The number is {id}</h2>
    </div>
  )
}

export default Number