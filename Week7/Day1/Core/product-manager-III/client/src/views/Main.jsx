import React,{useState} from 'react'
import Form from "../components/Form"
import DisplayAll from '../components/DisplayAll'

const Main = (props) => {
    const[products,setProducts]=useState([]) 




  return (
    <div>
        <Form products={products} setProducts={setProducts}/>
        <DisplayAll products={products} setProducts={setProducts}/>
    </div>
  )
}

export default Main;