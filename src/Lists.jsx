import React, { useState } from 'react'

const Lists = (props) => {

  const [isDone,setisDone] = useState(false)

    const doneClick = ()=>{
        setisDone(!isDone);
      }

  
  return (
    <div>
        <li className='li_box'  style={{textDecoration:isDone?"line-through":"none"}} key={props.index} id = {props.index}>{props.text} 
            <div className='button_box' >
              <button onClick={() => {props.onDelete(props.id)}} className='delete_btn'>Delete</button>
              {isDone? <button onClick={doneClick} className="done_btn">Undo</button>:<button onClick={doneClick} className="done_btn" > Done?</button>}
            </div>
        </li>
    </div>
  )
}


export default Lists