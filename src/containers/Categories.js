import React, { Component } from 'react';
import { connect } from 'react-redux';
import categories from '../data/categories';
import { showHamburgerAction } from '../actions/showHamburger';
import background from '../img/delete.png';

const width = document.body.clientWidth;
function onAnchorClick(e) {
  if (width <= 600) {
    return e.preventDefault();
  }

  return e;
}

const renderCategories = ({ id, href, text, submenu }) => (
  <li key={id} className='categories-list__item'>
    <a href={href} onClick={e => onAnchorClick(e)}
       className='anchor'>{text}</a>
    {
      submenu ?
        <ul className='submenu'>
          {submenu.map(item => (
            <li key={item.id}>
              <a href={item.href}>
                {item.text}
              </a>
            </li>
          ))}
        </ul> : ''
    }
  </li>
);

class Categories extends Component {

  onHamburgerClick = () => {
    this.props.showHamburger ?
      this.refs.categoriesList.setAttribute('class', 'categories-list') :
      this.refs.categoriesList.setAttribute('class', 'categories-list active');
    return this.props.showHamburgerAction();
  };

  buttonStyle = {
    background: `url(${background}) center center no-repeat`,
    backgroundSize: 'cover',
  };

  render () {
    return (
      <div className="categories-list-wrapper">
        <div className="content-wrapper categories-list__content-wrapper">
          <button
            ref='hamburger'
            className='hamburger'
            onClick={() => this.onHamburgerClick()}
            style={this.props.showHamburger ? this.buttonStyle : {}}
          />
          <ul
            ref='categoriesList'
            className='categories-list'>
            {
              categories.map(item => renderCategories(item))
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  showHamburger: store.showHamburger,
});
const mapDispatchToProps = dispatch => ({
  showHamburgerAction: () => dispatch(showHamburgerAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
