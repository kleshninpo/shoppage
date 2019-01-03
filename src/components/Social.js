import React, { Component } from 'react';
import social from '../data/social.js';

const renderSocial = ({ id, img, href }) => {
  const style = {
    background: `url(${img}) center center no-repeat`,
  };
  return <a href={href} className='social-item' style={style} key={id}> </a>;
};

class Social extends Component {
  render () {
    return (
      <div className='Social'>
        <p>Shop24 в социальных сетях:</p>
        {social.map(item => renderSocial(item))}
      </div>
    );
  }
}

export default Social;
