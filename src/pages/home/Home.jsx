import React from 'react';
import './home.css';
import Card from '../../components/card/Card';
import { useGlobalContext } from '../../context';
import ProductCategory from '../../components/category/ProductCategory';
import Swiper from '../../components/swiper/Swiper';


const Home = () => {

  const { isLoading, products } = useGlobalContext();
  // console.log(products)

  if (isLoading) {
    return <div className='loading__'>Loading...</div>
  }

  if (products.length === 0) {
    return (
      <div className='loading__'>
        <img width="200px" src="../images/cart.png" alt="image" />
        <h2 >No such items</h2>
      </div>
    )
  }
  else {



    return (
      <div className="main">
        <Swiper />
        <h3 className='heading'>Our Products</h3>
        <div className='container'>



          {
            products.map((product) => {
              return (
                <div key={product.id}>
                  <Card product={product} />
                </div>
              )
            })
          }

        </div>
        <ProductCategory />

      </div>

    )
  }
}
export default Home;

