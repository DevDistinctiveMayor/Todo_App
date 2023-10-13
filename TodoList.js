import Todo from './Todo';



const TodoList = ({todoList, setTodoList}) => {
    return(
        <div>{todoList.map((todoItem) => (
            <Todo
                setTodoList = {setTodoList}
                key={todoItem.id} 
                todoItem={todoItem} 
                todoList={todoList}
            ></Todo>
        ))};
            {/* className={style.todooutput}
            <h3 className={style.todoinput}>{todoList.map((todoItems) => {
                <Todo todoItems={todoItems}></Todo>
            })}</h3> */}
            
            
        </div>
    )
}
export default TodoList;
