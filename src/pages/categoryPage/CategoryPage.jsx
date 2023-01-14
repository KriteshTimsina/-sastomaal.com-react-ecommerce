import React from 'react'
import ProductCategory from '../../components/category/ProductCategory'
import App from '../../components/swiper/Swiper'
import './styles.css'
const CategoryPage = () => {
    return (
        <>
            <App />
            <h1 className='heading--category'>Categories</h1>
            <ProductCategory />
        </>

    )
}

export default CategoryPage