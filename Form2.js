import style from "../style.module.css"

const Form2= () => {
    return(
        <div>
            <form className={style.todolistform}>
                <header className = {style.todolistheader}>TodoList</header>
                <button className = {style.todolistbutton}>All</button>
                <button className = {style.todolistbutton}>Done</button>
                <button className = {style.todolistbutton}>Todo</button>
            </form>
        </div>
    )
}
export default Form2;
