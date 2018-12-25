import React, { Component } from 'react';
import footerList from '../data/footerList';

const renderFooterListItem = ({ id, text, href}) => (
  <li key={id}>
    <a href={href}>{text}</a>
  </li>
);

class FooterList extends Component {
  render () {

    return (
      <div className='footer-list-wrapper'>
        {
          footerList.map((list, i) => (
              <ul key={i}>
                {
                  list.map(item => renderFooterListItem(item))
                }
              </ul>
            )
          )
        }
      </div>
    );
  }
}

export default FooterList;
