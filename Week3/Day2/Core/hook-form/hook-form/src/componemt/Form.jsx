import React from 'react'
// import usestate will allow us to use the state in our component function
import { useState } from 'react';

function Form() {
    const[firstname,setFirstname]=useState ("")
    const[lastname,setLastname]=useState("")
    const[email,setEmail]=useState("")
    const[password, setPassword]=useState("")
    const[confirm,setConfirm]=useState("")
  return (
    <div>
        <form >
            <div >
            <label htmlFor='firstname' className='form-label' >First Name :</label>
            <input type="text" className='form-control' onChange={(e)=>setFirstname(e.target.value)}/>
            </div>
            <div >
            <label htmlFor='lastname' className='form-label'>Last Name</label>
            <input type="text" className='form-control' onChange={(e)=>setLastname(e.target.value)}/>
            </div>
            <div >
            <label htmlFor='email' className='form-label'>Email</label>
            <input type="text"className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div >
            <label htmlFor='password' className='form-label'>Password</label>
            <input type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div >
            <label htmlFor='confirm' className='form-label'>Confirm Password</label>
            <input type="password" className='form-control' onChange={(e)=>setConfirm(e.target.value)}/>
            </div>
        </form>
        <h2>Your Data Form</h2>
        <div>
            <p>First Name : {firstname}</p>
            <p>Last Name : {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm}</p>
        </div>
    </div>
  )
}

export default Form