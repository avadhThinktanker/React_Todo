import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/add-todo/addTodo";
const store = configureStore({
    reducer: todoReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
