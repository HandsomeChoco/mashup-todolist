import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../reducer/TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.length>0 ? todos.map(todo => 
        <TodoItem 
          id={todo.id} 
          key={todo.id} 
          done={todo.done} 
          text={todo.text} 
        />
      ) : '할 일이 없네요. 오늘은 어떤 일을 시작해볼까요?' }
    </TodoListBlock>
  )
}

export default TodoList;