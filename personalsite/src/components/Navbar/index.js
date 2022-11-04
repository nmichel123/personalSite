import React from 'react';
import './style.css';

class Navbar extends React.Component{
    render () {
        return (
            <div className='Nav'>
                <ul className="innerNav">
                <li><a>Cup</a></li>
                <li><a>Boxcar</a></li>
                <li><a>Product</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar