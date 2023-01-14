export default function reducer(state, action) {
    switch (action.type) {
        case "FETCH_PRODUCTS": {
            return {
                ...state,
                products: action.payload.products
            }
        }
        case "SEARCH_PRODUCTS": {
            return {
                ...state,
                query: action.payload
            }
        }
        case "FETCH_CATEGORIES": {
            return {
                ...state,
                category: action.payload,
                isLoading: false,
            }
        }
        default:
            return state
    }
}