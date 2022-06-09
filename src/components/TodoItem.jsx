import React from 'react';

export  function TodoItem({todo,toggleTodo}) {
    const{id,task,complete} = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    }


  return  <li class="lista">
      <input class="check"type="checkbox" checket={complete} onChange={handleTodoClick} />
      {task}
      </li>
    
}
