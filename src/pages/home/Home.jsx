import React from 'react';
import './home.css';
import Card from '../../components/card/Card';
import { useGlobalContext } from '../../context';
import ProductCategory from '../../components/category/ProductCategory';
import Swiper from '../../components/swiper/Swiper';

const Home = () => {

  const { isLoading, products } = useGlobalContext();
  // console.log(products)



  return (
    <div className="main">
      <Swiper />
      <ProductCategory />
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
    </div>

  )
}
export default Home;

