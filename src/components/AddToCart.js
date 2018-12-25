import React, { Component } from 'react';
import AddToCartItemsList from './AddToCartItemsList';

class AddToCart extends Component {
  render () {
    return (
      <div className='Add-to-cart'>
        <div className="content-wrapper">
          <h2 className="main-caption">Добавьте к вашему заказу</h2>
          <AddToCartItemsList/>
        </div>
      </div>
    );
  }
}

export default AddToCart;
