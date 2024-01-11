import {MdAdd, MdDelete, MdDone} from "react-icons/md";
import React from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";
import './scss/todoTemplate.scss';

const TodoTemplate = () => {
    /*
    리액트는 부모 컴포넌트에서 자식컴포넌트로의 데이터 이동이 반대보다 쉽기때문에
    할일 데이터는 상위 부모 컴포넌트
     */

    const todoList = [
        {
            id: 1,
            title: '장보기',
            done: false
        },
        {
            id: 2,
            title: '저녁먹기',
            done: true
        },
        {
            id: 3,
            title: '수다떨기',
            done: false
        },
        {
            id: 4,
            title: '축구하기',
            done: false
        }

    ];

    //데이터 상향식 전달을 위해 부모가 자식에게 함수를 하나 전달
    const addTodo=(todoText)=>{
        console.log(todoText)
    }

    return (
        <div className='TodoTemplate'>
            <TodoHeader/>
            <TodoMain todoList={todoList}/>
            <TodoInput onAdd={addTodo}/>

        </div>
    );

};

export default TodoTemplate;