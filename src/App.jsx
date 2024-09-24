import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState } from "react";


/*Note: Because the todos values are needed by both the child components (TodoList & TodoInput)
  it should be declared in the parent component
  because in react the values can only be passed down: from parent to child*/
function App() {

  //inside the useState param --> default value: [] (empty array)
  //useState will refresh the UI with the new "state" of the variable
  const [todos, setTodos] = useState([]);

  //----UPDATE the todos: Add button handler----//
  function handleAddTodos(newTodo) {
    //add the newTodo to the todos (array)
    const newTodoList = [...todos, newTodo];
    //set a new state: todos = todos + newTodo
    setTodos(newTodoList);
  }

  //----DELETE the selected todo: Trash icon handle----//
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todos, todoIndex) => {
      //if the current todoIndex is different from the given index then the element can stay in the list
      return todoIndex !== index;
    }); 
    //set a new state: todos = todos - todos[todoIndex]
    setTodos(newTodoList);
  }

  //----EDIT the selected todo: crayon icon handle----//
  function handleEditTodo(index) {

  }

  return (
    //<> </> --> React fragment
    //<main> --> parent level component
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo}/>
    </>
  );
}

export default App;
