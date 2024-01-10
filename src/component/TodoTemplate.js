import {MdAdd, MdDelete, MdDone} from "react-icons/md";
import React from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";
import './scss/todoTemplate.scss';

const TodoTemplate = () => {
    return (
        <div className='TodoTemplate'>
            <TodoHeader/>
            <TodoMain/>
            <TodoInput/>

        </div>
    );

};

export default TodoTemplate;