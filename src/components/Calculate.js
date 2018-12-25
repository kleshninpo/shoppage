import React, { Component } from 'react';

class Calculate extends Component {
  render () {
    const { totalPrice, discountSize, discount } = this.props;
    return (
      <div className='Calculate'>
        <div className='content-wrapper'>
          <div className='promocode'>
            <div className="input-container">
              <label htmlFor="promo-input">Есть промокод?</label>
              <input id='promo-input' type="text" placeholder='Введите промокод'/>
            </div>

            <button className='ellipse-button enter-promo'>Применить</button>
          </div>
          <div className='common-price'>
            <div className="common-price__row">
              <p>Сумма заказа</p>
              <p>{totalPrice} руб.</p>
            </div>
            {
              discount ?
                <div className="common-price__row promo-row">
                  <p>Промокод</p>
                  <p>-{discountSize} руб</p>
                </div> : ''
            }
            <div className="common-price__row">
              <p>Всего:</p>
              <p>{
                discount ?
                  totalPrice - discountSize :
                  totalPrice
              } руб.
              </p>
            </div>
            <button className='ellipse-button buy-items'>Сделать заказ</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculate;
