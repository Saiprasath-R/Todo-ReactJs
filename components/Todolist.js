import React from 'react'
import Todo from './Todo'

function Todolist({todos,setTodos,filtTodos}) {
   
    return (
     <div className="todo-container">
            <ul className="todo-list">
               {filtTodos.map( (t)=> 
                 <Todo 
                   text={t.text}
                   key={t.id}
                   todo={t} 
                   setTodos={setTodos} 
                   todos={todos} /> 
                         )
                }
            </ul>
     </div>
    )
}

export default Todolist