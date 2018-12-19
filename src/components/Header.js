import React, { Component } from 'react';
import TopLine from '../components/TopLine';
import Content from '../components/Content';
import Categories from '../components/Categories';

class Header extends Component {
    render () {
        return (
            <header className="App-header">
                <TopLine/>
                <Content/>
                <Categories/>
            </header>
        )
    }
}

export default Header;