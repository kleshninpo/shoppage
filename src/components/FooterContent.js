import React, { Component } from 'react';
import Logo from './Logo';
import Contacts from './Contacts';
import FooterList from '../components/FooterList';

class FooterContent extends Component {
  render () {
    return (
      <div className="Footer-content">
        <div className='logo-contacts-container'>
          <Logo/>
          <Contacts/>
        </div>
        <FooterList/>
      </div>
    );
  }
}

export default FooterContent;
