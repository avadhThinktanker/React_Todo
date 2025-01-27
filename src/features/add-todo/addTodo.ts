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
    edit: { id: string | number; todo: string } | null;
    searchTodo: string;
}

const initialState: todoState = {
    todos: [],
    edit: null,
    searchTodo: "",
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
        editTodo: (
            state,
            action: PayloadAction<{ id: string | number; todo: string }>
        ) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            state.edit = todo ? todo : null;
        },
        submitUpdate: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find((todo) => todo.id === state.edit?.id);
            if (todo) {
                todo.todo = action.payload;
            }
            state.edit = null;
        },
        searchTodos: (state, action: PayloadAction<string>) => {
            state.searchTodo = action.payload;
        }
    },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo, submitUpdate, searchTodos } =
    todoSlice.actions;
export const selectTodos = (state: RootState) => state.todos;
export const selectEdit = (state: RootState) => state.todos.edit;
export default todoSlice.reducer;
