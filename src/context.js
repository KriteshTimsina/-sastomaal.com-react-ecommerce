
import React, { useEffect, useReducer, useContext } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialValue = {
    products: [],
    isLoading: true,
    query: "",
    category: [],
}
const API_PRODUCTS = 'https://dummyjson.com/products';
const SEARCH_PRODUCTS = `https://dummyjson.com/products/search`;
const PRODUCTS_CATEGORY = `https://dummyjson.com/products/categories`;

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    const fetchApiData = async (url) => {
        try {

            const res = await fetch(url);
            const data = await res.json();

            dispatch({
                type: "FETCH_PRODUCTS",
                payload: {
                    products: data.products,
                }
            })
        }
        catch (e) {
            console.log(e);
        }
    }

    const searchProductsApi = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            fetchApiData(url);
        }
        catch (e) {
            console.log(e);
        }
    }
    const getProductsCategory = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data[0]);
            dispatch({
                type: "FETCH_CATEGORIES",
                payload: {
                    category: data
                }

            })
        }
        catch (e) {
            console.log(e);
        }
    }


    function setSearch(searchQuery) {

        dispatch({
            type: "SEARCH_PRODUCTS",
            payload: searchQuery,

        })
    }

    useEffect(() => {
        fetchApiData(API_PRODUCTS);
        searchProductsApi(`${SEARCH_PRODUCTS}?q=${state.query}`);
        getProductsCategory(PRODUCTS_CATEGORY);
    }, [state.query])

    return (
        <AppContext.Provider value={{ ...state, setSearch }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => useContext(AppContext);

export { useGlobalContext, AppContext, AppProvider };