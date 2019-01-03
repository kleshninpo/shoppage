import React, { Component } from 'react';
import Social from '../components/Social';
import FooterContent from './FooterContent';
import Copyright from './Copyright';

class Footer extends Component {
  render () {
    return (
      <footer className="Footer">
        <div className="content-wrapper Footer__content-wrapper">
          <Social/>
          <FooterContent/>
          <Copyright/>
        </div>
      </footer>
    );
  }
}

export default Footer;
