import React, { Component } from 'react';
import goodsList from '../data/goodsList';
import { connect } from 'react-redux';
import { addGoodInCart } from '../actions/addGoodInCart';
import { deleteAllThisGoodFromCart } from '../actions/deleteAllThisGoodFromCart';
import { deleteGoodFromCart } from '../actions/deleteGoodFromCart';

class GoodsList extends Component {
  renderGoods = (item) => {

    const { id, name, price, img, color, size, code, quantity } = item;
    const handleDeleteAllThisItemsFromCart = () => {
      this.refs[id].setAttribute('class', 'noneDisplay');
      return this.props.deleteAllThisGoodFromCart(item);
    };

    return (
      <div key={id} ref={id} className="flex-row">
        <img src={img} alt={'Изображение ' + { name }}/>
        <div className="flex-row__item-info">
          <p className="item-info__name">{name}</p>
          <p className="item-info__code">Код: {code}</p>
          <p className="item-info__size">Размер: {size}</p>
          <p className="item-info__color">Цвет: {color}</p>
        </div>
        <p className="item-quantity">
          <span className="change-quantity" onClick={(() => this.props.deleteGoodFromCart(item))}>
            -
          </span>
          {
            quantity
          }
          <span className="change-quantity" onClick={() => this.props.addGoodInCart(item)}>
            +
          </span>
        </p>
        <p className="price">{price} руб.</p>
        <div>
          <span className="delete" onClick={(e) => handleDeleteAllThisItemsFromCart(e)}>✖</span>
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
