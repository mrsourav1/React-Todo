import React from 'react'

const UnDone = (props) => {  
  return (
    <div>
        <li key = {props.index} id = {props.id}> 
            {!props.work&&props.text}
        </li>
    </div>
  )
}

export default UnDone