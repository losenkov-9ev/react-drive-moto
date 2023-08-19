import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./asyncActions";

import { TCategoryItem } from "../../components/CategoryItem";
import { ECategoriesStatus, ICategoriesState } from "./types";

const initialState: ICategoriesState = {
  categories: [],
  status: ECategoriesStatus.LOADING,
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<TCategoryItem[]>): void {
      state.categories = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = ECategoriesStatus.LOADING;
      state.categories = [];
    })

    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.status = ECategoriesStatus.FULLFILLED;
      state.categories = action.payload || [];
    })
    
    builder.addCase(fetchCategories.rejected, (state) => {
      state.status = ECategoriesStatus.ERROR;
      state.categories = [];
    })
  },
})

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;