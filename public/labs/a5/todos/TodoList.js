import TodoItem from "./TodoItem.js";
import todos from "./todos.js";
/*const TodoList = () => {
   return(`
       <ul>
           <li>Buy milk</li>
           <li>Pickup the kids</li>
           <li>Walk the dog</li>
       </ul>
   `);
}*/

/*const TodoList = () => {
   return(`
       <ul>
           ${TodoItem('Buy milk')}
           ${TodoItem('Pickup the kids')}
           ${TodoItem('Walk the dog')}
       </ul>
   `);
}*/

const TodoList = () => {
   return(`
      <ul>
         ${
            todos.map(todo => {
               return(TodoItem(todo));
            }).join('')
         }
      </ul>
   `);
}

export default TodoList;