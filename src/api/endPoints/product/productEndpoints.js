import { API_URL } from "../../api_url";

//Get products
export const API_PRODUCT = `${API_URL}/product`;

//Get product by id
export const API_PRODUCT_DETAIL = `${API_PRODUCT}/:id`;

//Add product
export const API_ADD_PRODUCT = `${API_URL}/cart`;