import React, { Component } from 'react';
import Logo from "./Logo";
import Contacts from "./Contacts";
import FooterList from "../components/FooterList";

class FooterContent extends Component {
    render () {
        return (
            <div className="Footer-content">
                <Logo/>
                <Contacts/>
                <FooterList/>
            </div>
        )
    }
}

export default FooterContent;