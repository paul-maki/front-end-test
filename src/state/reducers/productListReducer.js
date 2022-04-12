import actionProductListType from "../actions/actionProductListType"

export const productListReducer = (state = [], action) => {
    switch (action.type) {
        case actionProductListType.ADD_PRODUCT : {
            let addData = true;
            const newList = state.map(data => {
                if (data.product.id === action.payload.id && data.product.color === action.payload.color && data.product.memory === action.payload.memory) {
                    addData = false;
                    return {
                        ...data,
                        quantity: data.quantity + 1
                    }
                }
                return data
            })

            if (addData) {
                return [...state, {product: action.payload, quantity: 1}]
            } 

            return newList;
        }

        case actionProductListType.REMOVE_PRODUCT : {
            return state;
        }

        default : return state;
    }
}