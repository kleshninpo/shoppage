import React, { Component } from 'react';

class Contacts extends Component {
    render () {
        return (
            <div className='footer-contacts'>
                <a href="tel:8(800)500-75-55">8 (800) 500-75-55*</a>
                <p className='freeCall'>*Бесплатный звонок по России</p>
                <a href="tel:8(495)733-96-03">8 (495) 733-96-03</a>
            </div>
        )
    }
}

export default Contacts;