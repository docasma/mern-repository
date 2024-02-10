import React,{useState} from 'react'
import axios from 'axios'

const Form = (props) => {
    const{products,setProducts}=props
    const[title,setTitle]=useState("")
    const[price,setPrice]=useState("")
    const[description,setDescription]=useState("")
    
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
                setProducts([...products, res.data]);
                setTitle("");
                setPrice("");
                setDescription("");
                
            })
            .catch(err=> console.log("bad one",err))
    }


  return (
    <div >
        <form onSubmit={SubmitHandler}>
            <h2 className="card-header">PRODUCT MANAGER</h2> 
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
            <button type="submit" className="btn btn-secondary btn-lg">Create</button>
        </form>



    </div>
  )
}

export default Form