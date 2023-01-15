import React from 'react'
import { useNavigate } from 'react-router-dom';
import './card.css';

const Card = ({ product }) => {
  const navigate = useNavigate();
  function handleProductClick() {
    navigate(`./details/${product.id}`);
  }
  return (
    <div className='card__container' onClick={handleProductClick}>
      <div className='category--btn'>{product.category}</div>
      <div className='image__container'>
        <img src={product.thumbnail} alt="Items__Image" className='items__image' />
      </div>

      <h2>{product.title}</h2>


      <h4 className='product__price'>${product.price}</h4>




    </div>
  )
}

export default Card