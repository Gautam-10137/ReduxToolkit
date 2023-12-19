import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
    todos:[{id:1,text:"Hello World"}]
}

export const todoSlice= createSlice({
    name:'todo',
    initialState,
    reducers:{
        // addTodo is action and we define its corresponding reducer which take two input -> state and action.
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload )
          
        }

    }
})

export const {addTodo,removeTodo}=todoSlice.actions;   // to use in components

// to register in store
export default todoSlice.reducer;

// Now need to register these reducers in store
