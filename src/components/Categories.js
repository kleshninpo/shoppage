import React, { Component } from 'react';
import categories from '../data/categories';

const renderCategories = ({ id, href, text, submenu }) => (
  <li key={id} className='categories-list__item'>
    <a href={href}>{text}</a>
    {submenu ?
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
  render () {
    return (
      <div className="categories-list-wrapper">
        <div className="content-wrapper">
          <ul className='categories-list'>
            {
              categories.map(item => renderCategories(item))
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default Categories;
