import SearchTodo from "../seach-todo/index.js";
import Todos from "../todo/index.js";
import { selectTodos } from "../../features/add-todo/addTodo.js";
import { useSelector } from "react-redux";
import type { Todo } from "../../features/add-todo/addTodo.js";
import { selectFilter } from "../../features/add-todo/filterTodo.js";
import { useEffect, useState } from "react";

const TodoList = () => {
    const todos = useSelector(selectTodos);
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
    }, [filter, todos.todos]);

    // const renderTodos = todos.todos.map((todo: Todo) => {

    //     return <Todos key={todo.id} todo={todo.todo} id={todo.id} completed={todo.completed} />;
    // });
    return (
        <div>
            <SearchTodo />
            {data.map((a: Todo) => (
                <Todos key={a.id} todo={a.todo} id={a.id} completed={a.completed} />
            ))}
        </div>
    );
};

export default TodoList;
