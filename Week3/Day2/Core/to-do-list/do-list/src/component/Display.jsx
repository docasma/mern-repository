import React from 'react'


const Display = (props) => {
const {allTask,buttonDelete, boxCheck }=props
  return (
    <div>
      {allTask.map((task,index)=>(
        <div key={index} >
            <p >
                <p className={task.done?'done':""}>{task.text}</p>               
                <input type="checkbox" onChange={()=>boxCheck(task)} /> 
                <button onClick={()=>buttonDelete(index)}>Delete</button>               
          </p>
          
        </div>
      )
      )}
    </div>
  )
}

export default Display