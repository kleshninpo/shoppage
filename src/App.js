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
    const { totalItems, totalPrice, discountSize, isDiscount } = this.props;
    return (
      <div className="App">
        <h1>{totalItems}</h1>
        <Header/>
        <ShopCart/>
        <Calculate
          totalPrice = {totalPrice}
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
  totalItems: store.totalItems,
  totalPrice: store.totalPrice,
  discountSize: store.discountSize,
  isDiscount: store.discountSize,
});

export default connect(mapStateToProps)(App);
