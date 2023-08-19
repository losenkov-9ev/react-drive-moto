import axios from 'axios';
import qs from "qs";
import { TProduct } from '../components/Product';
import { TCategoryItem } from '../components/CategoryItem';

const API_URL = 'https://068d2234e821ae6e.mokky.dev'

type TFetchProducts = (category: string, params?: Record<string, any>) => Promise<TProduct[]>
type TFetchCategory = (params?: Record<string, any>) => Promise<TCategoryItem[]>

export const fetchCategories: TFetchCategory = async (params) => {
  try {
    const response = await axios.get(`${API_URL}/categories?${qs.stringify(params)}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении категорий:', error);
    return [];
  }
}

export const fetchProducts: TFetchProducts = async (category, params) => {
  try {
    const response = await axios.get(`${API_URL}/${category}?${qs.stringify(params)}`);
    return params && params.page ? response.data.items : response.data;
  } catch (error) {
    console.error('Ошибка при получении товаров:', error);
    return [];
  }
}

