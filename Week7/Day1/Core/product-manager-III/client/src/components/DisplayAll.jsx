import React,{useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const DisplayAll = (props) => {
   const{products,setProducts}=props
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            console.log(res.data)
            setProducts(res.data)
        })
        .catch(err=>{console.log(err)})

    },[setProducts])
    const DeleteHandler=(deleteId)=>{
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
        .then(res=>{
            console.log(res.data)
            const filteredProducts=products.filter((aProduct)=>{
                return aProduct._id!== deleteId
            })
            setProducts(filteredProducts)
        })
        .catch(err=>{console.log (err)})
    }


  return (
    <div className ="p-4">
        <h2 className="card-header">ALL PRODUCTS</h2>
        {
            products.map((oneProduct)=>{
                return(
                    <div className="card-body text-secondary text-right d-flex justify-content-around p-4" key={oneProduct._id} >
                        <Link to={"/products/" + oneProduct._id}>{oneProduct.title}</Link>
                        
                        <Link to={`/products/edit/${oneProduct._id}`}className="btn btn-warning btn-lg mx-2">Edit</Link>
                        
                        <button onClick={()=>DeleteHandler(oneProduct._id)}className="btn btn-danger btn-lg mx-2">Delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DisplayAll