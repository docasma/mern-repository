import { useState } from 'react';
import './App.css';
import Display from './component/Display';
import Form from './component/Form';

function App() {

  const[allTask,setAllTask]=useState([
    {
      text:"Get Mern Black Bilt",
      done:false,
    },
    {
      text:"Get python Black Bilt",
      done:false,
    },
    {
      text:"Get Web Fundamental Orange Bilt",
      done:false,
    }  
   ])
  
  const addOneTaskToTasks=(oneTask)=>{
    setAllTask([...allTask,oneTask]);   
  }

  const buttonDelete=(iClicked)=>{
    const filterDone= allTask.filter((task,i)=>{
      return i!==iClicked;
    
    });
    setAllTask(filterDone);
  }

  const boxCheck=(doneTask)=>{
    let updateAllTask=allTask.map((task)=>{
      // compare the existant and wanted propretie with if
      if (task===doneTask){
        let newTask={...task};
        // change the value of the done key using a new creating proprety 
        // because it is better to use set funcion on a copy
        newTask.done= !newTask.done
        return newTask
      }
      else{
        return task
      }
    })
    setAllTask(updateAllTask)
  }


 

  return (
    <div className="App">
      <Display allTask={allTask} buttonDelete={buttonDelete} setAllTask={setAllTask}boxCheck={ boxCheck}/>
      <Form addOneTaskToTasks={addOneTaskToTasks}/>
    </div>      
  );
}

export default App;
