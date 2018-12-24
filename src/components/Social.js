import React, { Component } from 'react';
import social from '../data/social.js';

const renderSocial = ({id, img}) => {
    const style = {
        background: `url(${img}) center center no-repeat`,
    };
    return <div className='social-item' style={style} key={id}> </div>
};

class Social extends Component {
    render () {
        return (
            <div className='Social'>
                <p>Shop24 в социальных сетях:</p>
                {social.map(item => renderSocial(item))}
            </div>
        )
    }
}

export default Social;