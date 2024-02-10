import React,{useState,useEffect} from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'
import axios from "axios"

const DisplayOne = () => {
    const[oneProduct,setOneProduct]=useState({})
    const{id}=useParams()
    const Navigate=useNavigate()
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+ id)
            .then(res=>{
                console.log(res.data)
                setOneProduct(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[id])
    const DeleteHandler=()=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            console.log(res.data)
            Navigate("/products")

        })
        .catch(err=>{console.log (err)})
    }
    
  return (
    <div className ="p-4">
        <h2 className="card-header ">I CHOOSE THIS PRODUCT:</h2>
        {
            <div className="card-body text-secondary text-right mx-2">
                <p>TITLE: {oneProduct.title}</p>
                <p>PRICE: ${oneProduct.price}</p>
                <p>DESCRIPTION: {oneProduct.description}</p>
            </div>
        }

        <br />    
        <Link to={"/products"} className="btn btn-secondary btn-lg mx-2" >All Product</Link>
        <button onClick={DeleteHandler} className="btn btn-danger btn-lg mx-2">Delete</button>
    
    </div>
  )
}

export default DisplayOne