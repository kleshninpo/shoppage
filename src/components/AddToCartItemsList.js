import React, { Component } from 'react';
import addToCartGoodsList from '../data/addToCartGoodsList';

const renderAddToCartItems = ({ id, img, name, price }) => (
    <div className='Add-to-cart__item' key={id}>
    <img src={img} alt={'Изображение ' + { name }}/>
    <p>{name}</p>
    <p>{price}</p>
  </div>
);

class AddToCartItemsList extends Component {
  render () {
    return (
      <div className="goods-wrapper">
        {
          addToCartGoodsList.map(item => renderAddToCartItems(item))
        }
      </div>
    );
  }
}

export default AddToCartItemsList;
