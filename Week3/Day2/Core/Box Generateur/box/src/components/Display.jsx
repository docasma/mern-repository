import React from 'react'

function Display(props) {
    const{boxColorArray}=props;


  return (
    <div>
        {
        boxColorArray.map((color, idx) => (
            <div key={idx} style={{ 
                display: "inline-block",
                margin: "10px",
                height: "70px", 
                width: "70px", 
                backgroundColor: color
                }}>
            </div>
          ))
        }
    </div>
  )
}

export default Display
