import React, { useEffect,useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from "axios"

const View = () => {
    const[oneProduct,setOneProduct]=useState(null)
    const{id}=useParams()
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

  return (
    <div className="card border-secondary m-3 ">
        <h2 className="card-header">I CHOOSE THIS PRODUCT:</h2>
        {oneProduct?(
            <div className="card-body text-secondary text-right">
                <h3 className="card-title">TITLE:{oneProduct.title}</h3>
                <p>PRICE:{oneProduct.price}</p>
                <p>DESCRIPTION:{oneProduct.description}</p>
            </div>
            ):( <p>Loading...</p>)
        }
        <Link to={"/"} className="btn btn-secondary btn-lg" >All Product</Link>
    </div>
   )
}

export default View