import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

export interface Filter {
    filter: string;
}
const initialState: Filter = {
    filter: "All",
};
const filterSlice = createSlice({
    name: "Filter",
    initialState,
    reducers: {
        filterTodo: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
    },
});
export const { filterTodo } = filterSlice.actions;
export const selectFilter = (state: RootState) => state.filter;
export default filterSlice.reducer;