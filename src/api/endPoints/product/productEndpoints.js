import { API_URL } from "../../api_url";

//Get products
export const API_PRODUCT = '/product';
export const API_PRODUCT_ENDPOINT = `${API_URL}${API_PRODUCT}`;

//Get product by id
export const API_PRODUCT_DETAIL_ENDPOINT = `${API_PRODUCT}/:id`;

//Add product
export const API_ADD_PRODUCT_ENDPOINT = `${API_URL}/cart`;