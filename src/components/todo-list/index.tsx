import SearchTodo from "../seach-todo/index.js";
import Todos from "../todo/index.js";
import { editTodo, selectTodos } from "../../features/add-todo/addTodo.js";
import { useSelector } from "react-redux";
import type { Todo } from "../../features/add-todo/addTodo.js";
import { selectFilter } from "../../features/add-todo/filterTodo.js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const TodoList = () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();
    const filterType = useSelector(selectFilter);
    const [data, setData] = useState<Todo[]>(todos.todos);
    const { filter } = filterType;

    useEffect(() => {
        if (filter === "All") return setData(todos.todos);
        if (filter === "Completed")
            return setData(
                todos.todos.filter((todo: Todo) => todo.completed === true)
            );
        if (filter === "Incompleted")
            return setData(todos.todos.filter((todo: Todo) => !todo.completed));
    }, [filter, todos.todos, todos.edit]);

    function handleclick(todo: Todo) {
        dispatch(editTodo(todo));
    }
    return (
        <div>
            <div>
                <SearchTodo />
            </div>
            <div>
                {data.map((todo: Todo) => (
                    <div key={todo.id} onDoubleClick={() => handleclick(todo)}>
                        <Todos todo={todo.todo} id={todo.id} completed={todo.completed} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
