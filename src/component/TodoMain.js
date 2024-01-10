import React from 'react';
import {MdDelete, MdDone} from "react-icons/md";
import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";
const TodoMain = () => {
    return (
        <ul class='todo-list'>
           <TodoItem/>
           <TodoItem/>
           <TodoItem/>

        </ul>
    );
};

export default TodoMain;