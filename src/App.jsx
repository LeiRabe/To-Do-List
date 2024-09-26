import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState } from "react";


/*Note: Because the todos values are needed by both the child components (TodoList & TodoInput)
  it should be declared in the parent component
  because in react the values can only be passed down: from parent to child*/
function App() {

  //inside the useState param --> default value: [] (empty array)
  //useState will refresh the UI with the new "state" of the variable

  //state of the list: the list of the todos to display
  const [todos, setTodos] = useState([]);
  //state of the input: todoValues
  const [todoValue, setTodoValue] = useState('');

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
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);

  }

  return (
    //<> </> --> React fragment
    //<TodoList> and <TodoInput> are on the same level so they can't pass values to each other 
    <>
      <TodoInput 
      todoValue={todoValue} 
      setTodoValue={setTodoValue} 
      handleAddTodos={handleAddTodos} 
      />

      <TodoList 
      todos={todos} 
      handleDeleteTodo={handleDeleteTodo}
      handleEditTodo = {handleEditTodo} 
      />
    </>
  );
}

export default App;
