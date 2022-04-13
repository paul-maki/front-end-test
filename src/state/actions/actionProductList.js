import actionProductListType from "./actionProductListType"

export const addProduct = (payload) => {
    return {
        type: actionProductListType.ADD_PRODUCT,
        payload: payload
    }
}