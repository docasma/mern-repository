import React from 'react'
import { useState } from 'react';

const Form = (props) => {
    const[text,setText]=useState(" ");
  
    const{addOneTaskToTasks}=props
    

    const createTask=(e)=>{
        e.preventDefault()
        console.log("clicked")
        const newTask={
            text,
            done:false
        }
        console.log(newTask)        
        addOneTaskToTasks(newTask)
        setText(" ");
    }
  

  return (
    <div>Form
        <form onSubmit={createTask}>
            <div>
                <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
            </div>
            <button >Add</button>
        </form>
    </div>
  )
}

export default Form