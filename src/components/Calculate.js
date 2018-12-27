import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applyDiscount } from '../actions/applyDiscount';

class Calculate extends Component {
  f = (e) => {
    const inputValue = this.refs.promoInput.value;
    if (inputValue === '123456') {
      e.currentTarget.setAttribute('disabled', true);
      this.props.applyDiscount();
    }
  };

  render () {
    const { totalPrice, discountSize, isDiscount } = this.props;
    return (
      <div className='Calculate'>
        <div className='content-wrapper'>
          <div className='promocode'>
            <div className="input-container">
              <label htmlFor="promo-input">Есть промокод?</label>
              <input id='promo-input' ref='promoInput' type="text" placeholder='Введите промокод'/>
            </div>

            <button className='ellipse-button enter-promo'
                    onClick={(e) => this.f(e)}>
              Применить
            </button>
          </div>
          <div className='common-price'>
            <div className="common-price__row">
              <p>Сумма заказа</p>
              <p>{totalPrice} руб.</p>
            </div>
            {
              isDiscount ?
                <div className="common-price__row promo-row">
                  <p>Промокод</p>
                  <p>-{discountSize} руб</p>
                </div> : ''
            }
            <div className="common-price__row">
              <p>Всего:</p>
              <p>{
                isDiscount
                  ? totalPrice >= 1800 ? totalPrice - discountSize : 0
                  : totalPrice
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

const mapDispatchToProps = dispatch => ({
  applyDiscount: () => dispatch(applyDiscount()),
});
const mapStatetoProps = state => ({
  isDiscount: state.isDiscount,
});

export default connect(mapStatetoProps, mapDispatchToProps)(Calculate);
