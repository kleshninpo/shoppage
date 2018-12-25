import React, { Component } from 'react';
import LinksList from '../components/LinksList';

class TopLine extends Component {
  render () {
    return (
      <div className='TopLine'>
        <div className="content-wrapper">
          <a href="tel:8(800)500-75-55">
            <span>8(800)500-75-55</span> Бесплатный звонок по России</a>
          <LinksList/>
        </div>
      </div>
    );
  }
}

export default TopLine;
