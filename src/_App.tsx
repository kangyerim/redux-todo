import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import TodoInput from "./schedule/ToDoInput";
import store from "./schedule/store"
import TodoList from "./schedule/ToDoList";


const _App = () => {

  return <>
    <Provider store = {store}>
    <TodoInput/> <br/>
    <TodoList/>
    </Provider>
  </>
}

export default _App;
