import React,{useState, useEffect} from 'react'
import "./App.css"
import Form from './components/Form'
import Todolist from './components/Todolist'

export default function App() {

  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filtTodos, setFiltTodos] = useState([]);

  
  useEffect( ()=>{
        filterHandler();
  },[todos,status] )


  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setFiltTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFiltTodos(todos.filter(todo => todo.completed === false));
        break;
      default :
        setFiltTodos(todos);
        break;    
    }
  }
  return(
    <div>
       <header> SAI's TODO List </header>
       <h1>{inputText}</h1>
       <Form inputText={inputText} filtTodos={filtTodos} setinputText={setinputText} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
       <Todolist todos= {todos} filtTodos={filtTodos} setTodos={setTodos}/>
    </div>
  )
}
