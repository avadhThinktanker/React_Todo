import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/add-todo/addTodo";
import filterReducer from "../features/add-todo/filterTodo";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
    key: "root",
    storage,
};
const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
