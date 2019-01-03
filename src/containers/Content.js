import React, { Component } from 'react';
import Search from '../components/Search';
import { connect } from 'react-redux';

class Content extends Component {
  render () {
    return (
      <div className='Content' >
        <div className="content-wrapper Content__content-wrapper">
          <div className='leftside'>
            <a href="/main" className='main-logo-link'>
              <img src="../img/logo.png" alt="Shop24"/>
            </a>
            <Search/>
          </div>

          <div className="rightside">
            <p>Иван</p>
            <p>В корзине: {this.props.goodsInCart.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  goodsInCart: store.goodsInCart,
});

export default connect(mapStateToProps)(Content);
