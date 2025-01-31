import React from "react";
import { useDispatch } from "react-redux";
import type { Todo } from "../../features/add-todo/addTodo";
import { deleteTodo, toggleTodo } from "../../features/add-todo/addTodo";

const Todos = (todo: Todo) => {
    const dispatch = useDispatch();
    function handleRemove() {
        const todoId = todo.id;
        dispatch(deleteTodo(todoId));
    }
    function handleChange() {
        dispatch(toggleTodo(todo.id));
    }

    return (
        <div className="flex justify-between items-center text-2xl text-white mt-2 py-2 px-4 bg-[#C4BABA5E] backdrop-blur-sm rounded-full">
<<<<<<< HEAD
            <h1 className={todo.completed ? "line-through text-black" : ""}>
=======
            <h1
                className={
                    todo.completed
                        ? "line-through text-black max-w-[300px] overflow-hidden whitespace-nowrap text-ellipsis"
                        : "max-w-[300px] overflow-hidden whitespace-nowrap text-ellipsis"
                }
            >
>>>>>>> dev
                {todo.todo}
            </h1>
            <div className="flex gap-3 items-center">
                <input
                    className="w-6 h-6 cursor-pointer"
                    onChange={handleChange}
                    type="checkbox"
                    name="todo-status"
                    id="todo-status"
                    checked={todo.completed}
                />

                <button onClick={handleRemove} className="cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="white"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                    >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default React.memo(Todos);
