import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
export interface Todo {
    id: string | number;
    todo: string;
    completed: boolean;
}
interface todoState {
    todos: Todo[];
}

const initialState: todoState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const nid = nanoid();
            const todo: Todo = {
                id: nid,
                completed: false,
                todo: action.payload,
            };
            state.todos.push(todo);
        },
        deleteTodo: (state, action: PayloadAction<number | string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action: PayloadAction<number | string>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todos;
export default todoSlice.reducer;
