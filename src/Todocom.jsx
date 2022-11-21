import React from 'react'

const Todocom = () => {
  return (
    <div>
         <ul>
            {items.map((todoItem,index)=> (
              <>
                <Lists text={todoItem}
                id = {index}
                index = {index}
                onDelete = {deleteBtn}
                />
              </>
            ))}
          </ul>
        </div>
  )
}

export default Todocom