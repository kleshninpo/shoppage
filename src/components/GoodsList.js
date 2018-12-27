import React, { Component } from 'react';
import goodsList from '../data/goodsList';
import { connect } from 'react-redux';
import { addGoodInCart } from '../actions/addGoodInCart';
import { deleteAllThisGoodFromCart } from '../actions/deleteAllThisGoodFromCart';
import { deleteGoodFromCart } from '../actions/deleteGoodFromCart';

class GoodsList extends Component {
  renderGoods = (item) => {

    const { id, name, price, img, color, size, code, quantity } = item;
    const f = (e) => {
      switch (e.currentTarget.textContent) {
        case '+':
          return this.props.addGoodInCart(item);
        case '-':
          if (item.quantity !== 0)
            return this.props.deleteGoodFromCart(item);
          break;
        default: console.log('Произошло что-то удивительное и непредсказуемое...');
      }
    };

    const f2 = () => {
      this.refs[id].setAttribute('class', 'noneDisplay');
      return this.props.deleteAllThisGoodFromCart(item);
    };

    return (
      <div key={id} ref={id} className="grid-row">
        <img src={img} alt={'Изображение ' + { name }}/>
        <div className="grid-row__item-info">
          <p className="item-info__name">{name}</p>
          <p className="item-info__code">Код: {code}</p>
          <p className="item-info__size">Размер: {size}</p>
          <p className="item-info__color">Цвет: {color}</p>
        </div>
        <p className="item-quantity">
          <span className="change-quantity" onClick={(e) => f(e)}>-</span>
          {
            quantity
          }
          <span className="change-quantity" onClick={(e) => f(e)}>+</span>
        </p>
        <p className="price">{price} руб.</p>
        <div>
          <span className="delete" onClick={(e)=>f2(e)}>✖</span>
        </div>
      </div>
    );
  };

  render () {
    return (
      <div className="GoodsList">
        {
          goodsList.map(item => this.renderGoods(item))
        }
      </div>
    );
  }
}
const mapStateToProps = store => ({
  addGoodInCart: store.addGoodInCart,
  deleteGoodFromCart: store.deleteGoodFromCart,
  goodsInCart: store.goodsInCart,
});

const mapDispatchToProps = dispatch => ({
  addGoodInCart: good => dispatch(addGoodInCart(good)),
  deleteGoodFromCart: good => dispatch(deleteGoodFromCart(good)),
  deleteAllThisGoodFromCart: good => dispatch(deleteAllThisGoodFromCart(good)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList);
