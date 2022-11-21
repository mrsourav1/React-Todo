import { useState } from 'react';
import './App.css';
import Lists from './Lists';
import UnDone from './UnDone';

function App() {
  const[inputText,setInputtext] = useState("");
  const [items,setItems] = useState([]);
 
  const handleChange = (e)=>{
    setInputtext(e.target.value);
  }

  const addItem=()=>{
    setItems(prevItems =>{
      return [...prevItems,inputText];
    })
    setInputtext("")
  }



  function deleteBtn(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  


  return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>TO-DO List</h1>
        <div className='input_field'>
          <input className='input' onChange={handleChange} value={inputText} type="text" placeholder='Add Item...' />
          <button className='btn' onClick={addItem}>Add</button>
        </div>
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

            <h2>
              All Tasks
            </h2>
            {items.map((todoItem,index) =>
              <UnDone 
              text = {todoItem}
              index = {index}
              id = {index}
              />
                           
            )}
          </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
