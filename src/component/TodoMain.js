import React from 'react';

import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";

const TodoMain = ({todoList}) => {


    return (
        <ul className='todo-list'>
            {
                //동적랜더링
                //map을 돌릴때 key값을 꼭 넣어주기
                todoList.map(todo=><TodoItem key={todo.id} item={todo}/>)

                //forEach, map 차이
                //void    ,  매핑한 새로운 배열 리턴
            }
        </ul>
    );
};

export default TodoMain;