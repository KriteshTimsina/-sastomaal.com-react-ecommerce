import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import ApiCallback from '../../components/ApiCallback/ApiCallback';
import './detail.css';
import { BiArrowBack } from 'react-icons/bi';
export const Detail = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getSingleProduct();
  }, [])

  async function getSingleProduct() {
    const product = await ApiCallback(`https://dummyjson.com/products/${params.id}`);
    console.log(product);
    setProduct(product);
  }

  return (
    <div className="container__clicked">
      <div className="image__container__clicked">
        <img className='image' src={product.thumbnail} alt="images" />
        <button onClick={() => navigate('/')} className="go-back">
          < BiArrowBack />
        </button>
      </div>
      <div className="details__container__clicked">
        <h2 className="product__title__clicked__clicked">{product.title}</h2>
        <p className='product__info__clicked'>Category: <span>{product.category}</span></p>
        <p className='product__info__clicked'>Brand: <span>{product.brand}</span> </p>
        <hr />
        <h3 className='product__price__clicked'>Price: ${product.price}</h3>
        <div className="buttons__clicked">
          <button className='button btn__buy__clicked'>Buy Now</button>
          <button className='button btn__cart__clicked'>Add to Cart</button>
        </div>
      </div>


    </div>
  )
}
