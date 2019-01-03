import React, { Component } from 'react';
import TopLine from '../components/TopLine';
import Content from '../containers/Content';
import Categories from '../containers/Categories';

class Header extends Component {
  render () {

    return (
      <header className="App-header">
        <TopLine/>
        <Content/>
        <Categories/>
      </header>
    );
  }
}

export default Header;
