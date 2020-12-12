 import {ADD_TODO,UPDATE_TODO,DELETE_TODO} from "../constants/todoconstants"
 export const addTodo=(text)=>{
     return(
     {type:ADD_TODO,
     payload:text,
    })
 }
 export const deleteTodo=(idtodo)=>{
    return(
    {type:DELETE_TODO,
    payload:idtodo,
   })
}
export const updateTodo=(todo)=>{
    return(
    {type:UPDATE_TODO,
    payload:todo,
   })
}