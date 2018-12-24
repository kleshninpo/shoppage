import React, { Component } from 'react';
import goodsList from '../data/goodsList';
import { connect } from 'react-redux';
import { plusTotalItems, minusTotalItems } from "../actions/Actions";

class GoodsList extends Component {
    render () {

        const {totalItems, totalPrice, plusTotalItems, minusTotalItems} = this.props;
        const onClPlus = () => plusTotalItems(totalItems);
        const onClMinus = () => minusTotalItems(totalItems);

        const renderGoods = ({id, name, price, img, color, size, code}) => {
            return <div key={id} className="grid-row" price={price} incart='true'>
                <img src={img} alt={'Изображение ' + {name}}/>
                <div className="grid-row__item-info">
                    <p className="item-info__name">{name}</p>
                    <p className="item-info__code">Код: {code}</p>
                    <p className="item-info__size">Размер: {size}</p>
                    <p className="item-info__color">Цвет: {color}</p>
                </div>
                <p className='item-quantity'>
                    <span className='change-quantity' onClick={onClMinus}>-</span>
                    {totalPrice}
                    <span className='change-quantity' onClick={onClPlus}>+</span>
                </p>
                <p className='price'>{price} руб.</p>
                <div>
                    <span className='delete'>✖</span>
                </div>
            </div>
        }

        return (
            <div className='GoodsList'>
                {
                    goodsList.map(item => renderGoods(item))
                }
            </div>
        )
    }
}
const mapStateToProps = store => ({
    totalItems: store.totalItems,
    totalPrice: store.totalPrice,
});

const mapDispatchToProps = dispatch => ({
    plusTotalItems: totalItems => dispatch(plusTotalItems(totalItems)),
    minusTotalItems: totalItems => dispatch(minusTotalItems(totalItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList);
