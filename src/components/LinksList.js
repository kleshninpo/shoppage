import React, { Component } from 'react';
import logosHeader from '../data/logosHeader';

const renderLinks = ({id, src, about, href, text}) => {
    return (
        <a className='logo-link' key={id} href={href}>
            <img src={src} alt={about}/>
            {text}
        </a>
    )
};

class LinksList extends Component {

    render () {
        return (
            <div className='LinksList'>
                    {
                        logosHeader.map(logo => {
                            return renderLinks(logo);
                        })
                    }
            </div>
        )
    }
}

export default LinksList;