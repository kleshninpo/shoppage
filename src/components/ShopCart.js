import React, { Component } from 'react';
import GoodsList from '../components/GoodsList';

class ShopCart extends Component {
  render() {
    return (
      <section role='main' className='Shop-cart'>
        <div className="content-wrapper">
          <h2 className='main-caption'>Ваша корзина:</h2>
          <div className="grid-row">
            <h3>Товар</h3>
            <h3>Описание</h3>
            <h3>Количество</h3>
            <h3>Цена</h3>
            <h3>Удалить</h3>
          </div>
          <GoodsList/>
        </div>
      </section>
    );
  }
}
export default ShopCart;
