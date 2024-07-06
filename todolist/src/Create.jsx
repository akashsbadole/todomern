import React, {useState} from 'react'
import axios from 'axios'
import './App.css'

function Create() {
    const [task, setTask] = useState()
    // const handleAdd=()=>{
    //     axios.post('http://localhost:3001/add', {task:task})
    //     .then(result => console.log(result))
    //     .catch(err => console.error(err))
    // }
    const handleAdd = () => {
      if (typeof task === 'string' && task.trim() !== '') { // Check if task is not empty (after trimming whitespace)
          axios.post('http://localhost:3001/add', { task: task })
              .then(result => console.log(result))
              .catch(err => console.error(err));
      } else {
          console.log('Task input is empty. Please enter a task.');
      }
  };
  return (
    <div className='create_form'>
        <input type='text' value={task} placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
        <button type="button" onClick={handleAdd} >Add</button>
    </div>
  )
}

export default Create;