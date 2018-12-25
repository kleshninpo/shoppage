import React, { Component } from 'react';
import goodsList from '../data/goodsList';
import { connect } from 'react-redux';
import { pushToGoodsArr } from '../actions/pushToGoodsArr';

class GoodsList extends Component {
  render () {

    let goods = [];
    const renderGoods = ({ id, name, price, img, color, size, code }) => {

      const onClPlus = () => {
        goods.push({ name, price, code });
        console.log(goods);
        const goodsCommonPrice = goods.length
          ? goods.reduce((acc, item) => acc + item, 0)
          : 0;
        pushToGoodsArr(goods.length, goodsCommonPrice, goods);
      };

      return <div key={id} className="grid-row">
        <img src={img} alt={'Изображение ' + { name }} price={price}/>
        <div className="grid-row__item-info">
          <p className="item-info__name">{name}</p>
          <p className="item-info__code">Код: {code}</p>
          <p className="item-info__size">Размер: {size}</p>
          <p className="item-info__color">Цвет: {color}</p>
        </div>
        <p className="item-quantity">
          <span className="change-quantity">-</span>
          {this.props.totalPrice}
          <span className="change-quantity" onClick={onClPlus}>+</span>
        </p>
        <p className="price">{price} руб.</p>
        <div>
          <span className="delete">✖</span>
        </div>
      </div>;
    };

    return (
      <div className="GoodsList">
        {
          goodsList.map(item => renderGoods(item))
        }
      </div>
    );
  }
}
const mapStateToProps = store => ({
  totalPrice: store.totalPrice,
  totalItems: store.totalItems,
  pushToGoodsArr: store.pushToGoodsArr,
});

const mapDispatchToProps = dispatch => ({
  pushToGoodsArr: ()  => dispatch(pushToGoodsArr()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList);
