import React,{useState} from 'react'
import { useParams } from 'react-router-dom'

const Word = (props) => {
    const{word,font,background}=useParams()
    const params= useParams
    console.log(params)

  return (
    <div>
        <h2 style={{background:background, color:font, textAlign:'center'}}>{word}</h2>
    </div>
  )
}

export default Word