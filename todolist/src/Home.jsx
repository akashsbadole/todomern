import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Create from './Create'

function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err =>console.log(err))
    }, [])
  return (
    <div className='home'>
        <h2>Todo List</h2>
        <Create />
        {
            todos.length === 0 
            ? 
            <div>
                <h3>No Record Found</h3>
            </div>
            : 
            todos.map(todo => (
                <div key={todo.id}>
                    {todo.task}
                </div>
            ))
        }
    </div>
  )
}

export default Home