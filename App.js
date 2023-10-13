import Header from "./components/Header";
import Form from "./components/Form"
import Form2 from "./components/Form2";
import {useState} from 'react'
import TodoList from "./components/TodoList";
function App() {
  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  return (
    <div className="App">
      <Header/>
      <Form 
        todo={todo} 
        setTodo = {setTodo} 
        todoList ={todoList} 
        setTodoList = {setTodoList}>
      </Form >
      <Form2 ></Form2>
      {/* <Form3></Form3> */}
   
      <TodoList setTodoList={setTodoList} todoList={todoList}></TodoList>

    </div>
  );
}

export default App;
