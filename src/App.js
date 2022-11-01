import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from './MyComponents/AddTodo';
import React, { useState , useEffect } from 'react';
import {Route,Routes} from 'react-router-dom';
import About from './MyComponents/About';


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo =[];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const  onDelete = (todo) =>{
    console.log("i m on delete of todo", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos" ,JSON.stringify(todos));
  }

  const addTodo = (title,desc)=>{
    console.log("todo added", title, desc) 
    let sno;
    if(todos.length==0){
      sno = 0;
    }else {
      sno = todos[todos.length-1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
    
      
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos" ,JSON.stringify(todos));
    }, [todos])
  

  return (
  <>
  <Routes>
    <Route path='/' exact element={<>
      <Header title="My Todos List" searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/></>}></Route>
    <Route path='/about' element={<About/>}></Route>
    
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
