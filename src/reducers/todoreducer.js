import {todostate} from "../state/todostate";
import {ADD_TODO,DELETE_TODO,UPDATE_TODO} from "../constants/todoconstants"
export let todoReducer=(state=todostate,action)=>{
    let newstate;
    switch (action.type){
      
        case ADD_TODO:
            newstate=[...state];
            newstate.push(action.payload)
            return newstate
        case UPDATE_TODO:
            newstate=[...state];
            const index=newstate.findIndex(todo=>todo.id)
                if(index != -1)
                {
                    newstate[index]=action.payload
                }
            
            return newstate
        case DELETE_TODO:
            //console.log("Executed")
            newstate=[...state];
            newstate=newstate.filter(({id,todoitem})=>id!=action.payload)
            return newstate
        default:
            return state;        
    }
}