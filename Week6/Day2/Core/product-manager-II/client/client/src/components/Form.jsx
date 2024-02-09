import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const[title,setTitle]=useState("")
    const[price,setPrice]=useState(0)
    const[description,setDescription]=useState("")
    
    
    const nav=useNavigate()
    
    
    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log("it is working")
        const newProduct = {
            title,
            price,
            description           
        }
        console.log(newProduct)

        axios.post("http://localhost:8000/api/products/", newProduct)
            .then(res => {
                console.log("good work", res.data)
                nav("/")
            })
            .catch(err=> console.log("bad one",err))
    }


  return (
    <div className="d-flex justify-content-around ">
        <form onSubmit={SubmitHandler}>
            <h2 >PRODUCT MANAGER</h2> 
            <div className="navbar navbar-light bg-light">
                Title:
                <input className="form-control mb-3 mr-sm-2"  value={title} onChange={e =>{setTitle(e.target.value)}}/>
            </div>
            <br />
              
            <div className="navbar navbar-light bg-light">
              Price:
                <input className="form-control mb-3 mr-sm-2" type='number'  value={price} onChange={e =>{setPrice(e.target.value)}}/>
            </div>
            <br />
            <div className="navbar navbar-light bg-light">
                Description:
                <input className="form-control mb-3 mr-sm-2"  value={description} onChange={e =>{setDescription(e.target.value)}}/>
            </div>  
            <br />           
            <button type="submit" className="btn btn-secondary btn-lg">Create</button>
        </form>
    </div>
  )
}

export default Form