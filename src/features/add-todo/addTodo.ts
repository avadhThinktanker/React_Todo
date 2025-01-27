import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const nid = nanoid();
interface Todo {
    id: string | number;
    todo: string;
    complated: boolean;
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
            const todo: Todo = {
                id: nid,
                complated: false,
                todo: action.payload,
            };
            state.todos.push(todo);
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.complated = !todo.complated;
            }
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
