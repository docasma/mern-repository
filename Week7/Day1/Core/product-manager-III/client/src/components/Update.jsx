import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    
    const{id}=useParams()
    const[title,setTitle]=useState("")
    const[price,setPrice]=useState("")
    const[description,setDescription]=useState("")
    
    
    const navigate =useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                console.log(res.data)
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);                
            })
            .catch((err)=>console.log(err));
    },[id]);
    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log("it is working")

        axios.put(`http://localhost:8000/api/products/${id}`,{
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res.data)
                navigate("/products")
            })             
            .catch((err)=> console.log(err))
    }

   


  return (
    <div className ="p-4">
        <form onSubmit={SubmitHandler}>
            <h2 className="card-header p-4">PRODUCT MANAGER</h2> 
            <div className="form-fields">
                Title:
                <input value={title} onChange={e =>{setTitle(e.target.value)}}/>
            </div>
            <br />
              
            <div className="form-fields">
              Price:
                <input  type='number'  value={price} onChange={e =>{setPrice(e.target.value)}}/>
            </div>
            <br />
            <div className="form-fields">
                Description:
                <input  value={description} onChange={e =>{setDescription(e.target.value)}}/>
            </div>  
            <br />           
            <input className="btn btn-warning btn-lg mx-2" class="submit-input" type="submit" value="Update" />
        </form>

    </div>
  )
}

export default Update