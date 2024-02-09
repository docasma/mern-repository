import React, { useEffect,useState } from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'
const Main = () => {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            console.log(res.data)
            setProducts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    },[])

  return (
    <div className="card border-secondary m-3 ">
        <h2 className="card-header">ALL PRODUCTS</h2>
        {/* {JSON.stringify(products)} */}
        {
            products.map((oneProduct)=>{
                return(
                    <div className="card-body text-secondary text-right" key={oneProduct._id} >
                        <Link to={"/products/" + oneProduct._id}>
                            {oneProduct.title}
                        </Link>
                    </div>
                )

            })
        }
        <Link to={"/products"} className="btn btn-secondary btn-lg">ADD ONE PRODUCT</Link>

    </div>
  )
}

export default Main