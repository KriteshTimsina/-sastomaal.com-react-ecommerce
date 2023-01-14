import React from 'react'
import './category.css'
import { useGlobalContext } from "../../context";

const ProductCategory = () => {
    const { isLoading, category } = useGlobalContext();
    if (category.length === 0) {
        return (<p>loading.....</p>)
    }
    return (
        <div color='white' className='container-category'>
            <h2>Categories</h2>
            <ul>
                <li>
                    {
                        category.category.map(i => {
                            return (
                                <a href="#">{i}</a>
                            )
                        })
                    }
                </li>

            </ul>
        </div>

    )
}
export default ProductCategory