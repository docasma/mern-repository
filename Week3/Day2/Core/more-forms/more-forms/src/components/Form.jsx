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
            <label htmlFor='firstname' className='form-label'>First Name :</label>
            <input type="text" className='form-control' value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
            {
                firstname.length < 2 && firstname.length>0?
                <p>First Name must be at least 2 charachters</p> :
                null
            }
            </div>
            <div>
            <label htmlFor='lastname' className='form-label'>Last Name</label>
            <input type="text" className='form-control' value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
            {
                lastname.length < 2 && lastname.length>0?
                <p >Last Name must be at least 2 charachters</p> :
                null
            }
            </div>
            <div >
            <label htmlFor='email' className='form-label'>Email</label>
            <input type="text"className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            {
                email.length < 2 && email.length>0?
                <p >Email must be at least 2 charachters</p> :
                null
            }
            </div>
            <div >
            <label htmlFor='password' className='form-label'>Password</label>
            <input type="password" className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {
                password.length < 8 && password.length>0 ?
                <p >Password Name must be at least 8 charachters</p> :
                null
            }
            </div>
            <div >
            <label htmlFor='confirm' className='form-label'>Confirm Password</label>
            <input type="password" className='form-control' value={confirm} onChange={(e)=>setConfirm(e.target.value)}/>
            {
                password!==confirm ?
                <p>Passwords must match</p>:
                null
            }
            </div>
        </form>
        <h2>Your Data Form</h2>
        <div >
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