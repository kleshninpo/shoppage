import React, { Component } from 'react';
import Header from './components/Header';
import ShopCart from './components/ShopCart';
import Calculate from './components/Calculate';
import AddToCart from './components/AddToCart';
import Footer from './components/Footer';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    const { goodsInCart, discountSize, isDiscount } = this.props;
    return (
      <div className="App">
        <Header/>
        <ShopCart/>
        <Calculate
          totalPrice = {
            goodsInCart.length
              ? goodsInCart.reduce((acc, item) => acc + item.price, 0)
              : 0
          }
          discountSize = {discountSize}
          isDiscount = {isDiscount}
        />
        <AddToCart/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  goodsInCart: store.goodsInCart,
  discountSize: store.discountSize,
  isDiscount: store.isDiscount,
});

export default connect(mapStateToProps)(App);
