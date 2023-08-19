import { TCategoryItem } from "../../components/CategoryItem";

export enum ECategoriesStatus {
  LOADING = 'loading',
  FULLFILLED = 'fullfilled',
  ERROR = 'error',
}

export interface ICategoriesState {
  categories: TCategoryItem[],
  status: ECategoriesStatus
}