import style from '../style.module.css'
import TodoList from './TodoList';
const Todo = ({todoItem, todoList, setTodoList}) => {
    const deleteTodo = () => {
        setTodoList(todoList.filter((item) => item.id !== todoItem.id)) 
    } 
    const deleteAllTask = () => {
        setTodoList(todoList.filter((item) => item === ""))
    }
    return(
        <div>
        <div>
            <h3 className={style.todooutput} >{todoItem.name}</h3>
           
            
            
        </div>

        <div>
        <button onClick={deleteTodo} className={style.todooutputbutton}>Delete done tasks</button>
        <button onClick={deleteAllTask} className={style.todooutputbutton}>Delete all tasks</button>
        </div>
        </div>
    )
}
export default Todo;
