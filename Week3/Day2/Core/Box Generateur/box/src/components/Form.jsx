import React, {useState} from 'react'


function Form(props) {
    const{boxColorArray,setBoxColorArray}=props;
    const[color,setColor]=useState ("");
    const submit = (e) =>{
        e.preventDefault();
        setBoxColorArray([...boxColorArray,color]);
        setColor("")
    }

  return (
    <div >
        <form onSubmit={ submit } style={{ margin: "20px"} }>
            <div>
                <label htmlFor="firstName">Color</label>
                <input type="text" name="color" value={color} onChange={ (e) => setColor(e.target.value) }/>
                <button type='submit'>Add</button>
            </div>
            
        </form>
    </div>
  )
}

export default Form