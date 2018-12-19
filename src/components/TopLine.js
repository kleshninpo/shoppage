import React, { Component } from 'react';
import LinksList from '../components/LinksList';

class TopLine extends Component {
    render () {
        return (
            <div className='TopLine'>
                <a href="tel:8(800)500-75-55">8(800)500-75-55 Бесплатный звонок по России</a>
                <LinksList/>
            </div>
        )
    }
}

export default TopLine;