import React, { Component } from 'react';
import logosHeader from '../data/logosHeader';

const renderLinks = ({ id, src, about, href, text }) => (
    <a className='logo-link' key={id} href={href}>
      <img src={src} alt={about}/>
      <p>{text}</p>
    </a>
);

class LinksList extends Component {

  render () {
    return (
      <div className='LinksList'>
        {
          logosHeader.map(logo => (
            renderLinks(logo)
          ))
        }
      </div>
    );
  }
}

export default LinksList;
