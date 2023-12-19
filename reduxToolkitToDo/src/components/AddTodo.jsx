import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input,setInput]=useState('');
    const dispatch=useDispatch();
    
    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('');
    }
  return (
    <form onSubmit={addTodoHandler}> 
       <input
         type='text'
         value={input}
         placeholder='Enter a Todo...'
         onChange={(e)=>setInput(e.target.value)}

       >
       </input>
       <button type='submit'>
        ADD
       </button>
    </form>
  )
}

export default AddTodo
