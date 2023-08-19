import { TCategoryItem } from "../../components/CategoryItem";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk<TCategoryItem[]>(
  'categories/fetchCategoriesStatus',
  async () => {
    const { data } = await axios.get<TCategoryItem[]>(
      `https://068d2234e821ae6e.mokky.dev/categories`,
    );
    return data;
  },
);